import { 
    Controller, 
    Post, 
    Body, 
    Delete, 
    Param, 
    NotFoundException, 
    Get, 
    Put,
    Patch
} from '@nestjs/common';
import { ProductosServices } from '../services/productos.services';
import { CreateProductoDto } from '../dto/create-productos.dto';
import { UpdateProductosDto } from '../dto/update-productos-dto';
import { Productos } from '../schema/productos.schema';

@Controller('productos')
export class ProductosControllers{
    constructor(private readonly productosServices: ProductosServices){

    }

    @Post()
    async create(@Body()createProductosDto: CreateProductoDto): Promise<Productos>{
        return this.productosServices.createProducto(createProductosDto);
    }

    @Put('deactive/:id')
    async deactive(@Param('id') id: string): Promise<void>{
        await this.productosServices.deactive(id);
    }

    @Put('active/:id')
    async active(@Param('id') id: string): Promise<void>{
        await this.productosServices.active(id);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: string): Promise<void>{
        await this.productosServices.delete(id);
    }


    @Get()
    async findAll(): Promise<Productos[]>{
        return await this.productosServices.findAllProdutos();
    }


    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Productos>{
        console.log('ID recibido:', id); // Agrega esto para depurar
        return await this.productosServices.findOne(id);
    }

    @Put('update/:id')
    async udpate(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos>{
        const updateProducto = await this.productosServices.udpate(id, updateProductosDto);
        if(!updateProducto){
            throw new NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updateProducto
    }

    @Patch('updatePartial/:id')
    async udpatePartial(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos>{
        const updatePartialProducto = await this.productosServices.udpatePartial(id, updateProductosDto);
        if(!updatePartialProducto){
            throw new NotFoundException(`Producto con Id ${id} no se encontro`);
        }
        return updatePartialProducto
    }

    // Ruta para agregar un proveedor a un producto
    @Patch(':productoId/proveedores/:proveedorId')
    async agregarProveedorProducto(
        @Param('productoId') productoId: string,
        @Param('proveedorId') proveedorId: string,
    ): Promise<Productos> {
        return await this.productosServices.agregarProveedorAProducto(productoId, proveedorId);
    }

    @Patch(':productoId/proveedores/:proveedorId/eliminar')
    async eliminarProveedorProducto(@Param('productoId') productoId: string, @Param('proveedorId') proveedorId: string): Promise<Productos> {
        return await this.productosServices.eliminarProveedorDeProducto(productoId, proveedorId);
    }

    @Patch(':productoId/clientes/:clienteId')
    async agregarClienteAProducto(@Param('productoId') productoId: string,@Param('clienteId') clienteId: string): Promise<Productos>{
        
        return await this.productosServices.agregarClientesAProducto(productoId, clienteId);
    }

    @Patch(':productoId/clientes/:clienteId/eliminar')
    async eliminarCLienteDeProducto(@Param('productoId') productoId: string, @Param('clienteId') clienteId: string): Promise<Productos>{
        return await this.productosServices.eliminarClientesDeProducto(productoId, clienteId);
    }

}