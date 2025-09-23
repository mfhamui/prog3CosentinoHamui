import React from "react";
import { Link } from "react-router-dom";

function ElementoMenu(props) {
      return (

            <li> <Link to={props.ruta}>{props.nombre}</Link></li>

      )

}

export default ElementoMenu;