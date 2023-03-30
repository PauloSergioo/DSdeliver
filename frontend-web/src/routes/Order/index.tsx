import "./styles.css";
import Header from "../../components/Header";
import ProductCatalog from "../../components/ProductCatalog";
import StepsHeader from "../../components/StepsHeader";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { fetchProducts } from "../../utils/request";
import OrderLocation from "../../components/OrderLocation";

export default function Order() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
        <Header />
        <StepsHeader />
      </header>
      <main className="ds-background-main">
        <section id="ds-catalog-section">
          <div className="dsc-catalog-cards ds-container">
            {products.map((product) => (
              <ProductCatalog key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section id="ds-location-section">
          <OrderLocation />
        </section>
      </main>
    </>
  );
}
