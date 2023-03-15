import React from "react";
const TabelaBody = props =>(
    <tbody>
        {props.livros.map((livro, index) => (
            <tr key={livro.id}>
                <td>{livro.id}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                    <button className="botao remover">Remover</button>
                </td>
            </tr>
        ))}
        
    </tbody>
);

export default TabelaBody;