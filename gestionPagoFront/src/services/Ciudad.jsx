import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearCiudad = async (datosFormCiudad) => {
  console.log(datosFormCiudad);
  try {
    const response = await axios.post(
      `${GetBackendURL}ciudad/registrar-ciudad`,
      datosFormCiudad
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el ciuda:", error);
  }
};
