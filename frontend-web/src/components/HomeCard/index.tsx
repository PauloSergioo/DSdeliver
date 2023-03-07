import "./styles.css";
import homeImg from "../../assets/home.svg";
import ButtonPrimary from "../ButtonPrimary";

export default function HomeCard() {
  return (
    <main>
      <div className="ds-container-card">
        <div className="ds-description-card">
          <h1>
            Faça seu pedido
            <br /> que entregamos
            <br /> pra você!!!
          </h1>
          <p>
            Escolha o seu pedido e em poucos minutos
            <br /> levaremos na sua porta
          </p>
          <ButtonPrimary />
        </div>
        <div className="ds-card-home">
          <img src={homeImg} alt="HomeCard" />
        </div>
      </div>
    </main>
  );
}
