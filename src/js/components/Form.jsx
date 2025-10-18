import React, { useState } from "react";


const Form = () => {

let [email,setEmail] =useState("")
let [password, setPassword] = useState("")
// o
// let [data, setData]=useState({
//     email:"",
//     password:""
// })

function handleEmail(event) {
    // console.log("hola");
    // console.log(event.target.value);
    setEmail(event.target.value);
    
}

// function handlePassword(event) {
//     // console.log("hola");
//     console.log(event.target.value);
//     setPassword(event.target.value);
    
// }


function sendData(event) {
    // console.log("funciona");
    event.preventDefault()
    console.log(email, password);
    
}



    return (
        <div className="container">
            <h1>Clase de formularios con React </h1>
            <form onSubmit={sendData}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        {/* asigna al input el evento onChange para vigilar los cambios */}
                        <input type="email" className="form-control" id="inputEmail3" onChange={handleEmail}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" 
                        onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                
                
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>




        </div>
    )



}

export default Form;