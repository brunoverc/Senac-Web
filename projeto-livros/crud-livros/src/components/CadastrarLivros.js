import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class CadastrarLivros extends Component {
    state = {
        livro: {
            id: this.props.livro.id,
            isbn: this.props.livro.isbn,
            titulo: this.props.livro.titulo,
            autor: this.props.livro.autor
        },
        //Definimos aqui uma chave de controle de redirecionamento como false
        redirecionar: false
    };
    //Essa função será executada quando o formulário for enviado
    handleLivroForm = e => {
        e.preventDefault();
        //Disparamos a função inserirLivro quando o formulário for enviado
        this.props.inserirLivro(this.state.livro);
        //Assim que a função inserirLivro for disparada, alteramos o status da chave
        //de controle do redirecionamento para true
        this.setState({ redirecionar: true });
    }
    render() {
        //Se a chave de controle de redirecionamento for true, redirecionamos para a página
        //tabela livros(Home)
        if (this.state.redirecionar === true) {
            return <Navigate to="/" />
        }
        return (
            <form onSubmit={this.handleLivroForm}>
                <h1>Cadastrar livro</h1>
                <p>
                    <label htmlFor="fisbn">
                        ISBN: Formato - (
                        <span style={{ color: "red" }}> 978-85-7522-xxx-x </span>)
                    </label>
                    <input
                        type="text"
                        autoFocus
                        defaultValue={this.props.isbn}
                        id="fisbn"
                        required
                        pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
                        value={this.state.livro.isbn}
                        onChange={e =>
                            this.setState({
                                livro: {
                                    ...this.state.livro,
                                    isbn: e.target.value
                                }
                            })
                        }
                    />
                </p>
                <p>
                    <label htmlFor="ftitulo">Título</label>
                    <input
                        type="text"
                        defaultValue={this.props.titulo}
                        id="ftitulo"
                        required
                        value={this.state.livro.titulo}
                        onChange={e =>
                            this.setState({
                                livro: {
                                    ...this.state.livro,
                                    titulo: e.target.value
                                }
                            }
                            )}
                    />
                </p>
                <p>
                    <label htmlFor="fautor">Autor</label>
                    <input
                        type="text"
                        defaultValue={this.props.autor}
                        id="fautor"
                        required
                        value={this.state.livro.autor}
                        onChange={e => {
                            this.setState({
                                livro: {
                                    ...this.state.livro,
                                    autor: e.target.value
                                }
                            })
                        }} />
                </p>
                <p>
                    <button type="submit" className="botao cadastrar" onClick={this.state.handleLivroForm}>
                        Cadastrar
                    </button>
                </p>
            </form>
        );
    }
}

export default CadastrarLivros;
