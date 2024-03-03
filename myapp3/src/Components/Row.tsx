import React from "react";

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