// src/hooks/usePublicaciones.js
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const usePublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "publicaciones"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("📥 Publicaciones actualizadas desde Firebase:", docs);
      setPublicaciones(docs);
    });

    return () => unsubscribe(); // Limpia la suscripción al desmontar
  }, []);

  return publicaciones;
};
