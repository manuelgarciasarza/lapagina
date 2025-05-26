import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

// Traer productos

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://147.79.81.163/api/Producto/Busqueda",
        {
          headers: { accept: "*/*" },
        }
      );
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data.response.productos.slice(0, 10),
      });
    } catch (error) {
      console.error("error fetching products", error);
    }
  };
};

// Registrar usuario

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://147.79.81.163/api/usuario/registrar",
        userData,
        {
          headers: { accept: "*/*" },
        }
      );
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user", error);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      console.log("Enviando solicitud de login con los datos:", userData);

      const response = await axios.post(
        "http://147.79.81.163/api/Usuario/Ingresar", // URL de login
        userData, // Datos de usuario (email y clave)
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Respuesta del servidor:", response.data);
      console.log(
        "TOKEN ENVIADO POR EL SERVIDOR:",
        response.data.response.access_token
      );

      // Guardamos el token directamente en localStorage
      localStorage.setItem("token", response.data.response.access_token);
      console.log(
        "Token guardado en localStorage:",
        response.data.response.access_token
      );

      // Verificación de que el token se guardó correctamente en localStorage
      const savedToken = localStorage.getItem("token");
      console.log("Token recuperado de localStorage:", savedToken);

      // Disparamos la acción para almacenar los datos del usuario en el estado
      dispatch({
        type: LOGIN_USER,
        payload: response.data, // Los datos del usuario (incluyendo el token)
      });
      console.log(
        "Usuario autenticado y datos guardados en el estado:",
        response.data
      );
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      // Reseteamos el estado en caso de error
      dispatch({
        type: LOGIN_USER,
        payload: null,
      });
    }
  };
};

// Acción para cerrar sesión
export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
