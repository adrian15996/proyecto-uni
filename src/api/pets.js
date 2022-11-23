import { API_HOST } from "../utils/constants";

export const getDataPets = async (token) => {
  try {
    const url = `${API_HOST}/api/v1/pets`;
    const response = await fetch(url, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("A ocurrido un error al obtener los datos del usuario");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const updateDataUser = async (token, data) => {
    try {
      const url = `${API_HOST}/api/v1/users`;
      const response = await fetch(url, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("A ocurrido un error al actualizar los datos del usuario");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  };
