import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const crearPublicacion = async (nombre, country, comentario) => {
  const nuevaPublicacion = {
    comentario,
    timestamp: Timestamp.now(),
    usuario: nombre,
    country,
  };

  try {
    await addDoc(collection(db, "publicaciones"), nuevaPublicacion);
  } catch (error) {
    console.error("Error al crear publicación:", error);
  }
};
