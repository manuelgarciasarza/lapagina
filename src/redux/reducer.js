// reducer.js

import {
  FETCH_PRODUCTS,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./actions";

const initialState = {
  products: [],
  userRegistration: null,
  user: null, // Estado de usuario autenticado
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        userRegistration: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload, // Guardamos los datos del usuario autenticado
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null, // Quitamos los datos del usuario autenticado al cerrar sesión
      };
    default:
      return state;
  }
};

export default rootReducer;
