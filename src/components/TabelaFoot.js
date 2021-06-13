import React from "react"

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Quantidade  = {props.qtdLivros} livro(s)</td>
        </tr>
    </tfoot>
);
export default TabelaFoot;