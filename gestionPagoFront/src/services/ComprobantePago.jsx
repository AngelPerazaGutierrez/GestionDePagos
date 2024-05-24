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
    console.error("Error al revisar el CP:", error);
  }
};
//
// Actualizar
export const obtenerComprobantes = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}cp/cp-principal`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Editar
export const editarComprobante = async (pc_id, comprobante) => {
  try {
    const response = await axios.put(
      `${GetBackendURL}cp/editar-cp/${pc_id}`,
      comprobante
    );
    console.log(response, "ddddd");
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
      `${BASE_BACKEND_URL}/eliminar-cp/${comprobanteId.id}`
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
