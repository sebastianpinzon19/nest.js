import { Injectable, NotAcceptableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

//Importamos nuestro esquema
import {proveedores} from '../schema/proveedores.schema'