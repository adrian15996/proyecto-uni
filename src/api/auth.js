import { API_HOST } from "../utils/constants";

export const login = async (data) => {
  try {
    const url = `${API_HOST}/api/v1/auth/login`;
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('correo o contraseña incorrectos');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const singin = async (data) => {
  try {
    const url = `${API_HOST}/api/v1/users`;
    const response = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person: { ...data } }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
