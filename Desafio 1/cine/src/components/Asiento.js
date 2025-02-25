import React from "react";

// Componente que representa un asiento individual y al dar click cambia entre ocupado o desocupado
const Asiento = ({ ocupado, onClick }) => (
<button
    className={`btn m-1 ${ocupado ? "btn-danger" : "btn-success"} rounded-circle`}
    style={{
      width: "75px", 
      height: "75px", 
      fontSize: "18px", 
      display: "flex",
      alignItems: "center", 
      justifyContent: "center", 
    }}
    onClick={onClick}
  >
    {ocupado ? "X" : "✔"}
  </button>
);

export default Asiento;
