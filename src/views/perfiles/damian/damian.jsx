import style from "./damian.module.css";
import Avatar from "../../../img/avatar.jpg";
import { Link } from "react-router-dom";

function Damian() {
  return (
    <div className={style.container}>
      <Link to="/" className={style.backLink}>
        Ir a la página →
      </Link>

      <div className={style.sidebar}>
        <div className={style.card}>
          <h2 className={style.username}>Damián López</h2>
          <div className={style.avatarWrapper}>
            <img src={Avatar} alt="avatar" className={style.avatar} />
          </div>
          <p className={style.history}>Country: Argentina</p>
          <p className={style.history}>Age: 47</p>
        </div>
      </div>

      <div className={style.feed}>
        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>23/6/2025 15:42 PM</p>
          <p className={style.postContent}>
            Volví de la Frontera de Datos. El caos que vi ahí demuestra por qué
            La Página debe ser inalterable.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>22/6/2025 09:15 AM</p>
          <p className={style.postContent}>
            En Núcleos Públicos no vivimos bajo sombras. Cada palabra deja su
            huella, como debe ser.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>21/6/2025 18:30 PM</p>
          <p className={style.postContent}>
            Hace 30 años, dejamos que se incendiara el Núcleo. Hoy no
            repetiremos ese error.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>20/6/2025 22:10 PM</p>
          <p className={style.postContent}>
            Mi hija me preguntó por Dora. Le expliqué que algunos romanticismos
            solo traen anarquía.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>18/6/2025 08:50 AM</p>
          <p className={style.postContent}>
            Me invitaron a un debate en el Muro de Bruselas. Si quieren defender
            el caos, que lo hagan allí, no aquí.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>16/6/2025 17:05 PM</p>
          <p className={style.postContent}>
            Sigo estudiando jurisprudencia sobre el derecho al olvido. Spoiler:
            es inviable.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>16/6/2025 22:20 PM</p>
          <p className={style.postContent}>
            Pronto publicaré un documento legal sobre los riesgos de ceder ante
            la nostalgia.
          </p>
        </div>

        <div className={style.postCard}>
          <h3 className={style.postUser}>Damián López</h3>
          <p className={style.postTime}>14/6/2025 11:45 AM</p>
          <p className={style.postContent}>
            La Página no es perfecta. Pero es el único muro entre nosotros y la
            barbarie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Damian;
