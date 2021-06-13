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

  handleRemoverLinha = (idParametro) => { 
    console.log("botão clicado - " + idParametro); 
    const livros = this.state.livros.filter(item => item.id !== idParametro);
    this.setState({ livros });
  };

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    this.setState({ livros });
  };

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
      a.titulo < b.titulo ? -1 : 0
    );
    livros.reverse();
    this.setState({ livros });
  };

  render () {
    return (
      <table className="tabela">
        <TabelaHead ordenarCrescente={ this.handleOrdenarCrescente } ordenarDecrescente={ this.handleOrdenarDecrescente } />
        <TabelaBody livros={ this.state.livros } removerLinha={ this.handleRemoverLinha }/>
        <TabelaFoot qtdLivros={ this.state.livros.length}/>
      </table>
    );
  }
}

export default App;
