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
    console.error("Error al revisar el ciudad:", error);
  }
};

export const odtenerCiudad = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}ciudad/listar-ciudad`); 
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};
