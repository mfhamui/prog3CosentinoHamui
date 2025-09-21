import React from "react";
import Menu from "../../components/Menu/Menu";
import Secciones from "../../components/Secciones/Secciones";
import Footer from "../../components/Footer/Footer";

function Home() {
  let itemsMenu = [
    { ruta: "/", nombre: "Home" },
    { ruta: "/peliculas/popular", nombre: "Películas Populares" },
    { ruta: "/peliculas/now_playing", nombre: "Películas en Cartelera" },
    { ruta: "/series/popular", nombre: "Series Populares" },
    { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
    { ruta: "/favoritos", nombre: "Favoritas" },

  ];


  let secciones = [
    {
      titulo: "Peliculas populares de esta semana",
      endpoint: "https://api.themoviedb.org/3/movie/popular?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/peliculas/popular",
      cant: 4

    },
    {
      titulo: "Peliculas en Cartelera",
      endpoint: "https://api.themoviedb.org/3/movie/now_playing?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/peliculas/now_playing",
      cant: 6

    },

    {
      titulo: "Series populares de esta semana",
      endpoint: "https://api.themoviedb.org/3/tv/popular?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series/popular",
      cant: 4
    },
    {
      titulo: "Series en emisión",
      endpoint: "https://api.themoviedb.org/3/tv/on_the_air?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=1",
      verTodas: "/series/on_the_air",
      cant: 6
    },
  ];

  return (
    <React.Fragment>

      <Menu itemsMenu={itemsMenu} />
      <Secciones lista={secciones} />
      <Footer />
      
    </React.Fragment>
  );
}

export default Home;
