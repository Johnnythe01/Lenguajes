import React from "react";
import {Button} from "react-bootstrap";
function TodoItem({ content, deleteTask }: { content: string, deleteTask: (elemento:string) => void }) {


    return (
        <div className="liContenedor">
         <li>{content}</li>
         <i className="borrar" onClick={() => deleteTask(content)}>X</i>
         </div>
    );
}

export default TodoItem;