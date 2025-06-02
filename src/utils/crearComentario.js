import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const crearComentario = async (postId, comentarioData) => {
  if (!postId || !comentarioData?.usuario || !comentarioData?.comentario) {
    console.warn("Faltan datos para crear comentario:", {
      postId,
      comentarioData,
    });
    return;
  }

  const nuevoComentario = {
    texto: comentarioData.comentario, // ojo que en Firestore en tu hook usas texto, no comentario
    usuario: comentarioData.usuario,
    timestamp: Timestamp.now(),
  };

  console.log(
    "Intentando crear comentario:",
    nuevoComentario,
    "en postId:",
    postId
  );

  try {
    await addDoc(
      collection(db, "publicaciones", postId, "comentarios"),
      nuevoComentario
    );
    console.log("Comentario creado con éxito");
  } catch (error) {
    console.error("Error al crear comentario:", error);
  }
};
