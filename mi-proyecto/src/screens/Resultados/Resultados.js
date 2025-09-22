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
  componentDidMount(query) {

    const query = this.props.match.params.query;
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
      .catch((e) => console.log(e));

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
      .catch((e) => console.log(e));
  }


  render() {

    let itemsMenu = [
      { ruta: "/", nombre: "Home" },
      { ruta: "/peliculas/populares", nombre: "Películas Populares" },
      { ruta: "/peliculas/cartelera", nombre: "Películas en Cartelera" },
      { ruta: "/series/popular", nombre: "Series Populares" },
      { ruta: "/series/on_the_air", nombre: "Series en Emisión" },
      { ruta: "/favoritos", nombre: "Favoritas" },

    ];
    if (this.state.resultadosP.length === 0 && this.state.resultadosS.length === 0) {
      <p>Cargando...</p>
    }
   

    return (

      <React.Fragment>
        <Menu itemsMenu={itemsMenu} />
        <div>
          <h1>Resultados de búsqueda de: {query} </h1>
          <div className="infos">
            <h2>Series</h2>
          </div>
          {this.state.resultadosS.length > 0 ?
            (<section className="seccion">
              {this.state.resultadosS.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  claseExtra="seis"
                />
              ))}
            </section>) :
            (<p>No hay resultados para {this.props.match.params.query} </p>)}

          <div className="infos">
            <h2>Peliculas</h2>
          </div>
          {this.state.resultadosP.length > 0 ?
            (<section className="seccion">
              {this.state.resultadosP.map((item) => (
                <SeccionItem
                  key={item.id}
                  data={item}
                  claseExtra="seis"
                />
              ))}
            </section>) :
            (<p>No hay resultados para {this.props.match.params.query}</p>)}
        </div>

      </React.Fragment>

    );
  }

}

export default Resultados;

