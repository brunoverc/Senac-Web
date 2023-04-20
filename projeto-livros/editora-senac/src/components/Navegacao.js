import React from "react";
import {NavLink} from "react-router-dom"; //Importamos o componente NavLink da biblioteca react-router-dom

//Criamos o objeto de estilização linkCorrente definindo a cor de texto para o link corrente
let linkCorrente = {
    color: "#027399"
}

//O valor do atributo to é uma barra (/) seguida por um nome de livre escolha para designar
//cada página da aplicação, exceto para a Home Page que recebe, obrigatoriamente apenas a barra
const Navegacao = () => {
    return (
        <ul>
            <li><NavLink exact activeStyle={linkCorrente} to="/">Home</NavLink></li>
            <li><NavLink exact activeStyle={linkCorrente} to="/frontend">Frontend</NavLink></li>
            <li><NavLink exact activeStyle={linkCorrente} to="/programacao">Programação</NavLink></li>
            <li><NavLink exact activeStyle={linkCorrente} to="/design">Design</NavLink></li>
            <li><NavLink exact activeStyle={linkCorrente} to="/catalogo">Catálogo</NavLink></li>
        </ul>
    );
};

export default Navegacao;