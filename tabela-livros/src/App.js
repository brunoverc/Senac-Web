import React, {Component}  from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component{
  state = {
    livros : [
      {
        id : "978-85-7522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Maurício Samy Silva"
      },
      {
        id : "978-85-7522-632-3",
        titulo: "Node Essencial",
        autor: "Ricardo R. Lecheta"
      },
      {
        id : "978-85-7522-632-7",
        titulo: "Aprendendo Material Design",
        autor: "Kyle New"
      },
    ]
  }
  render(){
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody livros={this.state.livros}/>
  
      </table>
    );
  }
}

export default App;
