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
