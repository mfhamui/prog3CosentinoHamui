import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";

class DetalleP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            cargando: true,
            fav: false
            fav: false
        };
    }


    Favoritos(item) {
        let favs = localStorage.getItem(item);
        if (favs === null) {
            return [];
        } else {
            return JSON.parse(favs);
        }
    }


    guardarFav(favo, item) {
        localStorage.setItem(item, JSON.stringify(favo));
    }

    Fav() {
        const id = this.state.data.id;
        const tipo = this.props.match.params.tipo;
        let item

        if (tipo === "tv") {
            item = "seriesFavoritas"
        } else {
            item = "peliculasFavoritas"
        }
        let favs = this.Favoritos(item);


        if (this.state.fav === false) {
            favs.push(id);
            this.guardarFav(favs, item);
            this.setState({ fav: true });
        } else {
            let filtrados = favs.filter(favor => favor !== id);
            this.guardarFav(filtrados, item);
            this.setState({ fav: false });
        }
    }

    componentDidMount() {
        const tipo = this.props.match.params.tipo;
        const id = this.props.match.params.id;
        const endpoint = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                  let item;
      if (tipo === "tv") {
        item = "seriesFavoritas";
      } else {
        item = "peliculasFavoritas";
      }

      
      let favs = this.Favoritos(item);

      
      let estafav = favs.filter(favorito => favorito === data.id);

      this.setState({ 
        data: data, 
        cargando: false, 
        fav: estafav.length > 0 ? true : false 
      });
    })
            .catch((error) => console.log(error));


    }




    render() {
        let itemsMenu = [
            { ruta: "/", nombre: "Home" },
            { ruta: "/peliculas/popular", nombre: "Películas Populares" },
            { ruta: "/peliculas/now_playing", nombre: "Películas en Cartelera" },
            { ruta: "/series/popular", nombre: "Series Populares" },
            { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
            { ruta: "/favoritos", nombre: "Favoritas" },

        ];


        if (this.state.cargando) {
            return <p>Cargando...</p>;
        }
        const datos = this.state.data;
        const tipo = this.props.match.params.tipo;


        const titulo = tipo === "tv"
            ? (datos.name ? datos.name : "(Sin título)")
            : (datos.title ? datos.title : "(Sin título)");


        let poster = "/assets/img/placeholder-poster.svg";
        if (datos.poster_path) {
            poster = "https://image.tmdb.org/t/p/w342" + datos.poster_path;
        }


        const descripcion = datos.overview ? datos.overview : "Sin descripción disponible.";
        let estreno = tipo === "tv" ? (datos.first_air_date ? datos.first_air_date : "Sin fecha de estreno disponible.") : (datos.release_date ? datos.release_date : "Sin fecha de estreno disponible.");
        let calificacion = datos.vote_average ? datos.vote_average : "Sin calificación disponible.";
        let duracion = tipo === "tv" ? ("") : (datos.runtime ? datos.runtime : "Sin duración disponible.");
        const genre = datos.genres && datos.genres.length > 0
            ? datos.genres.map((g) => g.name).join(", ")
            : "Sin género disponible.";



        return (

            <React.Fragment>
                <Menu itemsMenu={itemsMenu} />
                <article className={`home-i ${this.props.claseExtra} detalle-container`} >
                    <img src={poster} alt={titulo} />
                    <div className="detalle-info">
                        <h3>{titulo}</h3>
                        <p>Calificación: {calificacion}</p>
                        <p>Fecha de estreno: {estreno}</p>
                        {duracion && <p>Duración: {duracion} minutos</p>}
                        <p>Sinópsis: {descripcion}</p>
                        <p>Género: {genre}</p>
                    </div>
                        <button className="fav" onClick={() => this.Fav()}>
                    {this.state.fav ? "Eliminar de favoritos" : "Agregar a favoritos"}
                    </button>

                </article>

            </React.Fragment>

        );
    }
}

export default DetalleP;