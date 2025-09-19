import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SeccionItem.css";

class SeccionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      verMas: false,
      textoBoton: "ver descripcion",
      clase: "noMostrar"
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
    const tipo = this.props.tipo;
    let item

    if (tipo === "tv") {
      item = "seriesFavoritas"
    } else {
      item = "peliculasFavoritas"
    }
    let favs = this.Favoritos(item);


    if (this.state.fav === false) {
      favs.push(this.state.data);
      this.guardarFav(favs, item);
      this.setState({ fav: true });
    } else {
      let filtrados = favs.filter(favor => favor.id !== id);
      this.guardarFav(filtrados, item);
      this.setState({ fav: false });
    }
  }

  componentDidMount() {
    const id = this.state.data.id;
    const tipo = this.props.tipo;
    let item

    if (tipo === "tv") {
      item = "seriesFavoritas"
    } else {
      item = "peliculasFavoritas"
    }
    let favs = this.Favoritos(item);
    let estafav = favs.filter(favorito => favorito.id === id)
    this.setState({
      fav: estafav.length > 0 ? true : false
    });
  }

  boton() {
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.textoBoton === "ver descripcion" ? "ocultar descripcion" : "ver descripcion",
      clase: this.state.textoBoton === "ver descripcion" ? "" : "noMostrar"
    });
  }

  render() {
    const datos = this.state.data;

    // titulo (movie = title, serie = name)
    const titulo = this.props.tipo === "tv"
      ? (datos.name ? datos.name : "(Sin título)")
      : (datos.title ? datos.title : "(Sin título)");

    // imagen
    let poster = "/assets/img/placeholder-poster.svg";
    if (datos.poster_path) {
      poster = "https://image.tmdb.org/t/p/w342" + datos.poster_path;
    }

    // descripcion
    const descripcion = datos.overview ? datos.overview : "Sin descripción disponible.";

    // link a detalle

    const detalle = `/detalle/${this.props.tipo}/${datos.id}`;

    return (
      <article className={`home-i ${this.props.claseExtra}`} >
        <img src={poster} alt={titulo} />
        <h3><Link to={detalle}>{titulo}</Link></h3>

        <p className={this.state.clase}>{descripcion}</p>

        <div className="actions">
          <button className="more" onClick={() => this.boton()}>
            {this.state.textoBoton}
          </button>
          <Link to={detalle}>Ir a detalle</Link>
        </div>
        <button className="fav" onClick={() => this.Fav()}>
          {this.state.fav ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>

      </article>
    );
  }
}

export default SeccionItem;
