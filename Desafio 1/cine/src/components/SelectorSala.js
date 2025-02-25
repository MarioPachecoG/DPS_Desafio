import React from "react";

// Componente que permite seleccionar entre dos salas de cine
const SelectorSala = ({ salaSeleccionada, setSalaSeleccionada }) => (
  <div className="mb-3">
    <button
      className={`btn btn-${salaSeleccionada === "sala1" ? "primary" : "secondary"} mx-3 rounded-circle`}
      style={{ width: "100px", height: "100px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={() => setSalaSeleccionada("sala1")}
    >
      Sala 1
    </button>
    <button
      className={`btn btn-${salaSeleccionada === "sala2" ? "primary" : "secondary"} mx-3rounded-circle`}style={{ width: "100px", height: "100px", fontSize: "18px",display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setSalaSeleccionada("sala2")}
      >
      Sala 2
    </button>
  </div>
);

export default SelectorSala;
