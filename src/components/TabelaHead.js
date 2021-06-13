import React from "react"

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de livros</th>
        </tr>
        <tr>
            <th>Código</th>
            <th>Título
                <div class="container-setinhas">
                    <div onClick={ () => props.ordenarCrescente() }  >&#129093;</div>
                    <div onClick={ () => props.ordenarDecrescente() }>&#129095;</div>
                </div>
            </th>
            <th>autor</th>
            <th></th>
        </tr>
    </thead>
);
export default TabelaHead;