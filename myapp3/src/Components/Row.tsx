import React from "react";
import { filas } from "./lista";


function Row({ filas }) {
    return (
        <tr>
            <td>{filas.producto}</td>
            <td>{filas.cantidad}</td>
            <td>{filas.precio}</td>
            <td>{filas.tienda}</td>
            <td>{filas.notas}</td>
            <td>{filas.comprado}</td>
            <td>{filas.imagen}</td>
        </tr>
    )
}

export default Row;