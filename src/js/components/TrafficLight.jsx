import React from "react";
import { useState } from "react";

const Trafficlight = () => {

	const [ color, setColor ] = useState("red");


	return <div className="container-fluid mt-4 p-4">
		<div className="container-fluid bg-dark" style={{ width: "20px", height: "100px" }}> </div>
		<div className="container-fluid bg-dark p-4" style={{ width: "80px", height: "200px" }}>
			<div class="btn-group-vertical d-flex justify-context align-items" role="group" aria-label="Basic mixed styles example">
				<button type="button" class="btn btn-danger mb-3 rounded-circle" style={{ width: "40px", height: "40px" }}></button>
				<button type="button" class="btn btn-warning mb-3 rounded-circle" style={{ width: "40px", height: "40px" }}></button>
				<button type="button" class="btn btn-success mb-3 rounded-circle" style={{ width: "40px", height: "40px" }}></button>
			</div>
		</div>
	</div>


};

export default Trafficlight;