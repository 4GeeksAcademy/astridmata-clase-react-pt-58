import React, { useState, useEffect } from "react"; //1 importar los hooks

const Rick = () => {
//2. estado para guardar el array de personajes (inicialmente esta vacio)
let [personajes, setPersonajes] = useState([])

const obtenerPersonajes = () => {
    const API_URL = 'https://rickandmortyapi.com/api/character'

    fetch(API_URL)
    .then(response => response.json())  //convierte la respuesta a un formato JSON
    .then (data => {setPersonajes(data.results)})  // toma los datos para mostrar en el array
    .catch( error => { console.log('Hubo un problema al obtener los personajes: \n', error )}) //imprimir el error en la consola para depurar

}

useEffect(()=>{
//onload
//llamar a una funcion
obtenerPersonajes()
},[])

// console.log(personajes);


    return (
        <div>
            <h1>Clase de Api </h1>

            <h2>Personajes de Rick and Morty </h2>

            <ul>
                {personajes.map(personaje =>(
                    <li key={personaje.id}>
                            Nombre: {personaje.name}, Specie: {personaje.species}
                    </li>
                ))}


            </ul>


        </div>
    )

}

export default Rick;