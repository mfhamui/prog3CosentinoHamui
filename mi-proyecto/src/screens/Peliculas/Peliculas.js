import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import SeccionItem from "../../components/SeccionItem/SeccionItem";


class Peliculas extends Component {
  constructor(props){
    super(props);
    this.state = {
      datos: [],
      contador: 1
    };
  }

  render(){
    const categoria = this.props.match.params.categoria; // "popular" | "now_playing"
    const titulo = categoria === "now_playing" ? "Películas en cartelera" : "Películas populares";

    return (
      <React.Fragment>
        <Menu
          itemsMenu={[
           { ruta: "/",            nombre: "Home" },
          { ruta: "/peliculas/popular", nombre: "Películas Populares" },
          { ruta: "/peliculas/now_playing", nombre: "Películas en Cartelera" },
          { ruta: "/series/popular", nombre: "Series Populares" },
          { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
          { ruta: "/favoritos",   nombre: "Favoritas" },
          ]}
        />

        <main className="cont">
          <h1>{titulo}</h1>

          <section className="info">
            {this.state.datos.length === 0 ? (
              <p>Cargando…</p>
            ) : (
              this.state.datos.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  tipo="movie"
                  claseExtra="seis"
                />
              ))
            )}
          </section>

          <div className="mas">
            <button type="button" onClick={this.cargarMas}>Ver más</button>
          </div>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.cargarMas();

  }


  cargarMas = () => {
    const categoria = this.props.match.params.categoria;
    const url = "https://api.themoviedb.org/3/movie/" + categoria + "?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=" + this.state.contador;
      
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          contador: this.state.contador + 1
        })
      )
      .catch((error) => console.log(error));

  }
}

export default Peliculas;
