import React from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
// import Button from "./TodoButton";

function TodoList() {
    const [tasks, setTasks] = React.useState(["Tarea1", "Tarea2"]);

    const [valor, setValor] = React.useState("")

    function addTask(arg0: string) {
        setTasks((CurrentTasks) => [...CurrentTasks, valor])
        setValor("")
    }
    function deleteTask(elemento:string) {
        setTasks(prevTasks => prevTasks.filter(item => item !== elemento))
    }
    function actualizarValor(e: React.FormEvent<HTMLInputElement>){
        setValor(e.currentTarget.value)
    }

    return (
        <div>
            <h2>Mi Lista de Tareas</h2>
            <input className="entradaTarea" value = {valor} type="text" onChange={actualizarValor}/>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} content={task} deleteTask={deleteTask}/>
                ))}
            </ul>
            <Button variant="success" onClick={()=> addTask("Nueva tarea")}>Añadir</Button>


        </div>
    );
}
export default TodoList