import React, {Component} from "react";
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

class App extends Component{
  render() {
    return (
      //O componente Router deve ser o container geral da aplicação
      <Router> 
        <>
          <Topo />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/frontend" element={<Frontend />}/>
            <Route exact path="/programacao" element={<Programacao />}/>
            <Route exact path="/design" element={<Design />}/>
            <Route exact path="/catalogo" element={<Catalogo />}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </>
      </Router>
    );
  }
}

export default App;