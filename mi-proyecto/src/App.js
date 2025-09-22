import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import Resultados from "./screens/Resultados/Resultados";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "./screens/PeliculasCartelera/PeliculasCartelera";
import Series from "./screens/Series/Series";
import NotFound from "./screens/Notfound/Notfound";
import DetalleP from "./screens/DetalleP/DetalleP";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetalleS from "./screens/DetalleS/DetalleS";

function App() {
  return (
 <Switch>
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/detalle/movie/:id" component={DetalleP} /> 
      <Route path="/detalle/tv/:id" component={DetalleS} />
      <Route path="/resultados/:query" component={Resultados} /> 
      <Route path="/peliculas/populares" component={PeliculasPopulares} />
      <Route path="/peliculas/cartelera" component={PeliculasCartelera} />  
      <Route path="/series/:categoria" component={Series} />
      <Route path="/favoritos" component={Favoritos} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
