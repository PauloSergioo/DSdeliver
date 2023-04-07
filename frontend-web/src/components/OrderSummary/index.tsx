import "./styles.css";

export default function OrderSummary() {
  return (
    <div className="ds-summary ds-container">
      <div className="ds-total">
        <p> <span className="ds-bold">2</span> PEDIDOS SELECIONADOS</p>
        <p> <span className="ds-bold">R$ 71,80</span> VALOR TOTAL</p>
      </div>
      <div className="ds-make-order">FAZER PEDIDO</div>
    </div>
  );
}
