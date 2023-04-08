import "./styles.css";
import Header from "../../components/Header";
import ProductCatalog from "../../components/ProductCatalog";
import StepsHeader from "../../components/StepsHeader";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import { fetchProducts, saveOrder } from "../../utils/request";
import OrderLocation from "../../components/OrderLocation";
import OrderSummary from "../../components/OrderSummary";
import Footer from "../../components/Footer";
import { checkSelected } from "../../helpers";
import { toast } from "react-toastify";

export default function Order() {
  const orderLocation = {
    latitude: -16.175139,
    longitude: -50.656587,
    address: "Rua Benedito Da Silva, 11",
  };

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<ProductDTO[]>([]);

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectProduct = (product: ProductDTO) => {
    const isAlreadySelected = checkSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  };

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
                <ProductCatalog
                  key={product.id}
                  product={product}
                  onSelectProduct={handleSelectProduct}
                  isSelected={checkSelected(selectedProducts, product)}
                />
              ))}
            </div>
          </section>
          <section id="ds-location-section">
            <OrderLocation />
            <OrderSummary
              onSubmit={handleSubmit}
              amount={selectedProducts.length}
              totalPrice={totalPrice}
            />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
