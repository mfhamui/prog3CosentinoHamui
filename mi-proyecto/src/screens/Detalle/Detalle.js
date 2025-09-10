import React from "react";
import Menu from "../../components/Menu/Menu";

function Detalle(props) {
    const idParam = Number(props.match.params.id);
    const typeParam = props.match.params.type;
    
    let itemsMenu = [
        { ruta: "/",            nombre: "Home" },
        { ruta: "/peliculas",   nombre: "Películas" },
        { ruta: "/series",      nombre: "Series" },
        { ruta: "/favoritos",   nombre: "Favoritas" },
      ];
    
    return (
        <React.Fragment>
            <Menu itemsMenu={itemsMenu}/>
           
            
        </React.Fragment>

    );
}

export default Detalle;