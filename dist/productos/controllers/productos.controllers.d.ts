import { ProductosServices } from '../services/productos.services';
import { CreateProductoDto } from '../dto/create-productos.dto';
import { UpdateProductosDto } from '../dto/update-productos-dto';
import { Productos } from '../schema/productos.schema';
export declare class ProductosControllers {
    private readonly productosServices;
    constructor(productosServices: ProductosServices);
    create(createProductosDto: CreateProductoDto): Promise<Productos>;
    deactive(id: string): Promise<void>;
    active(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Productos[]>;
    findOne(id: string): Promise<Productos>;
    udpate(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos>;
    udpatePartial(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos>;
    agregarProveedorProducto(productoId: string, proveedorId: string): Promise<Productos>;
    eliminarProveedorProducto(productoId: string, proveedorId: string): Promise<Productos>;
    agregarClienteAProducto(productoId: string, clienteId: string): Promise<Productos>;
    eliminarCLienteDeProducto(productoId: string, clienteId: string): Promise<Productos>;
}
