import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";
// Crear
export const crearComprobante = async (datosFormIngreso) => {
  console.log(datosFormIngreso);
  try {
    const response = await axios.post(
      `${GetBackendURL}cp/registrar-cp`,
      datosFormIngreso
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
};
//
export const obtenerComprobantes = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}cp/cp-principal`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error al traer la data: ", error);
    return [];
  }
};

// Editar
export const editarComprobante = async (cp_id, comprobante) => {
  try {
    const response = await axios.put(`${GetBackendURL}cp/editar-cp/${cp_id}`);    
    return response;
  } catch (error) {
    console.error("Error al editar el comprobante:", error);
    throw error;
  }
};

// Eliminar

export const eliminarComprobante = async (comprobanteId) => {
  try {
    const response = await axios.delete(
      `${GetBackendURL}cp/eliminar-cp/${comprobanteId}`
    );

    if (response.status === 200) {
      console.log("Comprobante eliminado con éxito");
      return true;
    } else {
      console.error("Error al eliminar el comprobante");
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar el comprobante:", error);
    return false;
  }
};
