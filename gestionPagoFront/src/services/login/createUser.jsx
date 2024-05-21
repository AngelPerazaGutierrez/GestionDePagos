import axios from "axios";
import { getBackendURL } from "../config/backendConfig";

export const createUser = async (userData) => {
  try {
    const backendURL = getBackendURL();
    const response = await axios.post(`${backendURL}/users`, userData);
    return response.data; // Puedes retornar datos adicionales si es necesario
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
//
//

export const loginUser = async (credentials) => {
  try {
    const backendURL = getBackendURL();

    // Enviar una solicitud POST al backend para autenticar al usuario
    const response = await axios.post(`${backendURL}/login`, credentials);

    // Retornar los datos del usuario autenticado (si es necesario)
    return response.data;
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la solicitud
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};
