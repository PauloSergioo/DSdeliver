import { ProductDTO } from "./models/product";

export function checkSelected(selectedProducts: ProductDTO[], product: ProductDTO) {
    return selectedProducts.some(item => item.id === product.id);
}