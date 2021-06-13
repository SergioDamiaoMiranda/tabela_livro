import React, { Component } from "react";

import TabelaBody from './components/TabelaBody';
import TabelaFoot from './components/TabelaFoot';
import TabelaHead from './components/TabelaHead';

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    console.log("++++++ Antes do fetch.")
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function() {
        console.log("++++++ Erro na requisição fetch.");
    })
    .finally(function() {
      console.log("++++++ Sempre retorna.");
    });
  }
  render () {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaBody livros={ this.state.livros }/>
        <TabelaFoot qtdLivros={ this.state.livros.length}/>
      </table>
    );
  }
}

export default App;
