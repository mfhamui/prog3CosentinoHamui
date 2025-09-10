import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import Resultados from "./screens/Resultados/Resultados";
import NotFound from "./screens/Notfound/Notfound";
import Detalle from "./screens/Detalle/Detalle";

function App() {
  return (
 <Switch>
      {/* Ruta raíz */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/detalle/:type/:id" component={Detalle} />
      <Route path="/resultados" component={Resultados}/>     
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
