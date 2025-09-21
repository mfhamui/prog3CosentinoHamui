import React, { Component } from "react";
import SeccionItem from "../../components/SeccionItem/SeccionItem";
import Menu from "../../components/Menu/Menu";
class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultadosP: [],
      resultadosS: [],
      error: ""
    }
  }
  componentDidMount() {

    const query = this.props.match.params.query;
    this.buscar(query);
  }
  buscar = (query) => {

    //series
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=6702edd122b3200dc3c322dcd7975956&language=es-ES&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({
            resultadosS: data.results,
          
          })
        } else {
          this.setState({
            resultadosS: [],
            error: `No se encontraron resultados para ${query}`
          })
        }
      })
      .catch(() => this.setState({
        resultadosS: [],
        error: "Ocurrió un error"
      }));
    //peliculas
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6702edd122b3200dc3c322dcd7975956&language=es-ES&query=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({
            resultadosP: data.results,
          })
        } else {
          this.setState({
            resultadosP: [],
            error: `No se encontraron resultados para ${query}`
          })
        }
      })
      .catch(() => this.setState({
        resultadosP: [],
        error: "Ocurrió un error"
      }));

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
    if (this.state.resultadosP.length === 0 && this.state.resultadosS.length === 0) {
      <p>Cargando...</p>
    }
    const resultadosP = this.state.resultadosP;
    const resultadosS = this.state.resultadosS;
    const query = this.props.match.params.query;

    return (

      <React.Fragment>
        <Menu itemsMenu={itemsMenu} />
        <div>
          <h1>Resultados de búsqueda de: {query} </h1>
          <div className="info-box">
            <h2>Series</h2>
          </div>
          {resultadosS.length > 0 ?
            (<section className="cards-grid">
              {resultadosS.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  claseExtra="seis"
                />
              ))}
            </section>) :
            (<p>No hay resultados para {query} </p>)}

          <div className="info-box">
            <h2>Peliculas</h2>
          </div>
          {resultadosP.length > 0 ?
            (<section className="cards-grid">
              {resultadosP.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  claseExtra="seis"
                />
              ))}
            </section>) :
            (<p>No hay resultados para {query}</p>)}
        </div>

      </React.Fragment>

    );
  }

}

export default Resultados;

