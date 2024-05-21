import axios from "axios";

import { GetBackendURL } from "../../config/GetBackendURL";

console.log(GetBackendURL);
export const fetchCpsPendie = async (setCpsPendientes) => {
  try {
    const backendURL = GetBackendURL;
    console.log(backendURL);

    const response = await axios.get(backendURL);
    setCpsPendientes(response.data);
  } catch (error) {
    console.error("Error al obtener los CPs pendientes:", error);
  }
};
//

//
export const revisarCp = async (cpId, decision, setCpsPendientes) => {
  try {
    const response = await axios.put(`/api/cps/${cpId}`, { decision });
    console.log(
      `Simulando revisión del CP con ID: ${cpId} y decisión: ${decision}`
    );

    await fetchCpsPendie(setCpsPendientes);
  } catch (error) {
    console.error("Error al revisar el CP:", error);
  }
};
