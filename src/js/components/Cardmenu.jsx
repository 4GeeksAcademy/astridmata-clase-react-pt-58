import React from "react";

const Cardmenu = (props) => {
    // console.log(props);
    
    return (
        <div>
         
            <div className="card" style={{width: "18rem", background: "red"}}>
                <img src={props.imagen} className="card-img-top" alt={props.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                   
                </div>
            </div>
        </div>
    )
}
export default Cardmenu; 