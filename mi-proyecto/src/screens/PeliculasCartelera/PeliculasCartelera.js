import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import SeccionItem from "../../components/SeccionItem/SeccionItem";

class PeliculasCartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      contador: 1,
      filtro: ""
    };
  }

  componentDidMount() {
    this.cargarMas();
  }

  cargarMas = () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=6702edd122b3200dc3c322dcd7975956&language=es-AR&page=${this.state.contador}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          datos: this.state.datos.concat(data.results),
          contador: this.state.contador + 1
        })
      )
      .catch((error) => console.log(error));
  };

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ filtro: event.target.value });
  }

  filtrarPeliculas(textoAFiltrar) {
    return this.state.datos.filter((peli) =>
      peli.title.toLowerCase().includes(textoAFiltrar)
    );
  }

  render() {
    const peliculasFiltradas =
      this.state.filtro === ""
        ? this.state.datos
        : this.filtrarPeliculas(this.state.filtro.toLowerCase());

    return (
      <React.Fragment>
        <Menu
          itemsMenu={[
            { ruta: "/", nombre: "Home" },
            { ruta: "/peliculas/populares", nombre: "Películas Populares" },
            { ruta: "/peliculas/cartelera", nombre: "Películas en Cartelera" },
            { ruta: "/series/populares", nombre: "Series Populares" },
            { ruta: "/series/emision", nombre: "Series en Emisión" },
            { ruta: "/favoritos", nombre: "Favoritas" },
          ]}
        />

        <main className="cont">
          <form onSubmit={(event) => this.evitarSubmit(event)}>
            <label>Filtrar contenido por: </label>
            <input
              type="text"
              placeholder="escribir acá..."
              onChange={(event) => this.controlarCambios(event)}
              value={this.state.filtro}
            />
          </form>

          <h1>Películas en Cartelera</h1>

          <section className="info">
            {this.state.datos.length === 0 ? (
              <p>Cargando…</p>
            ) : (
              peliculasFiltradas.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  claseExtra={this.props.cant === 6 ? "seis" : "cuatro"}
                />
              ))
            )}
          </section>

          <div className="mas">
            <button type="button" onClick={this.cargarMas}>
              Ver más
            </button>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default PeliculasCartelera;
