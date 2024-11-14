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
import { UpdateClientesDto } from '../dto/update-clientes.dto';
import { CreateClientesDto } from '../dto/create-clientes.dto';
import { ClientesService } from '../service/cliente.service';
import { Clientes } from '../schema/cliente.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes') // Define la ruta base
export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo cliente' })
    @ApiResponse({ status: 201, description: 'Cliente creado con éxito' })
    @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
    @ApiBody({
        description: 'Datos necesarios para crear un nuevo cliente',
        examples: {
            example: {
                summary: 'Ejemplo de creación de cliente',
                value: {
                    numero_identificacion: '123456789',
                    nombre_cliente: 'Juan Pérez',
                    email_cliente: 'juan.perez@gmail.com',
                    celular_cliente: '555-1234',
                    activo_cliente: true
                },
            },
        },
    })
    async create(@Body() createClientesDto: CreateClientesDto): Promise<Clientes> {
        return this.clientesService.createCliente(createClientesDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente encontrado' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiParam({
        name: 'id',
        description: 'ID del cliente que deseas obtener',
        type: String,
    })
    async findOne(@Param('id') id: string): Promise<Clientes> {
        return await this.clientesService.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener la lista de todos los clientes' })
    @ApiResponse({ status: 200, description: 'Lista de clientes obtenida con éxito' })
    async findAll(): Promise<Clientes[]> {
        return await this.clientesService.findAll();
    }

    @Put('active/:id')
    @ApiOperation({ summary: 'Activar un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente activado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiParam({
        name: 'id',
        description: 'ID del cliente que deseas activar',
        type: String,
    })
    async active(@Param('id') id: string): Promise<void> {
        await this.clientesService.active(id);
    }
    
    @Put('update/:id')
    @ApiOperation({ summary: 'Actualizar un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente actualizado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiBody({
        description: 'Datos necesarios para actualizar un cliente',
        examples: {
            example: {
                summary: 'Ejemplo de actualización de cliente',
                value: {
                    nombre_cliente: 'Juan Pérez Actualizado',
                    email_cliente: 'nuevo.email@gmail.com',
                    celular_cliente: '555-9876',
                    activo_cliente: false
                },
            },
        },
    })
    async update(@Param('id') id: string, @Body() updateClientesDto: UpdateClientesDto): Promise<Clientes> {
        const updatedCliente = await this.clientesService.update(id, updateClientesDto);
        if (!updatedCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updatedCliente;
    }

    @Patch('updatePartial/:id')
    @ApiOperation({ summary: 'Actualizar parcialmente un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente actualizado parcialmente con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiBody({
        description: 'Datos necesarios para una actualización parcial del cliente',
        examples: {
            example: {
                summary: 'Ejemplo de actualización parcial',
                value: {
                    celular_cliente: '555-5555',
                },
            },
        },
    })
    async updatePartial(@Param('id') id: string, @Body() updateClientesDto: Partial<UpdateClientesDto>): Promise<Clientes> {
        const updatedPartialCliente = await this.clientesService.updatePartial(id, updateClientesDto);
        if (!updatedPartialCliente) {
            throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
        }
        return updatedPartialCliente;
    }

    @Delete('delete/:id')
    @ApiOperation({ summary: 'Eliminar un cliente por ID' })
    @ApiResponse({ status: 204, description: 'Cliente eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiParam({
        name: 'id',
        description: 'ID del cliente que deseas eliminar',
        type: String,
    })
    async remove(@Param('id') id: string): Promise<void> {
        await this.clientesService.delete(id);
    }

    @Put('deactivate/:id')
    @ApiOperation({ summary: 'Desactivar un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente desactivado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiParam({
        name: 'id',
        description: 'ID del cliente que deseas desactivar',
        type: String,
    })
    async deactivate(@Param('id') id: string): Promise<void> {
        await this.clientesService.deactivate(id);
    }
}