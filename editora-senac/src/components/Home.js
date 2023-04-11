import React from "react";
import { Link } from "react-router-dom";
const Home = ({ livros }) => ( //O objeto {livros} passado do componente App e recebido por props
    <main className="principal">
        <h2>Últimos lançamentos</h2>
        {livros
            //O método filter() aplicado ao array de dados recebido separa e 
            //monta um array com os seis primeiros livros do banco de dados
            .filter((n, index) => index < 6)
            //O método map() é aplicado ao objeto de dados dos seis livros e 
            //gera a marcação HTML para a Home Page
            .map(livro => (
                //E React para toda lista gerada dinamicamente, é mandatório que 
                //os itens da lista recebam o atributo key, com um valor único.
                <div className="card" key={livro.id}>
                    <div className="thumb">
                        <img
                            src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
                            alt="thumbnail da capa do livro ..."/>
                    </div>
                    {livros
                        //O método filter() cria um array de slugs dos livros
                        .filter(c => c.slug === livro.slug)
                        //Mapeamos o array filtrado pelo slug
                        .map(livro => (
                            //O componente Link da biblioteca React Router é o conteiner
                            //para todos os detalhes do livro. Ele "transforma" todos os
                            //detalhes em um link para a página do livro
                            <Link to={`\livro\${livro.slug}`} key={livro.id}>
                                {
                                    <div className="detalhes">
                                        <h3>{livro.titulo}</h3>
                                        <p>{livro.descricao.slice(0,130) + "..."}</p>
                                        <p>Leia mais &gt;</p>
                                    </div>
                                }
                            </Link>
                        ))}
                </div>
            ))}
    </main>
);
export default Home;