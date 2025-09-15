import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import Resultados from "./screens/Resultados/Resultados";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import NotFound from "./screens/Notfound/Notfound";
import DetalleP from "./screens/DetalleP/DetalleP";
import Favoritos from "./screens/Favoritos/Favoritos";

function App() {
  return (
 <Switch>
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/detalle/:tipo/:id" component={DetalleP} /> 
      <Route path="/resultados/:query" component={Resultados} /> 
      <Route path="/peliculas/:categoria" component={Peliculas} /> 
      <Route path="/series/:categoria" component={Series} />
      <Route path="/favoritos" component={Favoritos} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
