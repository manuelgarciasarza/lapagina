import { useState, useEffect } from "react";
import style from "./inicio.module.css";
import postsData from "../../utils/users";
import avatar from "../../img/avatar.jpg";
import { crearPublicacion } from "../../utils/crearPublicacion";
import { usePublicaciones } from "../../hooks/usePublicaciones";
import Comentarios from "../../components/comentarios/comentarios";
import { useComentarios } from "../../hooks/useComentarios";

function PostWithCommentsCount({
  post,
  usuarioActual,
  comentarioAbierto,
  setComentarioAbierto,
}) {
  const comentarios = useComentarios(post.id);

  return (
    <div className={style.postCard}>
      <h3 className={style.postUser}>{post.usuario || post.user}</h3>
      <p className={style.postTime}>
        {post.timestamp ? formatearFecha(post.timestamp) : post.time}
      </p>
      <p className={style.postContent}>{post.comentario || post.content}</p>

      <button
        className={style.postComments}
        onClick={() =>
          setComentarioAbierto((prev) => (prev === post.id ? null : post.id))
        }
      >
        {comentarioAbierto === post.id
          ? "Ocultar comentarios"
          : "Ver comentarios"}{" "}
        ({comentarios.length})
      </button>

      {comentarioAbierto === post.id && (
        <Comentarios postId={post.id} usuario={usuarioActual} />
      )}
    </div>
  );
}

function formatearFecha(timestamp) {
  if (!timestamp?.toDate) return "Just now";
  const date = timestamp.toDate();
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

function Inicio() {
  const [postsLocales] = useState(postsData);
  const [publicacionesFirebase, setPublicacionesFirebase] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [comentarioAbierto, setComentarioAbierto] = useState(null);

  const publicacionesHook = usePublicaciones();

  const handleRefresh = () => {
    setPublicacionesFirebase([...publicacionesHook]);
  };

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("usuario");
    const paisGuardado = localStorage.getItem("pais");
    if (nombreGuardado) setNombre(nombreGuardado);
    if (paisGuardado) setPais(paisGuardado);
  }, []);

  useEffect(() => {
    setPublicacionesFirebase([...publicacionesHook]);
  }, [publicacionesHook]);

  const handlePost = async () => {
    if (newPost.trim() === "") return;
    await crearPublicacion(nombre, pais, newPost);
    setNewPost("");
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>LA PÁGINA</h1>

      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>{nombre}</h2>
          <div className={style.avatarWrapper}>
            <img src={avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>View your history</p>
        </div>
      </div>

      <div className={style.feed}>
        <div className={style.newPost}>
          <textarea
            maxLength={200}
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className={style.textarea}
          />
          <button onClick={handlePost} className={style.postButton}>
            Post
          </button>
        </div>

        <div className={style.filters}>
          <select className={style.select}>
            <option value="">Sort by</option>
            <option value="comments">Comments</option>
            <option value="new">New</option>
          </select>
          <select className={style.select}>
            <option value="">Country</option>
            <option value="argentina">Argentina</option>
            <option value="mexico">Mexico</option>
            <option value="usa">USA</option>
            <option value="spain">Spain</option>
          </select>
        </div>

        <div className={style.refresh}>
          <button onClick={handleRefresh} className={style.refreshButton}>
            Refresh 🔁
          </button>
        </div>

        {/* Publicaciones desde Firebase */}
        {publicacionesFirebase.map((post) => (
          <PostWithCommentsCount
            key={post.id}
            post={post}
            usuarioActual={nombre}
            comentarioAbierto={comentarioAbierto}
            setComentarioAbierto={setComentarioAbierto}
          />
        ))}

        {/* Publicaciones locales */}
        {postsLocales.map((post) => (
          <div key={post.id} className={style.postCard}>
            <h3 className={style.postUser}>{post.user}</h3>
            <p className={style.postTime}>{post.time}</p>
            <p className={style.postContent}>{post.content}</p>
            <p className={style.postComments}>{post.comments} comments</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
