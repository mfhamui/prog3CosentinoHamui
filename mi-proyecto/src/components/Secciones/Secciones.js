import React from "react";
import Seccion from "../Seccion/Seccion";

function Secciones(props) {
  return (
    <section>
      {props.lista.map(function(sec, i){
        return (
          <Seccion
            key={sec.titulo + i}
            titulo={sec.titulo}
            endpoint={sec.endpoint}
            verTodas={sec.verTodas}
            cant={sec.cant}

          />
        );
      })}
    </section>
  );
}

export default Secciones;
