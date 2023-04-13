import React from "react";
import { Link } from "react-router-dom";

const Catalogo = ({ livros }) => { //O objeto {livros} passado do componente App
  return (
    <main className="principal">
      <h2>Categoria frontend</h2>
      <ol>
        {livros
        //O método filter cria um array da categoria frontend de livros
          .filter((livro) => livro.categoria === "frontend")
          //Mapeamos os livros filtrados pela categoria frontend de livros
          .map((livro) => (
            //O elemento li da  HTML é o container para itens da lista e consequentemente 
            //recebe o atributo key como explicado no script anterior.
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h2>Categoria programação</h2>
      <ol>
        {livros
          //O método filter cria um array da categoria programação de livros
          .filter((livro) => livro.categoria === "programacao")
          .map((livro) => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
      <h2>Categoria design</h2>
      <ol>
        {livros
        //O método filter cria um array da categoria design de livros
          .filter((livro) => livro.categoria === "design")
          .map((livro) => (
            <li key={livro.id}>
              <Link to={`/livro/${livro.slug}`}>{livro.titulo}</Link>
            </li>
          ))}
      </ol>
    </main>
  );
};
export default Catalogo;
