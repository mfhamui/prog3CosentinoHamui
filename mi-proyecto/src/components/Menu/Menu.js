import React from "react";
import ElementoMenu from "../ElementoMenu/ElementoMenu";
import "./Menu.css"; // 
import Buscador from "../Buscador/Buscador";

function Menu(props) {

const items = props.itemsMenu 
  return (
    <nav className="nav">
      <ul className="menu">
        {items.map((item, idx) => (
          <ElementoMenu
            key={item.nombre + idx}
            nombre={item.nombre}
            ruta={item.ruta}
          />
        ))}
      </ul>
         <Buscador />
   
    </nav>
  );
}

export default Menu;


