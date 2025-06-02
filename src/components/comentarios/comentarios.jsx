import React, { useState } from "react";
import { useComentarios } from "../../hooks/useComentarios";
import { crearComentario } from "../../utils/crearComentario";
import styles from "./Comentarios.module.css";

const Comentarios = ({ postId, usuario }) => {
  const comentarios = useComentarios(postId);
  const [texto, setTexto] = useState("");

  const handleEnviarComentario = async () => {
    if (!texto.trim()) {
      console.warn("No se puede enviar comentario vacío");
      return;
    }

    console.log(
      "Enviando comentario:",
      texto,
      "para postId:",
      postId,
      "usuario:",
      usuario
    );

    await crearComentario(postId, {
      comentario: texto,
      usuario: usuario || "Anónimo",
    });

    setTexto("");
  };

  return (
    <div className={styles.card}>
      <div className={styles.newPost}>
        <textarea
          className={styles.textarea}
          placeholder="Add a comment..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className={styles.postButton} onClick={handleEnviarComentario}>
          Comment
        </button>
      </div>

      <div className={styles.postComments}>
        {comentarios.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comentarios.map((comentario) => (
            <div key={comentario.id} className={styles.comentarioItem}>
              <strong>{comentario.usuario}</strong>
              <p>{comentario.texto /* ojo que usas "texto" en Firestore */}</p>
              <small className={styles.timestamp}>
                {new Date(
                  comentario.timestamp?.toDate?.() || comentario.timestamp
                ).toLocaleString()}
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comentarios;
