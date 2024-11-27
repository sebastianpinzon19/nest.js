import React from "react";
import Link from "next/link";
import Home from "../pages/home/principal/Home";
import ProveedorLista from '../pages/proveedores/lista/ListaProveedores'

const NavbarRoutes = () =>{
    return(
        <nav>
            <ul>
                
                <li>
                    <Link href="/home"> Home</Link>
                </li>
                <li>
                    <Link href="/proveedores"> Proveedores</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavbarRoutes;