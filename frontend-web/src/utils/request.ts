import axios from "axios";
import { BASE_URL } from "./system";

const URL = 'http://localhost:8080';

export function fetchProducts() {
    return axios(`${BASE_URL}/products`)
}
