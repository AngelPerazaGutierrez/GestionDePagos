import axios from "axios";
import { GetBackendURL } from "../config/GetBackendURL";

// export const consultarBanco = async (datosFormBanco) => {
//   console.log(datosFormBanco);
//   try {
//     const response = await axios.get(
//       `${GetBackendURL}banco/listar-todo`,
//       datosFormBanco
//     );
//     console.log(`Enviando el formulario`, response);
//   } catch (error) {
//     console.error("Error al revisar el banco:", error);
//   }
// };

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
