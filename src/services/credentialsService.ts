import axios from "axios";
import {  setCookie } from 'typescript-cookie'
import { userCredentials, dataAthResponse } from "@/utils/interfaces";

export async function createCredentials(createCredentials: userCredentials) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/register",
      createCredentials,
      {
        withCredentials: true,
      }
    );

    if (response.headers.authorization) {
      const authToken = response.headers.authorization;
      setCookie("authorization", authToken, {
        sameSite: "strict",
        secure: true,
      });
    }
    return response.status;
  } catch (error) {
    console.error("Error al crear las credenciales", error);
    throw error;
  }
}

export async function loggin(createCredentials: userCredentials): Promise<dataAthResponse> {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      createCredentials,
      {
        withCredentials: true,
      }
    );

    if (response.headers.authorization) {
      const authToken = response.headers.authorization;
      setCookie("authorization", authToken, {
        sameSite: "strict",
        secure: true,
      });
    }
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    throw error;
  }
}
