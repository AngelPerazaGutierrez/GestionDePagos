import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";


export const crearComprobante = async (datosFormIngreso) => {
  console.log(datosFormIngreso);
  try {
    const response = await axios.post(
      `${GetBackendURL}cp/registrar-cp`,
      datosFormIngreso
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el CP:", error);
  }
};

export const odtenerComprobantes = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}cp/cp-principal`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// export const revisarCp = async (cpId, setCpsPendientes) => {
//   try {
//     const response = await axios.put(`/api/cps/${cpId}`);
//     console.log(
//       `Simulando revisión del CP con ID: ${cpId}`
//     );
