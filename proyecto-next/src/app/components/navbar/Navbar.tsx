'use client';
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import Link from "next/link";

// Estilos personalizados para los elementos del sidebar
const SidebarContainer = styled(Box)({
  width: 250,
  background: "linear-gradient(135deg, #159040FF 0%, #09AC24FF 100%)",
  height: "100vh",
  color: "#fff",
  padding: "20px",
  transition: "all 0.3s ease-in-out",
});

const SidebarHeader = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "1rem",
  color: "#fff",
});

const SidebarItem = styled(ListItem)({
  padding: "15px 10px",
  margin: "10px 0",
  borderRadius: "10px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(254, 255, 255, 0.1)",
    transform: "translateY(-3px)",
  },
});

const SidebarDivider = styled(Divider)({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  margin: "10px 0",
});

// Estilo personalizado para el ícono del menú
const StyledMenuIcon = styled(MenuIcon)({
  fontSize: "2rem",
  color: "#000",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setIsOpen(open);
  };

  const sidebarContent = (
    <SidebarContainer role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <SidebarHeader variant="h6">Navegación</SidebarHeader>
      <List>
        <SidebarItem>
          <Link href="/" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
            <ListItemText primary="Home" />
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/pages/proveedores" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
            <ListItemText primary="Proveedores" />
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/pages/clientes" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
            <ListItemText primary="Clientes" />
          </Link>
        </SidebarItem>
        <SidebarItem>
          <Link href="/pages/productos" passHref style={{ color: "inherit", textDecoration: "none", width: "100%" }}>
            <ListItemText primary="Productos" />
          </Link>
        </SidebarItem>
      </List>
      <SidebarDivider />
      <Typography variant="caption" sx={{ textAlign: "center", display: "block", marginTop: "1rem", opacity: 0.7 }}>
        Sistema de Gestión © 2024
      </Typography>
    </SidebarContainer>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <StyledMenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#000" }}>
            MENU
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {sidebarContent}
      </Drawer>
    </>
  );
};

export default Navbar;