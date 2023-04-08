import "./styles.css";

type Props = {
  amount: number;
  totalPrice: number;
  onSubmit: () => void;
}

export default function OrderSummary( {amount, totalPrice, onSubmit}: Props) {
  return (
    <div className="ds-summary ds-container">
      <div className="ds-total">
        <p> <span className="ds-bold">{amount}</span> PEDIDOS SELECIONADOS</p>
        <p> <span className="ds-bold">R$ {totalPrice.toFixed(2)}</span> VALOR TOTAL</p>
      </div>
      <div onClick={onSubmit} className="ds-make-order">FAZER PEDIDO</div>
    </div>
  );
}
