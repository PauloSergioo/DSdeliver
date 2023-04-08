import "./styles.css";

export default function StepsHeader() {
  return (
    <header>
      <div className="ds-steps-container">
        <div className="ds-title-steps">
          <h1>
            SIGA AS <br /> ETAPAS
          </h1>
        </div>
        <div className="ds-description-steps">
          <p> <span className="ds-number-steps">1</span>  Selecione os produtos e localização.</p>
          <p> <span className="ds-number-steps">2</span> Depois clique em <span className="ds-bold-step">“ENVIAR PEDIDO”</span></p>
        </div>
      </div>
    </header>
  );
}
