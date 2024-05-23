import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearEmpresa = async (datosFormEmpresa) => {
  console.log(datosFormEmpresa, "empresa");
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

export const consultarEmpresa = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}empresa/listar-empresa`); // Cambia esta URL por tu endpoint real
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};