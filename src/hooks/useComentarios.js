import { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const useComentarios = (postId) => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    if (!postId) {
      console.warn("useComentarios: No se recibió postId");
      return;
    }

    const comentariosRef = collection(
      db,
      "publicaciones",
      postId,
      "comentarios"
    );
    const q = query(comentariosRef, orderBy("timestamp", "asc"));

    console.log("Subscribiéndose a comentarios de postId:", postId);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const comentariosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(
          `useComentarios: recibidos ${comentariosData.length} comentarios`,
          comentariosData
        );
        setComentarios(comentariosData);
      },
      (error) => {
        console.error("Error en onSnapshot de comentarios:", error);
      }
    );

    return () => {
      console.log("Desuscribiéndose de comentarios de postId:", postId);
      unsubscribe();
    };
  }, [postId]);

  return comentarios;
};
