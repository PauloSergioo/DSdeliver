import "./styles.css";
import Header from "../../components/Header";
import ProductCatalog from "../../components/ProductCatalog";
import StepsHeader from "../../components/StepsHeader";
import { useEffect } from "react";

export default function Order() {

    useEffect(() => {
        console.log("inicou")
    }, []);

  return (
    <>
      <header>
        <Header />
        <StepsHeader />
      </header>
      <main>
        <section id="ds-catalog-section">
          <div className="dsc-catalog-cards ds-container">
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
            <ProductCatalog />
          </div>
        </section>
      </main>
    </>
  );
}
