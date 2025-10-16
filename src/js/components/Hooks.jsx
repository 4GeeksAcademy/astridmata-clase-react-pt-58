import React, {useState} from "react"; // 1 importar useState

export const Hooks =()=>{


/// let [valorActual, Funcion] = useState(valor inicial )
// el set es setter de useState

let [contador, setContador] = useState(0) // 2 llamar a useState
let [texto, setTexto] = useState("Seguir") 
let [btnColor, setBtnColor] = useState("btn-success") 


// "contador" es el valor actual (siempre poner el valor inicial )
// "setContador" la funcion para actualizar el valor actual 

let incrementar =()=>{
    // hace que el componente se vuelva a renderizar
    // setContador(contador +1)


    if (contador === 0) {
        setContador(1)
        setTexto("Dejar de seguir")
        setBtnColor("btn-danger")
    } else {
        setContador(0)
        setTexto("Seguir")
        setBtnColor("btn-success")
    }
}


// console.log(useState());

    //  let frutas = [ "fresa", "uva"]

    return(
        <>
        <h1>Hooks (estados)</h1>
        
        <button type="button" className={"btn " +btnColor} onClick={incrementar}>{texto}</button>
        <p>El contador es {contador} </p>




        </>
    )


}