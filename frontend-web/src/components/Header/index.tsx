import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
      <div className="ds-header">
        <div className="ds-title">
          <img src={logoImg} alt="logo" />
          <Link to="/">
            <h3>DS Delivery</h3>
          </Link>
        </div>
      </div>
  );
}
