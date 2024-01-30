import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [tasks, setTasks] = React.useState(["Tarea1", "Tarea2"]);

    return (
        <div>
            <h2>Mi Lista de Tareas</h2>
            <ul>
                {tasks.map((task, index) => (
                  //<li key={index}>(task)</li>
                    <TodoItem key= {index} content={task}/>
                ))}
        </ul>
        </div>
    );
}
export default TodoList