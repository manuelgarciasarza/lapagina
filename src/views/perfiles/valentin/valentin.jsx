import style from "./valentin.module.css";
import Avatar from "../../../img/avatar.jpg";
import { Link } from "react-router-dom";

function Valentin() {
  return (
    <div className={style.container}>
      <Link to="/" className={style.backLink}>
        Ir a la página →
      </Link>

      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>Valentín</h2>
          <div className={style.avatarWrapper}>
            <img src={Avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>Country: Argentina</p>
          <p className={style.history}>Age: 23</p>
        </div>
      </div>

      <div className={style.feed}>
        {[
          "El Archivo Perdido es real. Como el recuerdo de mi viejo en la Guerra del Borrado.",
          "Hoy arreglé un proyector viejo. Nada más real que una imagen que se puede quemar.",
          "Dicen que en el Árbol del Sur hay registros que ni La Página pudo tragar.",
          "Me llegó un paquete de una portadora. Historias que no saben digitalizarse.",
          "Las Zonas Silenciosas son los últimos refugios. Por ahora.",
          "Quisiera que las palabras se grabaran solo en la piel. No en servidores.",
          "El Núcleo me queda lejos. Igual que el olvido.",
          "A veces sueño que mi viejo me habla. Nunca deja de contarme cosas… que no puedo registrar.",
        ].map((post, i) => (
          <div className={style.postCard} key={i}>
            <h3 className={style.postUser}>Valentín</h3>
            <p className={style.postTime}>{`${23 - i}/6/2025 ${7 + i}:2${
              i % 4
            } ${i % 2 === 0 ? "AM" : "PM"}`}</p>
            <p className={style.postContent}>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Valentin;
