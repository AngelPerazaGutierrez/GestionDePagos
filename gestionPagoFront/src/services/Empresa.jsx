import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearEmpresa = async (datosFormEmpresa) => {
  console.log(datosFormEmpresa);
  try {
    const response = await axios.post(
      `${GetBackendURL}empresa/registrar-empresa`,
      datosFormEmpresa
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el CP:", error);
  }
};
