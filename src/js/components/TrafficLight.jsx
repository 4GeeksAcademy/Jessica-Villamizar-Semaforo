import React from "react";
import { useState } from "react";

const Trafficlight = () => {

	const [color, setColor] = useState("red");

	const [isPurpleOn, setIsPurpleOn] = useState(false);

	const handleAddLigth = () => {
		setIsPurpleOn(!isPurpleOn);
	};


	return <div className="d-flex flex-column align-items-center mt-4">
		<div className="bg-dark" style={{ width: "30px", height: "100px" }}> </div>
		<div className="bg-dark p-4" style={{ width: "100px", height: "auto", borderRadius: "10px" }}>
			<div class="d-flex flex-column align-items-center">

				<button onClick={() => setColor("red")}
					type="button" class={"btn btn-danger mb-3 rounded-circle " + (color == "red" ? "onred" : "")}
					style={{ width: "40px", height: "40px" }}></button>

				<button onClick={() => setColor("yellow")}
					type="button" class={"btn btn-warning mb-3 rounded-circle " + (color == "yellow" ? "onyellow" : "")}
					style={{ width: "40px", height: "40px" }}></button>

				<button onClick={() => setColor("green")} 
				type="button" class={"btn btn-success mb-3 rounded-circle " + (color == "green" ? "ongreen" : "")} 
				style={{ width: "40px", height: "40px" }}></button>
				
				{isPurpleOn && (
				<button onClick={() => setColor("purple")} 
				type="button" class={"btn btn-purple mb-3 rounded-circle " + (color == "purple" ? "onpurple" : "")} 
				style={{ width: "40px", height: "40px" }}></button>)}
			</div>
		</div>
		<div className="mt-5" role="group" aria-label="Basic mixed styles example">
			<button onClick={() => setIsPurpleOn("true")} type="button" class="btn btn-primary btn-lg">Agregar Luz</button>
		</div>
	</div>

};

export default Trafficlight;