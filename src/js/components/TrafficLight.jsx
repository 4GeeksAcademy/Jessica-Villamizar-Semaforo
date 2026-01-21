import React, { useState } from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("red");
    
    const [isPurpleOn, setIsPurpleOn] = useState(false);

    const handleAddLight = () => {
        setIsPurpleOn(!isPurpleOn); 
    };

    return (
        
        <div className="d-flex flex-column align-items-center mt-4">    
            <div className="bg-dark" style={{ width: "30px", height: "90px" }}></div>
            <div className="bg-dark p-4" style={{ width: "120px", height: "auto", borderRadius: "10px" }}>
                <div className="d-flex flex-column align-items-center">
                    <button 
                        onClick={() => setColor("red")} 
                        type="button" className={"btn btn-danger mb-3 rounded-circle " + (color === "red" ? "onred" : "")} 
                        style={{ width: "55px", height: "55px" }}
                    ></button>

                    <button 
                        onClick={() => setColor("yellow")} 
                        type="button" className={"btn btn-warning mb-3 rounded-circle " + (color === "yellow" ? "onyellow" : "")} 
                        style={{ width: "55px", height: "55px" }}
                    ></button>

                    <button 
                        onClick={() => setColor("green")} 
                        type="button" className={"btn btn-success mb-3 rounded-circle " + (color === "green" ? "ongreen" : "")} 
                        style={{ width: "55px", height: "55px" }}
                    ></button>

                    {isPurpleOn && (
                        <button 
                            onClick={() => setColor("purple")} 
                            type="button" className={"btn btn-purple mb-3 rounded-circle " + (color === "purple" ? "onpurple" : "")} 
                            style={{ width: "55px", height: "55px", backgroundColor: "#800080", borderColor: "#800080" }}
                        ></button>
                    )}
                </div>
            </div>

            <div className="mt-5">
                <button 
                    onClick={handleAddLight} type="button" 
                    className="btn btn-dark btn-lg"
                >
                    {isPurpleOn ? "Apagar Luz" : "Enceder Luz"}
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;