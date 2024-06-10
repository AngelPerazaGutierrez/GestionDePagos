import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const crearEmpresa = async (datosFormEmpresa) => {
  console.log(datosFormEmpresa, "empresa");
  try {
    const response = await axios.post(
      `${GetBackendURL}empresa/editar-empresa/${empresa_nit}`,
      datosFormEmpresa
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el CP:", error);
  }
};

export const obtenerEmpresa = async () => {
  console.log(GetBackendURL, "comprobante");
  try {
    const response = await axios.get(`${GetBackendURL}empresa/listar-empresa`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
  }
};

// Editar
export const editarEmpresa = async (empresa_id, empresa) => {
  try {
    const response = await axios.put(
      `${GetBackendURL}editar-empresa/${empresa_id}`,
      empresa
    );
    return response;
  } catch (error) {
    console.error("Error al editar la empresa:", error);
    throw error;
  }
};

// Eliminar

export const eliminarEmpresa = async (empresa_id) => {
  try {
    const response = await axios.delete(
      `${GetBackendURL}eliminar-empresa/${empresa_id}`
    );

    if (response.status === 200) {
      console.log("Empresa eliminado con éxito");
      return true;
    } else {
      console.error("Error al eliminar la empresa");
      return false;
    }
  } catch (error) {
    console.error("Error al intentar eliminar la empresa:", error);
    return false;
  }
};
