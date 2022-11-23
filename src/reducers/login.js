import {
  SET_EMAIL,
  SET_LOGIN,
  SET_NAME,
  SET_PHONE,
  SET_GENDER,
  SET_HASH,
} from "../actions/types";

const initialState = {
  hashLogin: null,
  email: null,
  gender: null,
  name: null,
  phone: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, hashLogin: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_GENDER:
      return { ...state, gender: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_PHONE:
      return { ...state, phone: action.payload };

    default:
      return state;
  }
};
