import ProductosComponent from "./listaProductos/ListaProductos";

export default function ProductosPage() {
  // Aquí puedes definir un productoId para pasar al componente
 

  return (
    <div>
      
      {/* Renderiza el componente de gestión de proveedores y clientes */}
      <ProductosComponent />
    </div>
  );
}