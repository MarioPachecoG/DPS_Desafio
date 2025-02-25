import React from "react";

// Componente que muestra el resumen de la compra con el total
const ResumenCompra = ({ total }) => (
  <div className="mt-3">
    <h4>Total a pagar: ${total}</h4>
  </div>
);

export default ResumenCompra;
