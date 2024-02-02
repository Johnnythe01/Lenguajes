import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
    const [tasks, setTasks] = React.useState(["Tarea1", "Tarea2"]);

    function addTask(arg0: string) {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
            <h2>Mi Lista de Tareas</h2>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} content={task} />
                ))}
            </ul>
            <Button variant="success" onClick={() => addTask("Nueva tarea")}>

            </Button>
        </div>
    );
}
export default TodoList