import React from "react";

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Quantidade de livros na tabela: {props.qtdeLivros}</td>
        </tr>
    </tfoot>
);

export default TabelaFoot