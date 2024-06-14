import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearUsuario = async (datosFormUser) => {
  console.log(datosFormUser);
  try {
    const response = await axios.post(
      `${GetBackendURL}usuario/registrar-usuario`,
      datosFormUser
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el :", error);
  }
};

export const obtenerUsuario = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}usuario/listar-usuario`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Editar
export const editarUsuario = async (usuario_cedula, usuario) => {
  try {
    const response = await axios.put(`${GetBackendURL}usuario/editar-usuario/${usuario_cedula}`);
      return response  
  } catch (error) {
    console.error("Error al editar el usuario:", error);
    throw error;
  }
};

// Eliminar

export const eliminarUsuario = async (usuario_id) => {
  try {
    const response = await axios.delete(
      `${GetBackendURL}usuario/eliminar-usuario/${usuario_id}`
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
