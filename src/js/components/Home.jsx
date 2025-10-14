import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx"  //importo el componente 
import { Acordeon } from "./Acordeon.jsx"
import Card from "./Card.jsx"
import Cardmenu from "./Cardmenu.jsx"

//create your first component
const Home = (props) => {
	//array de objetos con la informacion del menu 
	const recetas = [
		{ nombre: "pasta", descripcion: "comida italiana tradicional" },
		{ nombre: "sopa", descripcion: "plata nutritivo caliente" },
		{ nombre: "ensalada", descripcion: "ensalada de tomate" }
	]

	return (
		<div className="text-center">
			{/* llamo al componente  */}
			<Navbar />
			<Acordeon />
			<Card />
			<Card />
			<Card />

			<h1>pt-58</h1>
			{/* <h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a> */}



			{/* <p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p> */}



			<h2>Clase 2 PROPS</h2>

			<h2>Menu </h2>
			{/* <Cardmenu nombre="pasta" descripcion="comida italiana tradicional" />
			<Cardmenu nombre="sopa" descripcion="plata nutritivo caliente" /> */}


			{/* usando map para mostrar las cartas del menu  */}
			{recetas.map((item, index) => (
				//la prop key es obligatoria en REACT 
				<Cardmenu key={index} nombre={item.nombre} descripcion={item.descripcion} />
			))}


			<h2>Contador </h2>

			<div className="row">

				<div className="col">{props.digitTwo}</div>
				<div className="col">{props.digitOne}</div>
			</div>

		</div>
	);
};

export default Home;