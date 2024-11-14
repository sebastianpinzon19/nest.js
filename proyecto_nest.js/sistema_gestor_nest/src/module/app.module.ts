import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://sebastianpinzon3954:<sebastianpinzon3954>@cluster0.ueq1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    ProveedoresModule,
    ClientesModule,
    ProductosModule,
  ],
})
export class AppModule {
  constructor() {
    connectToDatabase().catch(console.dir);
  }
}
