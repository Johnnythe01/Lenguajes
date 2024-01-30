import React from "react";

function todobutton() {
    //estado ->contador
    const [cont, setCont] = React.useState(0);
    const [palabra, setPlabra] = React.useState ("hola");

    function click () {
        setCont(prevCont => prevCont + 1);
        //setCont(cont + 1)
}

return (
    <div>
    <p>{cont}</p>
    <button onClick={click}>Click</button>
    </div>
)

}
export default TodoButton;
