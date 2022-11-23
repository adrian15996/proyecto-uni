import { SET_PETS } from "../actions/types";
  
  const initialState = {
    pets:[],

  };
  
  export const petsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PETS:
        return { ...state, pets: action.payload };
  
      default:
        return state;
    }
  };
  