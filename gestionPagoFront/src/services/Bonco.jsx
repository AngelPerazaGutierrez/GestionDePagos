import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearBanco = async (datosFormBanco) => {
  console.log(datosFormBanco);
  try {
    const response = await axios.post(
      `${GetBackendURL}banco/registrar-banco`,
      datosFormBanco
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el banco:", error);
  }
};


export const odtenerBanco = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}banco/listar-todo`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Editar
export const editarBanco = async (banco_id, banco) => {
  try {
    const response = await axios.put(
      `${GetBackendURL}/editar-banco/${banco_id}`,
      banco
    );
    return response;
  } catch (error) {
    console.error("Error al editar el comprobante:", error);
    throw error;
  }
};

// Eliminar

export const eliminarBanco = async (banco_id) => {
  try {
    const response = await axios.delete(
      `${BASE_BACKEND_URL}/eliminar-banco/${banco_id}`
    );

    if (response.status === 200) {
      console.log("Banco eliminado con éxito");
      return true;
    } else {
      console.error("Error al eliminar el banco");
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar el banco:", error);
    return false;
  }
};