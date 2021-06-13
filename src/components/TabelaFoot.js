import React from "react"

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Lista com {props.qtdLivros} livro(s)</td>
        </tr>
    </tfoot>
);
export default TabelaFoot;