import React from "react"

const TabelaBody = props => (
    <tbody>
        { props.livros.map( ( item, index ) => (
            <tr key={ item.id } >
                <td>{ item.id }</td>
                <td>{ item.titulo }</td>
                <td>{ item.autor}</td>
                <td>
                    <button className="botao remover">Remover</button>
                </td>
            </tr>
        ))}
    </tbody>
);
export default TabelaBody;