import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {

  _handlerEventoInput(event){
    if(event.key == "Enter"){
      console.log("Adicionar categoria");
    }
  }

    render(){
        return (
          <section className="lista-categorias">
            <ul className="lista-categorias_lista">
              {this.props.categorias.map((categoria, index) => {
                return <li key={index} className="lista-categorias_item">{categoria}</li>
              })}  
            </ul>
            <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria" onKeyUp={this._handlerEventoInput.bind(this)}/>
          </section>
        );
    }
}

export default ListaDeCategorias;