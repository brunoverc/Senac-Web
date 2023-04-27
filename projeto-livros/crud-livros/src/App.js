import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    livros: JSON.parse(localStorage.getItem("livros")),
  };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });

    console.log([...this.state.livros, livro]);
    localStorage.setItem("livros", JSON.stringify([...this.state.livros, livro]));
  };

  removerLivro = livro => {
    if (window.confirm("Remover esse livro?")) {
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn);
      this.setState({ livros })

      localStorage.setItem("livros", JSON.stringify(livros));
    }
  }

  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TabelaLivros
                livros={this.state.livros}
                removerLivro={this.removerLivro}
              />
            } />
          <Route
            exact
            path="/cadastrar"
            element={
              <CadastrarLivros
                inserirLivro={this.inserirLivro}
                livro={{ id: 0, isbn: "", autor: "", titulo: "" }} />
            } />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </Router>
    );
  }
}
export default App;