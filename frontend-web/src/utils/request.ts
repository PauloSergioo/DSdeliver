import axios from "axios";
import { BASE_URL } from "./system";
import { OrderPayload } from "../models/product";

const URL = 'http://localhost:8080';

export function fetchProducts() {
    return axios(`${BASE_URL}/products`)
}

export function saveOrder(payload: OrderPayload) {
    return axios.post(`${BASE_URL}/orders`, payload)
}
