import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import Resultados from "./screens/Resultados/Resultados";
import NotFound from "./screens/Notfound/Notfound";
import DetalleP from "./screens/DetalleP/DetalleP";

function App() {
  return (
 <Switch>
      {/* Ruta raíz */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/detalle/:tipo/:id" component={DetalleP} />
      <Route path="/resultados" component={Resultados}/>     
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
