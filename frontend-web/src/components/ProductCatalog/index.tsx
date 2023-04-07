import "./styles.css";
import { ProductDTO } from "../../models/product";

type Props = {
  product: ProductDTO;
};

export default function ProductCatalog({ product }: Props) {
  return (
      <div className="ds-card ds-container">
        <div className="ds-card-title">
          <h5>{product.name}</h5>
        </div>
        <div className="ds-card-img">
          <img src={product.imageUri} alt={product.name} />
        </div>
        <div className="ds-card-price">
          <h4>R$ {product.price.toFixed(2).replace(".", ",")}</h4>
        </div>
        <div className="ds-card-description">
          <p className="ds-title-bold">Descrição</p>
          <p>{product.description}</p>
        </div>
      </div>
  );
}
