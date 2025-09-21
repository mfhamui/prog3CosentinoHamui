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
      <form onSubmit={this.enviar}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.query}
          onChange={this.controlarCambios}
        />

        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
