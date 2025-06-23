import style from "./constanza.module.css";
import Avatar from "../../../img/avatar.jpg";
import { Link } from "react-router-dom";

function Constanza() {
  return (
    <div className={style.container}>
      <Link to="/" className={style.backLink}>
        Ir a la página →
      </Link>

      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>Constanza</h2>
          <div className={style.avatarWrapper}>
            <img src={Avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>Country: Argentina</p>
          <p className={style.history}>Age: 35</p>
        </div>
      </div>

      <div className={style.feed}>
        {[
          "Hoy pasé por el Árbol de Posteo en Dakar. Hermoso símbolo… para los ingenuos.",
          "Mi mamá, Dora, me decía que hay verdades que no deben quedar registradas.",
          "Las cicatrices del 2098 siguen en los muros. Lo saben quienes las limpian en silencio.",
          "No todos podemos vivir en los Núcleos. Algunos preferimos migrar… o huir.",
          "Los Puntos Grises son zonas de respiro. También de conspiración. Lo que elijan creer.",
          "Estoy restaurando las Cartas de Dora. Algunas líneas me tiemblan las manos al leerlas.",
          "Migrar es más fácil que borrar. Por ahora.",
          "Sigo pensando en lo que arde… y lo que permanece invisible.",
        ].map((post, i) => (
          <div className={style.postCard} key={i}>
            <h3 className={style.postUser}>Constanza</h3>
            <p className={style.postTime}>{`${23 - i}/6/2025 ${8 + i}:0${
              i % 6
            } ${i % 2 === 0 ? "AM" : "PM"}`}</p>
            <p className={style.postContent}>{post}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Constanza;
