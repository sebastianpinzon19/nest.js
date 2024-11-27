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
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('productos')
@Controller('productos')
export class ProductosControllers{
    constructor(private readonly productosServices: ProductosServices){

    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo producto' })
    @ApiResponse({ status: 201, description: 'Producto creado', type: Productos })
    @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
    @ApiBody({
        type: CreateProductoDto,
        examples: {
            ejemplo1: {
                summary: 'Ejemplo de creación de producto',
                value: {
                    nombre_producto: 'Producto Ejemplo',
                    cantidad: 10,
                    precio: 100.50,
                    proveedor: ['proveedorId1', 'proveedorId2'],
                    cliente: ['clienteId1'],
                    activo: true,
                },
            },
        },
    })
    async create(@Body()createProductosDto: CreateProductoDto): Promise<Productos>{
        return this.productosServices.createProducto(createProductosDto);
    }

    @Put('deactive/:id')
    @ApiOperation({ summary: 'Desactivar un producto por ID' })
    @ApiResponse({ status: 204, description: 'Producto desactivado' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async deactive(@Param('id') id: string): Promise<void>{
        await this.productosServices.deactive(id);
    }

    @Put('active/:id')
    @ApiOperation({ summary: 'Activar un producto por ID' })
    @ApiResponse({ status: 204, description: 'Producto activado' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async active(@Param('id') id: string): Promise<void>{
        await this.productosServices.active(id);
    }

    @Delete('delete/:id')
    @ApiOperation({ summary: 'Eliminar un producto por ID' })
    @ApiResponse({ status: 204, description: 'Producto eliminado' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async delete(@Param('id') id: string): Promise<void>{
        await this.productosServices.delete(id);
    }


    @Get()
    @ApiOperation({ summary: 'Obtener todos los productos' })
    @ApiResponse({ status: 200, description: 'Lista de productos', type: [Productos] })
    async findAll(): Promise<Productos[]>{
        return await this.productosServices.findAllProdutos();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Obtener un producto por ID' })
    @ApiResponse({ status: 200, description: 'Producto encontrado', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async findOne(@Param('id') id: string): Promise<Productos>{
        return await this.productosServices.findOne(id);
    }

    @Put('update/:id')
    @ApiOperation({ summary: 'Actualizar un producto por ID' })
    @ApiResponse({ status: 200, description: 'Producto actualizado', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    @ApiBody({
        type: UpdateProductosDto,
        examples: {
            ejemplo1: {
                summary: 'Ejemplo de actualización de producto',
                value: {
                    nombre_producto: 'Producto Actualizado',
                    cantidad: 20,
                    precio: 150.00,
                    proveedor: ['proveedorId1'],
                    cliente: ['clienteId2'],
                    activo: false,
                },
            },
        },
    })
    async update(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos> {
        return await this.productosServices.update(id, updateProductosDto);
    }

    @Patch('updatePartial/:id')
    @ApiOperation({ summary: 'Actualizar parcialmente un producto por ID' })
    @ApiResponse({ status: 200, description: 'Producto actualizado parcialmente', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    @ApiBody({
        type: UpdateProductosDto,
        examples: {
            ejemplo1: {
                summary: 'Ejemplo de actualización parcial',
                value: {
                    precio: 120.00,
                },
            },
        },
    })
    async updatePartial(@Param('id') id: string, @Body() updateProductosDto: UpdateProductosDto): Promise<Productos> {
        return await this.productosServices.updatePartial(id, updateProductosDto);
    }

    // Ruta para agregar un proveedor a un producto
    @Patch(':productoId/proveedores/:proveedorId')
    @ApiOperation({ summary: 'Agregar un proveedor a un producto' })
    @ApiResponse({ status: 200, description: 'Proveedor agregado al producto', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto o proveedor no encontrado' })
    async agregarProveedorProducto(
        @Param('productoId') productoId: string,
        @Param('proveedorId') proveedorId: string,
    ): Promise<Productos> {
        return await this.productosServices.agregarProveedorAProducto(productoId, proveedorId);
    }

    @Patch(':productoId/proveedores/:proveedorId/eliminar')
    @ApiOperation({ summary: 'Eliminar un proveedor de un producto' })
    @ApiResponse({ status: 200, description: 'Proveedor eliminado del producto', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto o proveedor no encontrado' })
    async eliminarProveedorProducto(@Param('productoId') productoId: string, @Param('proveedorId') proveedorId: string): Promise<Productos> {
        return await this.productosServices.eliminarProveedorDeProducto(productoId, proveedorId);
    }

    @Patch(':productoId/clientes/:clienteId')
    @ApiOperation({ summary: 'Agregar un cliente a un producto' })
    @ApiResponse({ status: 200, description: 'Cliente agregado al producto', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto o cliente no encontrado' })
    async agregarClienteAProducto(@Param('productoId') productoId: string,@Param('clienteId') clienteId: string): Promise<Productos>{
        
        return await this.productosServices.agregarClientesAProducto(productoId, clienteId);
    }

    @Patch(':productoId/clientes/:clienteId/eliminar')
    @ApiOperation({ summary: 'Eliminar un cliente de un producto' })
    @ApiResponse({ status: 200, description: 'Cliente eliminado del producto', type: Productos })
    @ApiResponse({ status: 404, description: 'Producto o cliente no encontrado' })
    async eliminarCLienteDeProducto(@Param('productoId') productoId: string, @Param('clienteId') clienteId: string): Promise<Productos>{
        return await this.productosServices.eliminarClientesDeProducto(productoId, clienteId);
    }


}