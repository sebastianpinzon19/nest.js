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

import { ProveedoresService } from '../service/proveedores.service';
import { CreateProveedoresDto } from '../dto/create-proveedores.dto';
import { UpdateProveedoresDto } from '../dto/update-proveedores.dto';
import { Proveedores } from '../schema/proveedores.schema';

// Importación necesaria para documentar en swagger para los endpoints
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('proveedor')//Etiqueta para agripar endpoints enla documentacion
@Controller('proveedores')//ruta base 
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}
}

