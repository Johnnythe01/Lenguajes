import React from "react";
import { filas } from "./lista";
import Row from "./Row";

function Table() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Tienda</th>
                    <th>Notas</th>
                    <th>Comprado</th>
                    <th>Imagen</th>
                </tr>
                map {
                    <Row filas={filas}/>
                    
                }
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}

export default Table;