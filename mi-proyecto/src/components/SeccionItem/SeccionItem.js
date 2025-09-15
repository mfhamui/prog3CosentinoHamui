import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SeccionItem.css";

class SeccionItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      verMas: false,
      textoBoton: "ver descripcion",
      clase: "noMostrar", 
      fav: false
    };
  }

  Favoritos(){
    let favs = localStorage.getItem("favoritos");
    if (favs === null) {
      return []; 
    } else {
      return JSON.parse(favs); 
    }
  }


  guardarFav(favo){
    localStorage.setItem("favoritos", JSON.stringify(favo));
  }

  Fav(){
    const id = this.state.data.id;
    const tipo = this.props.tipo;
    const datos= this.state.data;

    const item = {
      id: id,
      tipo: tipo,
      titulo: this.props.tipo === "tv"? (datos.name ? datos.name : "(Sin título)"): (datos.title ? datos.title : "(Sin título)"),
      poster_path: datos.poster_path,
    };

    let favs = this.Favoritos();

    let existe = false;
    for (let i = 0; i < favs.length; i++) {
      if (favs[i].id === id && favs[i].tipo === tipo) {
        existe = true;
      }
    }

    if (existe === false) {
      favs.push(item);
      this.guardarFav(favs);
      this.setState({ fav: true });
    } else {
      let filtrados = favs.filter(favor => !(favor.id === id && favor.tipo === tipo));
      this.guardarFav(filtrados);
      this.setState({ esFav: false });
    }
  }

  boton(){
    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.textoBoton === "ver descripcion" ? "ocultar descripcion" : "ver descripcion",
      clase: this.state.textoBoton === "ver descripcion" ? "" : "noMostrar"
    });
  }

  render(){
    const datos = this.state.data;

   
    const titulo = this.props.tipo === "tv"
      ? (datos.name ? datos.name : "(Sin título)")
      : (datos.title ? datos.title : "(Sin título)");

    let poster = "/assets/img/placeholder-poster.svg";
    if (datos.poster_path) {
      poster = "https://image.tmdb.org/t/p/w342" + datos.poster_path;
    }

    
    const descripcion = datos.overview ? datos.overview : "Sin descripción disponible.";


    
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
    {this.state.Fav ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>

      </article>
    );
  }
}

export default SeccionItem;
