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
    @ApiResponse({ status: 201, description: 'Cliente creado con éxito', type: Clientes })
    @ApiResponse({ status: 400, description: 'Error en la creación del cliente' })
    @ApiBody({
        description: 'Datos del cliente a crear',
        type: CreateClientesDto,
    })
    async create(@Body() createClientesDto: CreateClientesDto): Promise<Clientes> {
        return await this.clientesService.createCliente(createClientesDto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los clientes' })
    @ApiResponse({ status: 200, description: 'Lista de clientes', type: [Clientes] })
    async findAll(): Promise<Clientes[]> {
        return await this.clientesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente encontrado', type: Clientes })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiParam({
        name: 'id',
        description: 'ID del cliente que deseas obtener',
        type: String,
    })
    async findOne(@Param('id') id: string): Promise<Clientes> {
        const cliente = await this.clientesService.findOne(id);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
        return cliente;
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar un cliente por ID' })
    @ApiResponse({ status: 200, description: 'Cliente actualizado', type: Clientes })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    @ApiBody({
        description: 'Datos del cliente a actualizar',
        type: UpdateClientesDto,
    })
    async update(@Param('id') id: string, @Body() updateClientesDto: UpdateClientesDto): Promise<Clientes> {
        const cliente = await this.clientesService.update(id, updateClientesDto);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
        return cliente;
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un cliente por ID' })
    @ApiResponse({ status: 204, description: 'Cliente eliminado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    async remove(@Param('id') id: string): Promise<void> {
        const cliente = await this.clientesService.findOne(id);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
        await this.clientesService.delete(id);
    }

    @Patch('deactivate/:id')
    @ApiOperation({ summary: 'Desactivar un cliente por ID' })
    @ApiResponse({ status: 204, description: 'Cliente desactivado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    async deactivate(@Param('id') id: string): Promise<void> {
        await this.clientesService.deactivate(id);
        const cliente = await this.clientesService.findOne(id);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
    }

    @Patch('active/:id')
    @ApiOperation({ summary: 'Activar un cliente por ID' })
    @ApiResponse({ status: 204, description: 'Cliente activado con éxito' })
    @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
    async active(@Param('id') id: string): Promise<void> {
        await this.clientesService.active(id);
        const cliente = await this.clientesService.findOne(id);
        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }
    }
}