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
                {filas.map((fila, index) => (
                    <tr key={index}>
                        <td>{fila.producto}</td>
                        <td>{fila.cantidad}</td>
                        <td>{fila.precio}</td>
                        <td>{fila.tienda}</td>
                        <td>{fila.notas}</td>
                        <td>{fila.comprado ? "Sí" : "No"}</td>
                        <td>
                            <img src={fila.imagen} alt={fila.producto} style={{ maxWidth: '100px' }} />
                        </td>
                    </tr>
                ))}
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}

export default Table;