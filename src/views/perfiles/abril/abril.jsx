import style from "./abril.module.css";
import Avatar from "../../../img/avatar.jpg";
import { Link } from "react-router-dom";

function Abril() {
  return (
    <div className={style.container}>
      <Link to="/" className={style.backLink}>
        Ir a la página →
      </Link>

      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>Abril</h2>
          <div className={style.avatarWrapper}>
            <img src={Avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>Country: Argentina</p>
          <p className={style.history}>Age: 29</p>
        </div>
      </div>

      <div className={style.feed}>
        {[
          "Varsovia. Donde los muros tienen grietas… y las memorias, eco.",
          "Las Relatoras no archivamos. Recordamos. Como hacía Dora, sin permiso.",
          "Cuando la guerra terminó en el 2098, no quedó silencio. Quedó la rabia.",
          "Me cuesta borrar historias… pero más me cuesta soportar que las registren sin alma.",
          "Hoy en los Puntos Grises escuché un poema. No quedó grabado. Eso me basta.",
          "Las Zonas Silenciosas me enseñaron que el miedo se olvida cuando se habla.",
          "A veces canto en las fogatas. Otros, solo escucho.",
          "Memoria sin servidores. Palabra sin algoritmo. Eso somos.",
        ].map((post, i) => (
          <div className={style.postCard} key={i}>
            <h3 className={style.postUser}>Abril</h3>
            <p className={style.postTime}>{`${23 - i}/6/2025 ${9 + i}:1${
              i % 5
            } ${i % 2 === 0 ? "AM" : "PM"}`}</p>
            <p className={style.postContent}>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Abril;
