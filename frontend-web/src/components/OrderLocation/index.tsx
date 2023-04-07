import "./styles.css";
import map from "../../assets/mapa.png";
import lupa from "../../assets/lupa.png";

const initialPosition = {
  lat: -23.8024205,
  lng: -45.3890129,
};

export default function OrderLocation() {
  return (
    <div className="ds-card-location ds-container">
      <h3>Selecione onde o pedido deve ser entregue: </h3>
      <div className="ds-map">
        <div className="ds-search-street">
          <div className="ds-search-placeholder">
            <p>Rua Abraão, 1314</p>
            <p>🔎</p>
          </div>
        </div>
        <img src={map} alt="Map" />
      </div>
    </div>
  );
}
