"use client"
import { useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //se importa el bootstrap
import SelectorSala from "../components/SelectorSala";
import SalaCine from "../components/SalaCine";
import ResumenCompra from "../components/ResumenCompra";
import './style.css';

export default function CineApp() {
  // Estado para almacenar la disponibilidad de asientos en cada sala
  const [salaSeleccionada, setSalaSeleccionada] = useState("sala1");
  const [salas, setSalas] = useState({
    sala1: Array(5).fill(Array(5).fill(false)), 
    sala2: Array(5).fill(Array(5).fill(false)),
  });

  //Precio de cada asiento
  const precioBoleto = 5;

  // Función para seleccionar y deseleccionar el asiento
  const manejarSeleccion = (fila, columna) => {
    setSalas((prevSalas) => {
      const nuevaSala = prevSalas[salaSeleccionada].map((filaArr, i) =>
        filaArr.map((asiento, j) => (i === fila && j === columna ? !asiento : asiento))
      );
      return { ...prevSalas, [salaSeleccionada]: nuevaSala };
    });
  };

  // Calcular el total de los asientos en tiempo real
  const total = salas[salaSeleccionada].flat().filter((asiento) => asiento).length * precioBoleto;
  
  useEffect(() => {
    document.title = "Venta de Boletos - Cine";
  }, []);

  return (
    
    <div className="container mt-4">

      
      <h1 className="text-center mb-4">Sistema de Venta de Boletos - Cine</h1>

      <SelectorSala salaSeleccionada={salaSeleccionada} setSalaSeleccionada={setSalaSeleccionada} />
      <SalaCine asientos={salas[salaSeleccionada]} manejarSeleccion={manejarSeleccion} />
      <ResumenCompra total={total} />
    </div>
  );
}
