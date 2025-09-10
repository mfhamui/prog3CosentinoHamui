import React from "react";
import Menu from "../../components/Menu/Menu";
import Secciones from "../../components/Secciones/Secciones";
import Footer from "../../components/Footer/Footer";

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
     cant: 4
     
    },
    {
      titulo: "Movies now playing",
      tipo: "movie",
      endpoint: "https://api.themoviedb.org/3/movie/now_playing?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/peliculas",
      cant: 6
      
    },
  
     {
      titulo: "Popular TV shows this week",
      tipo: "tv",
      endpoint: "https://api.themoviedb.org/3/tv/popular?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series",
       cant: 4
     },
    {
      titulo: "TV shows airing today",
      tipo: "tv",
      endpoint: "https://api.themoviedb.org/3/tv/on_the_air?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series",
      cant: 6
    },
  ];

  return (
    <React.Fragment>
      <h1>TV Fan </h1>
      <Menu itemsMenu={itemsMenu} />
      

        <Secciones lista={secciones} />

         <Footer /> 
    </React.Fragment>
  );
}

export default Home;
