import { SET_EMAIL, SET_GENDER, SET_LOGIN, SET_NAME, SET_PHONE } from "./types";

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});
export const setGender = (payload) => ({
  type: SET_GENDER,
  payload,
});
export const setName = (payload) => ({
  type: SET_NAME,
  payload,
});
export const setPhone = (payload) => ({
  type: SET_PHONE,
  payload,
});
