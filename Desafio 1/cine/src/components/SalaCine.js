import React from "react";
import Asiento from "./Asiento";

// Componente que representa la sala de cine con una cuadrícula de asientos
const SalaCine = ({ asientos, manejarSeleccion }) => (

  <div className="d-flex flex-column align-items-center">
    <div className="d-flex mb-3">
      <div className="d-flex flex-column align-items-center">
        <p>Disponible</p>
        <button
          className="btn btn-success rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✔
        </button>
      </div>
      <div className="d-flex flex-column align-items-center mx-3">
        <p>Ocupado</p>
        <button
          className="btn btn-danger rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          X
        </button>
      </div>
    </div>

    {/* Cuadrícula de asientos */}
    {asientos.map((fila, i) => (
      <div key={i} className="d-flex">
        {fila.map((ocupado, j) => (
          <Asiento key={j} ocupado={ocupado} onClick={() => manejarSeleccion(i, j)} />
        ))}
      </div>
    ))}
  </div>
);

export default SalaCine;
