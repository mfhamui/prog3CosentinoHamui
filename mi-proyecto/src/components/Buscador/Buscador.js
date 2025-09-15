import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      tipo: "tv"
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
    const query = this.state.query;
    const tipo = this.state.tipo;
    this.props.history.push(`/resultados/${tipo}/${query}`);
  }

  render() {
    return (
      <form className="search-form" onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={this.state.query}
          onChange={(event) => this.controlarCambios(event)}
        />
        <label>
          Elige:
          <select value={this.state.tipo} onChange={(event) => this.controlarTipo(event)} >
            <option value="movie">Películas</option>
            <option value="tv">Series</option>
          </select>
        </label>


        <button type="submit" className="btn-sm btn-success">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
