import React, { Component } from "react";
import SeccionItem from "../../components/SeccionItem/SeccionItem";
import Menu from "../../components/Menu/Menu";
class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: false,
      error: ""
    }
  }
  componentDidMount() {

    const { query, tipo } = this.props.match.params;
    this.buscar(query, tipo);
  }
  buscar = (query, tipo) => {
    const url = `https://api.themoviedb.org/3/search/${tipo}?api_key=6702edd122b3200dc3c322dcd7975956&language=es-ES&query=${query}`;
    this.setState({ cargando: true, resultados: [], error: "" });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({
            resultados: data.results,
            cargando: false
          })
        } else {
          this.setState({
            resultados: [],
            cargando: false,
            error: `No se encontraron resultados para ${query}`
          })
        }
      }
      )
      .catch(() => this.setState({
        resultados: [],
        cargando: false,
        error: "Ocurrió un error"
      }));

  }

  render() {
    const { resultados, cargando, error } = this.state;
    let mensajeCarga;
    let mensajeError;

    if (cargando) {
      mensajeCarga = <p>Cargando...</p>;
    }

    if (error) {
      mensajeError = <p>{error}</p>;
    }
    let itemsMenu = [
      { ruta: "/", nombre: "Home" },
      { ruta: "/peliculas", nombre: "Películas" },
      { ruta: "/series", nombre: "Series" },
      { ruta: "/favoritos", nombre: "Favoritas" },
    ];

    const { query, tipo } = this.props.match.params; 


    return (

      <React.Fragment>
        <Menu itemsMenu={itemsMenu} />
        <div>
          <h1>Resultados de búsqueda de: {query} </h1>
          <h2>Tipo: {tipo === "tv" ? "Series" : "Peliculas"}</h2>

          {mensajeCarga}
          {mensajeError}

          <section >
            {resultados.map((item) => (
              
              <SeccionItem
                key={item.id}
                data={item}
                tipo={tipo}
              />
            ))}
          </section>
        </div>
      </React.Fragment>

    );
  }

}

export default Resultados;

