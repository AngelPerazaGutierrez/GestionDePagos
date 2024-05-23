import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

export const consultarComprobante = async (datosFormIngreso) => {
  console.log(datosFormIngreso);
  try {
    const response = await axios.post(
      `${GetBackendURL}cp/cp-principal`,
      datosFormIngreso
    );
    console.log(`mostrando comprobantes de pago`, response);
  } catch (error) {
    console.error("Error al consultar los comprobantes de pago:", error);
  }
};



export const crearComprobante = async (datosFormIngreso) => {
  console.log(datosFormIngreso);
  try {
    const response = await axios.post(
      `${GetBackendURL}cp/registrar-cp`,
      datosFormIngreso
    );
    console.log(`Enviando el formulario`, response);
  } catch (error) {
    console.error("Error al revisar el CP:", error);
  }
};
