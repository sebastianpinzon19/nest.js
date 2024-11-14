import { Model } from 'mongoose';
import { Productos } from '../schema/productos.schema';
import { CreateProductoDto } from '../dto/create-productos.dto';
import { UpdateProductosDto } from '../dto/update-productos-dto';
import { ProveedoresServices } from 'src/module/proveedores/service/proveedores.service';
import { ClientesService } from 'src/module/clientes/service/cliente.service';
export declare class ProductosServices {
    private productosModel;
    private proveedoresServices;
    private clientesServices;
    constructor(productosModel: Model<Productos>, proveedoresServices: ProveedoresServices, clientesServices: ClientesService);
    createProducto(createProductosDto: CreateProductoDto): Promise<Productos>;
    findAllProdutos(): Promise<Productos[]>;
    findOne(id: string): Promise<Productos>;
    udpate(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos>;
    udpatePartial(id: string, updateProductosDto: UpdateProductosDto): Promise<Productos>;
    deactive(id: string): Promise<void>;
    active(id: string): Promise<void>;
    delete(id: string): Promise<void>;
    agregarProveedorAProducto(productoId: string, proveedorId: string): Promise<Productos>;
    eliminarProveedorDeProducto(productoId: string, proveedorId: string): Promise<Productos>;
    agregarClientesAProducto(productoId: string, clienteId: string): Promise<Productos>;
    eliminarClientesDeProducto(productoId: string, clienteId: string): Promise<Productos>;
}
