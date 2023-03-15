import "./styles.css";
import pizzaImg from "../../assets/pizza.png";

export default function ProductCatalog() {
  return (
    <div className="ds-card ds-container">
      <div className="ds-card-title">
        <h5>Pizza Calabresa</h5>
      </div>
      <div className="ds-card-img">
        <img src={pizzaImg} alt="pizza" />
      </div>
      <div className="ds-card-price">
        <h4>R$ 35,90</h4>
      </div>
      <div className="ds-card-description">
        <p className="ds-title-bold">Descrição</p>
        <p>
          Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas
          frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa
          especial.
        </p>
      </div>
    </div>
  );
}
