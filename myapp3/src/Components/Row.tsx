import React from "react";
<<<<<<< HEAD
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
=======

interface RowProps {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
}
const Row: React.FC<RowProps> = ({
    producto,
    cantidad,
    precio,
    tienda,
    notas,
    comprado,
    imagen
}) => {
    return (
        <tr>
            <td>{producto}</td>
            <td>{cantidad}</td>
            <td>{precio}</td>
            <td>{tienda}</td>
            <td>{notas}</td>
            <td>{comprado ? "Sí" : "No"}</td>
            <td>
                <img src={imagen} alt={producto} style={{ width: "50px", height: "50px" }} />
            </td>
        </tr>
    );
}

export default Row;
>>>>>>> 35aa2fa10a65091ed92345c95ae2972b9ec1bae1
