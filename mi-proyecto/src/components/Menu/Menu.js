import React from "react";
import ElementoMenu from "../ElementoMenu/ElementoMenu";

function Menu(props) {

const items = props.itemsMenu 
  return (
    <nav>
      <ul className="main-nav">
        {items.map((item, idx) => (
          <ElementoMenu
            key={item.nombre + idx}
            nombre={item.nombre}
            ruta={item.ruta}
          />
        ))}
      </ul>

   
    </nav>
  );
}

export default Menu;


