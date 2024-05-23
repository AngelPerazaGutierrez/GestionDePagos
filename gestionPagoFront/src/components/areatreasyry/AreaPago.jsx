import React, { useState, useEffect } from "react";
import { fetchCpsPendie } from "../../services/areaPagos/getchCpsPendie";

export const AreaPago = () => {
  const [cpsPendientes, setCpsPendientes] = useState([]);
  const [cpSeleccionado, setCpSeleccionado] = useState(null);
  useEffect(() => {
    // fetchCpsPendie(setCpsPendientes);
  }, []);

  const handleRevisarCp = (cpId, decision) => {
    revisarCp(cpId, decision, setCpsPendientes);
  };
  return (
    <div>
      <h1>Área de Pagos</h1>
      <ul className="">
        {cpsPendientes.map((cp) => (
          <li key={cp.id}>
            {cp.title}
            <button onClick={() => handleRevisarCp(cp.id, "aprobado")}>
              Aprobar
            </button>
            <button onClick={() => handleRevisarCp(cp.id, "rechazado")}>
              Rechazar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
