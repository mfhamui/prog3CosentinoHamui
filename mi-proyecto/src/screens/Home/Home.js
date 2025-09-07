import React from "react";
import Menu from "../../components/Menu/Menu";
import Secciones from "../../components/Secciones/Secciones";

function Home() {
  let itemsMenu = [
    { ruta: "/",            nombre: "Home" },
    { ruta: "/peliculas",   nombre: "Películas" },
    { ruta: "/series",      nombre: "Series" },
    { ruta: "/favoritos",   nombre: "Favoritas" },
  ];

 
  let secciones = [
    {
      titulo: "Popular movies this week",
      tipo: "movie",
      endpoint: "https://api.themoviedb.org/3/movie/popular?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/peliculas",
     
    },
    {
      titulo: "Movies now playing",
      tipo: "movie",
      endpoint: "https://api.themoviedb.org/3/movie/now_playing?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/peliculas",
      
    },
  
     {
      titulo: "Popular TV shows this week",
      tipo: "tv",
      endpoint: "https://api.themoviedb.org/3/tv/popular?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series",
      color: "amarillo"
     },
    {
      titulo: "TV shows airing today",
      tipo: "tv",
      endpoint: "https://api.themoviedb.org/3/tv/on_the_air?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series",
      color: "amarillo"
    },
  ];

  return (
    <React.Fragment>
      <Menu itemsMenu={itemsMenu} />
      <h1>TV Fan </h1>

        <Secciones lista={secciones} />
    </React.Fragment>
  );
}

export default Home;
