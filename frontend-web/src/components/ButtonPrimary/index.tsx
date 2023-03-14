import "./styles.css";
import { Link } from "react-router-dom";

export default function ButtonPrimary() {
  return (
    <div className="ds-button">
      <Link to={"/orders"}>Fazer Pedido</Link>
    </div>
  );
}
