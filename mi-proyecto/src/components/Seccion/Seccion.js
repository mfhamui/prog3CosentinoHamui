import React, { Component } from "react";
import SeccionItem from "../SeccionItem/SeccionItem";
import "./Seccion.css";
import { Link } from "react-router-dom";


class Seccion extends Component {
  constructor(props){
    super(props);
    this.state = { datos: []

     };
  }

  render(){
 
    return (
      <section className="home">
        <div className="infos">
          <h2>{this.props.titulo}</h2>
        <Link className="ver-todas" to={this.props.verTodas}> Ver todas</Link>

        </div>

        <section className="cards-grid">
          {this.state.datos.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            this.state.datos.map((item, i) => {
              if (i < this.props.cant){
                return (
                  <SeccionItem
                    key={item.id}
                    data={item}
                    claseExtra={this.props.cant === 6 ? "seis" : "cuatro"}
                  />
                );
              } else {
                return null;
              }
            })
          )}
        </section>
      </section>
    );
  }

  componentDidMount(){
    fetch(this.props.endpoint)
      .then((res) => res.json())
      .then((data) => {
        let lista = [];
        if (data && data.results) {
          lista = data.results;
        }
        this.setState({ datos: lista });
      })
      .catch((e) => console.log(e));
  }
}

export default Seccion;
