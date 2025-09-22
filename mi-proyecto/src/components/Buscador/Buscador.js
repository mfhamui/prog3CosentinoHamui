import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      tipo: ""
    };
  }

  controlarCambios(event) {
    this.setState({ query: event.target.value });
  }
  controlarTipo(event) {
    this.setState({ tipo: event.target.value });
  }

  evitarSubmit(event) {
    event.preventDefault();

    this.props.history.push("/resultados/"+ this.state.tipo + "/" + this.state.query);
  }


  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.query}
          onChange={(event) => this.controlarCambios(event)}
        />
        <label className="boton">
          <input
            type="radio"
            value="tv"
            name="tipo"
            onChange={(event) => this.controlarTipo(event)}
          />
          series
        </label>
        <label className="boton">
          <input
            type="radio"
            value="movie"
            name="tipo"
            onChange={(event) => this.controlarTipo(event)}
          />
          peliculas
        </label>

        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
