import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./screens/Home/Home"; 
import ResultadosS from "./screens/ResultadosS/ResultadosS";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "./screens/PeliculasCartelera/PeliculasCartelera";
import NotFound from "./screens/Notfound/Notfound";
import DetalleP from "./screens/DetalleP/DetalleP";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetalleS from "./screens/DetalleS/DetalleS";
import SeriesP from "./screens/SeriesP/SeriesP";
import SeriesE from "./screens/SeriesE/SeriesE";

function App() {
  return (
 <Switch>
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/detalle/movie/:id" component={DetalleP} /> 
      <Route path="/detalle/tv/:id" component={DetalleS} />
      <Route path="/resultados/movie/:query" component={ResultadosP} /> 
      <Route path="/resultados/tv/:query" component={ResultadosS} /> 
      <Route path="/peliculas/populares" component={PeliculasPopulares} />
      <Route path="/peliculas/cartelera" component={PeliculasCartelera} />  
      <Route path="/series/popular" component={SeriesP} />
      <Route path="/series/on_the_air" component={SeriesE} />
      <Route path="/favoritos" component={Favoritos} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
