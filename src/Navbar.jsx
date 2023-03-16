import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="/nosotros">Nosotros</a>
      <a href="proyectos">Proyectos</a>
      <a href="contacto">Contacto</a>
    </NavbarWrapper>
  );
}

export default Navbar;
