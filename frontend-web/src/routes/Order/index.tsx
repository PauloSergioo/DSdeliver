import "./styles.css";
import Header from "../../components/Header";
import ProductCatalog from "../../components/ProductCatalog";
import StepsHeader from "../../components/StepsHeader";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { fetchProducts } from "../../utils/request";
import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";

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
      <div className="ds-background-order">
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
          <OrderSummary />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </>
  );
}
