'use client';
import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";

// Estilo para las tarjetas dinámicas
const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)", // Movimiento suave al hover
  },
  width: "100%", // Ancho completo en pantallas pequeñas
  marginBottom: theme.spacing(3),
  borderRadius: "20px", // Bordes más redondeados
  backgroundColor: "#f9f9f9", // Fondo suave para las tarjetas
  padding: theme.spacing(3), // Espaciado interno
  [theme.breakpoints.up("md")]: {
    width: "75%", // Ancho más grande en pantallas medianas y grandes
    margin: "auto", // Centrado horizontal en pantallas más grandes
  },
}));

// Estilo para los botones de acción personalizados
const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  fontSize: "0.875rem",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "10px",
  transition: "background-color 0.3s ease",
}));

const ActivateButton = styled(ActionButton)({
  backgroundColor: "#4caf50",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
});

const DeactivateButton = styled(ActionButton)({
  backgroundColor: "#ff9800",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#f57c00",
  },
});

const DeleteButton = styled(ActionButton)({
  backgroundColor: "#f44336",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#d32f2f",
  },
});

const UpdateButton = styled(ActionButton)({
  backgroundColor: "#2196f3",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
});

const ProveedorLista = () => {
  const [proveedores, setProveedores] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre_proveedor: "",
    email_proveedor: "",
    celular_proveedor: "",
    activo_proveedor: true,
  });
  const [selectedProveedor, setSelectedProveedor] = useState<any>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [actionType, setActionType] = useState<'create' | 'update'>('create');

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const respuesta = await fetch('http://localhost:2000/api/proveedores');
      if (!respuesta.ok) throw new Error('Error al obtener todos los proveedores');
      const data = await respuesta.json();
      setProveedores(data);
    } catch (error) {
      console.error('Error al obtener los proveedores: ', error);
      setErrorMessage('Error al obtener los proveedores');
      setOpenSnackbar(true);
    }
  };

  const handleOpenModal = (proveedor: any = null) => {
    setSelectedProveedor(proveedor);
    if (proveedor) {
      setFormValues({
        nombre_proveedor: proveedor.nombre_proveedor,
        email_proveedor: proveedor.email_proveedor,
        celular_proveedor: proveedor.celular_proveedor,
        activo_proveedor: proveedor.activo_proveedor,
      });
      setActionType('update');
    } else {
      setFormValues({
        nombre_proveedor: "",
        email_proveedor: "",
        celular_proveedor: "",
        activo_proveedor: true,
      });
      setActionType('create');
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProveedor(null);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSaveProveedor = async () => {
    try {
      let url;
      let method;
      if (actionType === 'create') {
        url = 'http://localhost:2000/api/proveedores';
        method = 'POST';
      } else if (actionType === 'update') {
        url = `http://localhost:2000/api/proveedores/update/${selectedProveedor._id}`;
        method = 'PUT';
      }
      const response = await fetch(`${url}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al guardar el proveedor');
      }
      fetchProveedores();
      handleCloseModal();
    } catch (error) {
      console.error("Error al guardar el proveedor:", error);
      setErrorMessage("Error al guardar el proveedor");
      setOpenSnackbar(true);
    }
  };

  const handleActivate = async (id: string) => {
    try {
      await fetch(`http://localhost:2000/api/proveedores/active/${id}`, { method: 'PUT' });
      fetchProveedores();
    } catch (error) {
      console.error("Error al activar el proveedor:", error);
    }
  };

  const handleDeactivate = async (id: string) => {
    try {
      await fetch(`http://localhost:2000/api/proveedores/deactive/${id}`, { method: 'PUT' });
      fetchProveedores();
    } catch (error) {
      console.error("Error al desactivar el proveedor:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:2000/api/proveedores/delete/${id}`, { method: 'DELETE' });
      fetchProveedores();
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setErrorMessage("");
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px" }}>
      <section style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Gradiente de colores
        padding: "20px", // Espaciado interno
        borderRadius: "10px", // Bordes redondeados
        color: "#fff" // Color del texto
      }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenModal()}
          style={{ marginBottom: "30px" }} // Espaciado adicional
        >
          Crear Proveedor
        </Button>
        <Grid container spacing={4}>
          {proveedores.map((proveedor: any) => (
            <Grid item xs={12} md={6} key={proveedor._id}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {proveedor.nombre_proveedor}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {proveedor.email_proveedor}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Celular: {proveedor.celular_proveedor}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    style={{ 
                      color: proveedor.activo_proveedor ? "#4caf50" : "#f44336", // Verde si está activo, rojo si está inactivo
                      fontWeight: "bold"
                    }}
                  >
                    {proveedor.activo_proveedor ? "Activo" : "Desactivado"}
                  </Typography>
                  <UpdateButton onClick={() => handleOpenModal(proveedor)}>
                    Actualizar
                  </UpdateButton>
                  {proveedor.activo_proveedor ? (
                    <DeactivateButton onClick={() => handleDeactivate(proveedor._id)}>
                      Desactivar
                    </DeactivateButton>
                  ) : (
                    <ActivateButton onClick={() => handleActivate(proveedor._id)}>
                      Activar
                    </ActivateButton>
                  )}
                  <DeleteButton onClick={() => handleDelete(proveedor._id)}>
                    Eliminar
                  </DeleteButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </section>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>{actionType === 'create' ? "Crear Proveedor" : "Actualizar Proveedor"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre"
            name="nombre_proveedor"
            value={formValues.nombre_proveedor}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email_proveedor"
            value={formValues.email_proveedor}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Celular"
            name="celular_proveedor"
            value={formValues.celular_proveedor}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancelar</Button>
          <Button onClick={handleSaveProveedor} color="primary">
            {actionType === 'create' ? "Crear" : "Actualizar"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para mensajes */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity={errorMessage ? "error" : "success"} onClose={handleCloseSnackbar}>
          {errorMessage || "Operación exitosa"}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProveedorLista;