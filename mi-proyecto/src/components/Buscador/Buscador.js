import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
     
    };
  }

  controlarCambios = (event) => {
    this.setState({ query: event.target.value });
  }


  enviar = (event)=> {
    event.preventDefault();
  
    this.props.history.push("/resultados/" + this.state.query);
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.enviar}>
        <input
          type="text"
          name="searchData"
          placeholder="Buscar..."
          value={this.state.query}
          onChange={(event) => this.controlarCambios(event)}
        />

        <button type="submit" className="btn-sm btn-success">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
