import React from "react";

function Inicio() {
    return (
        <div className="App">
            <h1>Guía de razas de gatos</h1>
                <p>Bienvenido a nuestra gran página de busqueda de razas de gatos, aquí vas a encontrar desde los amigos
                    peludos más majetes y pequeñitos, hasta los más grandes y exóticos.</p>
                <p>Si aún tienes dudas sobre que tipo de gato te gustaría que te adoptara, (si, ellos te adoptan a ti, no tu a ellos)
                    te encantará descubrir sus variadas personalidades y distintivos rasgos.</p>
                <p>Diviértete explorando y conociendo numerosas razas de gatitos!</p>
            </div>
    );
}

export default Inicio;

/*Desarrolla una aplicación web que permite a los usuarios explorar diferentes carreras de gats o gossos (a triar),
utilizando React para la creación de la interfaz de los usuarios, junto con el uso de React Router para la navegación,
y reacciona. bootstrap per a l'estilització. Este proyecto tiene como objetivo principal practicar el manejo de efectos secundarios con React.
useEffect y la realización de peticiones a una API externa utilizando fetch.

Descripción

La aplicación permite a los usuarios navegar entre un listado de carreras de gats o gossos
(según la API escollida) y, al hacer clic en una raza, mostrar detalles específicos con una foto, una descripción y cualquier otra
 información relevante que se ofrece. la API. Además, es necesario implementar funciones para llevar los parámetros de consulta (Query Params)
  y pasar parámetros a las rutas para una mejor experiencia del usuario.


Requisitos

Estructura de la página: La aplicación debe contener como mínimo las siguientes rutas (páginas):
Listado de carreras: Una página que muestra un listado de todas las carreras disponibles,
utilizando la información proporcionada por la API seleccionada. Esta página tiene la capacidad de gestionar parámetros
de consulta para filtrar los resultados según las preferencias del usuario.
Detalles de la raza: Una página de detalles que se muestra cuando el usuario selecciona una raza específica,
muestra una foto, una descripción y otros datos relevantes.
Navegación: Implemente una barra de navegación utilizando react-bootstrap que permite a los usuarios navegar fácilmente
entre las diferentes páginas de la aplicación.

Gestión de estados y efectos: Utilice el gancho React.useEffect y la función fetch para realizar solicitudes 
en la API seleccionada y gestionar la carga de datos. Además, utilice las estadísticas de React para controlar el contingut mostrado al usuario.

Responsabilidad: Asegúrese de que la aplicación siga siendo responsable y proporcione una buena experiencia del usuario en dispositivos móviles.

 */