import React, { Component } from "react";
import "./style.css"

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
              <li className="lista-categorias_item">Categorias</li>
              <li className="lista-categorias_item">Categorias</li>
              <li className="lista-categorias_item">Categorias</li>
              <li className="lista-categorias_item">Categorias</li>
            </ul>
            <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria" onKeyUp={this._handlerEventoInput.bind(this)}/>
          </section>
        );
    }
}

export default ListaDeCategorias;