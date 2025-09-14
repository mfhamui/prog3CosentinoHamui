import React from "react";
import ElementoMenu from "../ElementoMenu/ElementoMenu";
import "./Menu.css"; // 
import Buscador from "../Buscador/Buscador";

function Menu(props) {

const items = props.itemsMenu 
  return (
    <React.Fragment>
    <h1 className= "titulo">TV Fan </h1>
    <nav className="nav">
      <ul className="user">
        <li>
          <img src="/assets/img/logo.png" alt="" />
        </li>
      </ul>
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
    </React.Fragment>
  );
}

export default Menu;


