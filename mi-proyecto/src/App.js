import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import Resultados from "./screens/Resultados/Resultados";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import NotFound from "./screens/Notfound/Notfound";
import Detalle from "./screens/Detalle/Detalle";

function App() {
  return (
 <Switch>
      {/* Ruta raíz */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/detalle/:type/:id" component={Detalle} />
      <Route path="/resultados" component={Resultados}/> 
      <Route path="/peliculas/:categoria" component={Peliculas} />
      <Route path="/series/:categoria" component={Series} /> 
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
