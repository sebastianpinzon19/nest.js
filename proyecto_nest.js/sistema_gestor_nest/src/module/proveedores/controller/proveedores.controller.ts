import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  NotFoundException,
  Get,
  Put,
  Patch,
} from '@nestjs/common';

import { ProveedoresServices } from '../service/proveedores.service';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';
import { Proveedores } from '../schema/proveedores.schema';

// Importación necesaria para documentar en swagger para los endpoints
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('proveedor')//Etiqueta para agripar endpoints enla documentacion
@Controller('proveedores')//ruta base 
export class ProveedoresController {
    
    
    constructor(private readonly proveedoresService: ProveedoresServices) 
    {

    }
    //rutas con controladores

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo proveedor' })
    @ApiResponse({ status: 201, description: 'El proveedor ha sido creado' })
    @ApiResponse({ status: 400, description: 'Solicitud incorrecta' })
    @ApiBody({
      description: 'Cuerpo de solicitud para crear un nuevo proveedor',
      examples: {
        example: {
          summary: 'Ejemplo de creación',
          value: {
            nombre_proveedor: 'Nombre_Proveedor',
            email_proveedor: 'proveedor@gmail.com',
            celular_proveedor: '1234567890',
          },
        },
      },
    })
    async create(@Body() createProveedorDto: CreateProveedoresDto): Promise<Proveedores> {
      return this.proveedoresService.createProveedor(createProveedorDto);
    }
    
    @Put('deactive/:id')
    @ApiOperation({ summary: 'Desactivar un proveedor' })
    @ApiResponse({ status: 204, description: 'Proveedor desactivado' })
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' })
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Id del proveedor que desea desactivar',
      type: String,
    })
    async deactive(@Param('id') id: string): Promise<void> {
      await this.proveedoresService.deactive(id);
    }
    
    @Put('active/:id')
    @ApiOperation({ summary: 'Activar un proveedor' })
    @ApiResponse({ status: 204, description: 'Proveedor activado' })
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' })
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' })
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Id del proveedor que desea activar',
      type: String,
    })
    async active(@Param('id') id: string): Promise<void> {
      await this.proveedoresService.active(id);
    }

    // Controlador para eliminar
    @Delete('delete/:id') // Descripción del endpoint
    @ApiOperation({ summary: 'Eliminar un proveedor' }) // Resumen de la operación
    @ApiResponse({ status: 204, description: 'Proveedor eliminado' }) // Respuesta exitosa
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' }) // Respuesta de error
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' }) // Respuesta de error
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Id del proveedor que desea eliminar', // Descripción del parámetro
      type: String,
    })
    async delete(@Param('id') id: string): Promise<void> {
      await this.proveedoresService.delete(id); // Llamada al servicio para eliminar el proveedor
    }

    // Controlador para obtener todos los proveedores
    @Get() // Descripción del endpoint
    @ApiOperation({ summary: 'Obtener todos los proveedores' }) // Resumen de la operación
    @ApiResponse({ status: 200, description: 'Lista de proveedores', type: [Proveedores] }) // Respuesta de éxito
    @ApiResponse({ status: 404, description: 'Paises no encontrados' }) // Respuesta de error
    async findAll(): Promise<Proveedores[]> {
      return await this.proveedoresService.findAll(); // Llamada al servicio para obtener todos los proveedores
    }

    @Get(':id') // Descripción del endpoint
    @ApiOperation({ summary: 'Obtener un proveedor por su Id' }) // Resumen de la operación
    @ApiResponse({ status: 204, description: 'Proveedor encontrado' }) // Respuesta exitosa
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' }) // Respuesta de error
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' }) // Respuesta de error
    @ApiParam({
      name: 'id',
      required: true,
      description: 'Id del proveedor que desea obtener',
      type: String,
    })
    async findOne(@Param('id') id: string): Promise<Proveedores> { // Asegúrate de que Proveedores esté definido
      return await this.proveedoresService.findOne(id); // Llamada al servicio para obtener el proveedor
    }

    @Put('update/:id') // Descripción del endpoint
    @ApiOperation({ summary: 'Actualizar un proveedor' }) // Resumen de la operación
    @ApiResponse({ status: 201, description: 'El proveedor ha sido actualizado' }) // Respuesta exitosa
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' }) // Respuesta de error
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' }) // Respuesta de error
    @ApiBody({
      description: 'Cuerpo de solicitud para actualizar un nuevo proveedor',
      examples: {
        example: {
          summary: 'Ejemplo de actualización',
          value: {
            nombre_proveedor: 'Proveedor_actualizado',
            email_proveedor: 'proveedordupdate@gmail.com',
            celular_proveedor: '1234567890',
          },
        },
      },
    })
    async update(@Param('id') id: string, @Body() updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores> {
      const updateProveedor = await this.proveedoresService.update(id, updateProveedoresDto);
      if (!updateProveedor) {
        throw new NotFoundException(`Proveedor con Id ${id} no se encontró`);
      }
      return updateProveedor;
    }

    @Patch('updatePartial/:id') // Descripción del endpoint
    @ApiOperation({ summary: 'Actualizar un proveedor parcialmente' }) // Resumen de la operación
    @ApiResponse({ status: 201, description: 'El proveedor ha sido actualizado' }) // Respuesta exitosa
    @ApiResponse({ status: 400, description: 'No se encuentra el proveedor' }) // Respuesta de error
    @ApiResponse({ status: 404, description: 'Solicitud incorrecta' }) // Respuesta de error
    @ApiBody({
      description: 'Cuerpo de solicitud para actualizar un nuevo proveedor',
      examples: {
        example: {
          summary: 'Ejemplo de actualización',
          value: {
            nombre_proveedor: 'Proveedor_actualizacionParcial',
            email_proveedor: 'proveedordupdateparcial@gmail.com',
            celular_proveedor: '12345674534',
          },
        },
      },
    })
    async updatePartial(@Param('id') id: string, @Body() updateProveedoresDto: UpdateProveedoresDto): Promise<Proveedores> {
      const updatePartialProveedor = await this.proveedoresService.updatePartial(id, updateProveedoresDto);
      if (!updatePartialProveedor) {
        throw new NotFoundException(`Proveedor con Id ${id} no se encontró`);
      }
      return updatePartialProveedor;
    }

}

