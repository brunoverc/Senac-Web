import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import "./index.css";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

import Livro from "./components/Livro"
import axios from "axios"

class App extends Component {
  state = {
    livros: []
  };

  async componentDidMount() {
    try {
      //sintaxe para requisição do axios
      const { data: livros } = await axios.get("/api/todosOsLivros.json");
      //Objeto contendo os dados vindos da requisição sendo armazenados no objeto livros e 
      //em seguida esse objeto é passado para o método setState()
      this.setState({ livros });
    }
    catch (error) {
      console.log(error);
      document.querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Ops! Ocorreu um erro </p>"
        )
    }
  }

  render() {
    return (
      //O componente Router deve ser o container geral da aplicação
      <Router>
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home livros={this.state.livros} />} />

            <Route exact path="/frontend" element={<Frontend livros={this.state.livros} />} />
            <Route exact path="/programacao" element={<Programacao livros={this.state.livros} />} />
            <Route exact path="/design" element={<Design livros={this.state.livros} />} />
            //teste
                        
            <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
            <Route path="/livro/:livroSlug" render={props => {
              const livro = this.state.livros.find(
                livro => livro.slug === props.match.params.livroSlug);
              if (livro) return <Livro livro={livro} />;
              else return <NotFound />;
            }}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;