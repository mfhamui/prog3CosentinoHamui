import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";

class DetalleS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
        const data = this.state.data;
        let item = "seriesFavoritas"


        let favs = this.Favoritos(item);


        if (this.state.fav === false) {
            favs.push(data)
            this.guardarFav(favs, item);
            this.setState({ fav: true });
        } else {
            let filtrados = favs.filter(favor => favor.id!==data.id)
            this.guardarFav(filtrados, item);
            this.setState({ fav: false });
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const endpoint = `https://api.themoviedb.org/3/tv/${id}?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR`;

        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                let favs = this.Favoritos("seriesFavoritas");
                let estafav = favs.filter(favorito => favorito.id === data.id);

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
        if (this.state.data.length === 0){
            <p>Cargando...</p>
         }
        const datos = this.state.data;

        let titulo = datos.name

        let poster = "/assets/img/placeholder-poster.svg";
        if (datos.poster_path) {
            poster = "https://image.tmdb.org/t/p/w342" + datos.poster_path;
        }

        let descripcion = datos.overview

        let estreno = datos.first_air_date

        let calificacion = datos.vote_average


        let genre = "Sin género disponible.";
        if (datos.genres && datos.genres.length > 0) {
          genre = datos.genres.map(function(g){ return g.name; }); 
        }


        return (

            <React.Fragment>
                <Menu itemsMenu={itemsMenu} />
                <article className={`homeItem det`} >
                    <img src={poster} alt={titulo} />
                    <div className="detalle-info">
                        <h3 className="titulodetalle">{titulo}</h3>
                        <p>Calificación: {calificacion}</p>
                        <p>Fecha de estreno: {estreno}</p>
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

export default DetalleS;