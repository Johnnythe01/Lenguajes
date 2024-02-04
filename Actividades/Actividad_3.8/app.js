function addTask() {
    const texto = document.getElementById("texto").value.trim();
    const nuevaTarea = document.createElement("li");

    nuevaTarea.textContent = texto;

    const botonEliminar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = () => nuevaTarea.remove();

    nuevaTarea.appendChild(botonEliminar);

    document.getElementById("list").appendChild(nuevaTarea);
    document.getElementById("texto").value = "";
}