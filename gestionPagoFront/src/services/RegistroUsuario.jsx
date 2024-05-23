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
