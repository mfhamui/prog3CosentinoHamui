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
        let peliculas = JSON.parse(localStorage.getItem("peliculasFavoritas"));
        if (peliculas == null) { peliculas = [] }

        let series = JSON.parse(localStorage.getItem("seriesFavoritas"));
        if (series == null) { series = []; }

        this.setState({
            favoritosP: peliculas,
            favoritosS: series
        })
    }

    actualizarPelis(id) {
        let nuevasPelis = this.state.favoritosP.filter(peli => peli.id !== id);
        this.setState({ favoritosP: nuevasPelis });

    }

    actualizarSeries(id) {
        let nuevaSerie = this.state.favoritosS.filter(serie => serie.id !== id);
        this.setState({ favoritosS: nuevaSerie });

    }
    render() {
        const favoritosP = this.state.favoritosP;
        const favoritosS = this.state.favoritosS;

        let itemsMenu = [
            { ruta: "/", nombre: "Home" },
            { ruta: "/peliculas/populares", nombre: "Películas Populares" },
            { ruta: "/peliculas/cartelera", nombre: "Películas en Cartelera" },
            { ruta: "/series/popular", nombre: "Series Populares" },
            { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
            { ruta: "/favoritos", nombre: "Favoritas" },

        ];

        return (

            <React.Fragment>
                <Menu itemsMenu={itemsMenu} />
                <div>

                    <div className="infos">
                        <h2>Series favoritas</h2>
                    </div>
                    {favoritosS.length > 0 ?
                        (<section className="dos">
                            {favoritosS.map((item) => (
                                <SeccionItem
                                    key={item.id}
                                    data={item}
                                    actualizar={(id) => this.actualizarSeries(id)}
                                    claseExtra="cuatro"
                                />
                            ))}
                        </section>) :
                        (<p>No hay series favoritas</p>)}

                    <div className="infos">
                        <h2>Peliculas favoritas</h2>
                    </div>
                    {favoritosP.length > 0 ?
                        (<section className="dos">
                            {favoritosP.map((item) => (
                                <SeccionItem
                                    key={item.id}
                                    data={item}
                                    actualizar={(id) => this.actualizarPelis(id)}
                                    claseExtra="cuatro"
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

