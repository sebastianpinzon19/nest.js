'use client';

import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { Productos } from '@/app/types/Producto.type'; // Asegúrate de que la ruta sea correcta

// Estilo para las tarjetas dinámicas
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)', // Movimiento suave al hover
  },
  width: '100%', // Ancho completo en pantallas pequeñas
  marginBottom: theme.spacing(3),
  borderRadius: '20px', // Bordes más redondeados
  backgroundColor: '#f9f9f9', // Fondo suave para las tarjetas
  padding: theme.spacing(3), // Espaciado interno
  [theme.breakpoints.up('md')]: {
    width: '75%', // Ancho más grande en pantallas medianas y grandes
    margin: 'auto', // Centrado horizontal en pantallas más grandes
  },
}));

// Estilo para los botones de acción personalizados
const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  fontSize: '0.875rem',
  fontWeight: 'bold',
  textTransform: 'none',
  borderRadius: '10px',
  transition: 'background-color 0.3s ease',
}));

const AddButton = styled(ActionButton)({
  backgroundColor: '#4caf50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#388e3c',
  },
});

const DeleteButton = styled(ActionButton)({
  backgroundColor: '#f44336',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d32f2f',
  },
});

const ProductosComponent: React.FC = () => {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [nuevoProducto, setNuevoProducto] = useState<Omit<Productos, '_id'>>({
    nombre_producto: '',
    cantidad: 0,
    precio: 0,
    proveedor: [],
    cliente: [],
    activo: true,
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Función para obtener todos los productos
  const obtenerProductos = async () => {
    const response = await fetch('http://localhost:2000/api/productos');
    const data = await response.json();
    setProductos(data);
  };

  // Función para crear un nuevo producto
  const crearProducto = async () => {
    const response = await fetch('http://localhost:2000/api/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoProducto),
    });

    if (response.ok) {
      await obtenerProductos(); // Refrescar la lista de productos
      setNuevoProducto({ nombre_producto: '', cantidad: 0, precio: 0, proveedor: [], cliente: [], activo: true });
    } else {
      console.error('Error al crear producto');
      setErrorMessage('Error al crear producto');
      setOpenSnackbar(true);
    }
  };

  // Función para eliminar un producto
  const eliminarProducto = async (id: string) => {
    const response = await fetch(`http://localhost:2000/api/productos/delete/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await obtenerProductos(); // Refrescar la lista
    } else {
      console.error('Error al eliminar producto');
      setErrorMessage('Error al eliminar producto');
      setOpenSnackbar(true);
    }
  };

  // Función para activar o desactivar un producto
  const toggleActivo = async (id: string, activo: boolean) => {
    const response = await fetch(`http://localhost:2000/api/productos/${activo ? 'active' : 'deactive'}/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      await obtenerProductos(); // Refrescar la lista
    } else {
      console.error('Error al cambiar estado del producto');
      setErrorMessage('Error al cambiar estado del producto');
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setErrorMessage('');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '100px' }}>
      <section style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', padding: '20px', borderRadius: '10px', color: '#fff' }}>
        <Typography variant="h4" style={{ marginBottom: '30px' }}>Lista de Productos</Typography>
        <Grid container spacing={4}>
          {productos.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto._id}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {producto.nombre_producto}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Cantidad: {producto.cantidad}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Precio: ${producto.precio}
                  </Typography>
                  <Typography variant="body2" style={{ color: producto.activo ? '#4caf50' : '#f44336', fontWeight: 'bold' }}>
                    {producto.activo ? 'Activo' : 'Desactivado'}
                  </Typography>

                  {/* Mostrar proveedores relacionados */}
                  <Typography variant="body2" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    Proveedores:
                  </Typography>
                  {Array.isArray(producto.proveedor) && producto.proveedor.length > 0 ? (
                    producto.proveedor.map((prov: any) => (
                      <Typography key={prov._id} variant="body2" color="textSecondary">
                        {prov.nombre}
                      </Typography>
                    ))
                  ) : (
                    <Typography variant="body2" color="textSecondary">
                      Sin proveedores
                    </Typography>
                  )}


                  <Button onClick={() => toggleActivo(producto._id, !producto.activo)}>
                    {producto.activo ? 'Desactivar' : 'Activar'}
                  </Button>
                  <DeleteButton onClick={() => eliminarProducto(producto._id)}>Eliminar</DeleteButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" style={{ marginTop: '30px' }}>Agregar Nuevo Producto</Typography>
        <TextField
          label="Nombre del Producto"
          value={nuevoProducto.nombre_producto}
          onChange={(e: any) => setNuevoProducto({ ...nuevoProducto, nombre_producto: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cantidad"
          type="number"
          value={nuevoProducto.cantidad}
          onChange={(e: any) => setNuevoProducto({ ...nuevoProducto, cantidad: +e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          type="number"
          value={nuevoProducto.precio}
          onChange={(e: any) => setNuevoProducto({ ...nuevoProducto, precio: +e.target.value })}
          fullWidth
          margin="normal"
        />
        <AddButton onClick={crearProducto}>Agregar Producto</AddButton>
      </section>

      {/* Snackbar para mensajes */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity={errorMessage ? 'error' : 'success'} onClose={handleCloseSnackbar}>
          {errorMessage || 'Operación exitosa'}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductosComponent;