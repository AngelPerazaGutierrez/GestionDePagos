import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearCiudad = async (datosFormCiudad) => {
  console.log(datosFormCiudad);
  try {
    const response = await axios.post(
      `${GetBackendURL}ciudad/editar-ciudad/`,

      datosFormCiudad,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el ciudad:", error);
  }
};

export const obtenerCiudad = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}ciudad/listar-ciudad`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Editar
export const editarCiudad = async (ciudad_id, ciudad) => {
  try {
    const response = await axios.put(
      `${GetBackendURL}ciudad/editar-ciudad/${ciudad_id}`,
      ciudad
    );
    return response;
  } catch (error) {
    console.error("Error al editar la ciudad:", error);
    throw error;
  }
};

// Eliminar

export const eliminarCiudad = async (ciudad_id) => {
  try {
    const response = await axios.delete(
      `${GetBackendURL}ciudad/eliminar-ciudad/${ciudad_id}`
    );

    if (response.status === 200) {
      console.log("Ciudad eliminado con éxito");
      return true;
    } else {
      console.error("Error al eliminar el Ciudad");
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar la Ciudad:", error);
    return false;
  }
};
