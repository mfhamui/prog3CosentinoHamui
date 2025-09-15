import React, {Component} from "react";

class Favoritos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favoritosP: [],
        favoritosS: [],
        cargando: false,
        error: ""
      }
    }
    componentDidMount() {
      const { query } = this.props.match.params;
      this.buscar(query);
    }
    cargarFavoritos (){
        let favs = localStorage.getItem("favoritos");
        

    }
 
    render() {
      const { favoritosP, favoritosS } = this.state;
      const { query } = this.props.match.params;
  
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
                    tipo="tv"
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
                    tipo="movie"
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
  
  export default Favoritos;
  
  