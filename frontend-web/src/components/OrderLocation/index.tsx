import "./styles.css";
import map from "../../assets/mapa.png";

const initialPosition = {
  lat: -23.8024205,
  lng: -45.3890129,
};

export default function OrderLocation() {
  return (
    <div className="ds-card-location ds-container">
      <h3>Selecione onde o pedido deve ser entregue:</h3>
      <div className="dsc-map">
         <img src={map} alt="Mapa" />
      </div>
    </div>
  );
}




