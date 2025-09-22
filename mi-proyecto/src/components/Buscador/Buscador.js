import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
     
    };
  }

  controlarCambios (event) {
    this.setState({ query: event.target.value });
  }


  enviar (event){
    event.preventDefault();
  
    this.props.history.push("/resultados/" + this.state.query);
  }

  render() {
    return (
      <form onSubmit={(event)=>this.evitarSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.query}
          onChange={(event)=>this.controlarCambios(event)}
        />

        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
