import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import SeccionItem from "../../components/SeccionItem/SeccionItem";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritosP: [],
            favoritosS: []
        }
    }
    componentDidMount() {
        this.cargarFavoritos();
    }
    cargarFavoritos() {
        let favs = localStorage.getItem("favoritos");
        favs === null ? favs = [] : favs = JSON.parse(favs)
        let favoritosP = favs.filter(item => item.tipo === "movie");
        let favoritosS = favs.filter(item => item.tipo === "tv");
        this.setState({
            favoritosP: favoritosP,
            favoritosS: favoritosS
        })
    }

    render() {
        const { favoritosP, favoritosS } = this.state;

        let itemsMenu = [
            { ruta: "/", nombre: "Home" },
            { ruta: "/peliculas/popular", nombre: "Películas Populares" },
            { ruta: "/peliculas/now_playing", nombre: "Películas en Cartelera" },
            { ruta: "/series/popular", nombre: "Series Populares" },
            { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
            { ruta: "/favoritos", nombre: "Favoritas" },

        ];

        return (

            <React.Fragment>
                <Menu itemsMenu={itemsMenu} />
                <div>
                   
                    <div className="info-box">
                        <h2>Series favoritas</h2>
                    </div>
                    {favoritosS.length > 0 ?
                        (<section className="cards-grid">
                            {favoritosS.map((item) => (
                                <SeccionItem
                                    key={item.id}
                                    data={item}
                                    tipo="tv"
                                    claseExtra="seis"
                                />
                            ))}
                        </section>) :
                        (<p>No hay series favoritas</p>)}

                    <div className="info-box">
                        <h2>Peliculas favoritas</h2>
                    </div>
                    {favoritosP.length > 0 ?
                        (<section className="cards-grid">
                            {favoritosP.map((item) => (
                                <SeccionItem
                                    key={item.id}
                                    data={item}
                                    tipo="movie"
                                    claseExtra="seis"
                                />
                            ))}
                        </section>) :
                        (<p>No hay películas favoritas</p>)}
                </div>

            </React.Fragment>

        );
    }

}

export default Favoritos;

