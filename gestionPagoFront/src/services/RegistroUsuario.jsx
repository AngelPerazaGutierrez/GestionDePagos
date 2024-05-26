import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";
export const registroUsuario = async (datoFormUser) => {
  console.log(datoFormUser);
  try {
    const response = await axios.post(
      `${GetBackendURL}usuario/registrar-usuario`,
      datoFormUser
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el :", error);
  }
};

export const consultarUsuario = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}usuario/listar-usuario`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};


// Editar
export const editarUsuario = async (usuario_cedula, usuario) => {
  try {
    const response = await axios.put(
      `${GetBackendURL}/editar-usuario/${usuario_cedula}`,
      usuario
    );
    return response;
  } catch (error) {
    console.error("Error al editar el usuario:", error);
    throw error;
  }
};

// Eliminar

export const eliminarUsuario = async (usuario_id) => {
  try {
    const response = await axios.delete(
      `${BASE_BACKEND_URL}/eliminar-usuario/${usuario_id}`
    );

    if (response.status === 200) {
      console.log("usuario eliminado con éxito");
      return true;
    } else {
      console.error("Error al eliminar el usuario");
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar el usuario:", error);
    return false;
  }
};