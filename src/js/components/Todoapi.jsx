import React, { useState, useEffect } from "react"; //1 importar los hooks

const Todoapi = () => {

    let [lista, setLista] = useState([])

    const crearUsuario = () => {
        const API_URL = 'https://playground.4geeks.com/todo/'

        fetch(API_URL + "users/alexis", {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())  //convierte la respuesta a un formato JSON
            .then((data) => console.log(data))  // toma los datos para mostrar en la consola
            .catch(error => { console.log('Hubo un problema al obtener los personajes: \n', error) }) //imprimir el error en la consola para depurar

    }

    const traerTareas = () => {
        const API_URL = 'https://playground.4geeks.com/todo/'

        fetch(API_URL + "users/alexis")

            .then((response) => {

                if (response.status === 404) {
                    crearUsuario()
                }


                // console.log(response)
                return response.json()
            }) 

            .then((data) => setLista(data.todos))  // toma los datos para mostrar en la consola
            .catch(error => { console.log('Hubo un problema al obtener los personajes: \n', error) }) //imprimir el error en la consola para depurar

    }



    useEffect(() => {
        // crearUsuario()
        traerTareas()
    }, [])




    return (
        <div>
            <h1>todo list api 4geeks </h1>
            <input type="text" placeholder="agregar tarea "/>
            <ul>
                {lista.map((item)=>(
                <li key={item.id}>
                    {item.label}
                </li>
            ))}
            </ul>

        </div>
    )

}

export default Todoapi;