import axios from "axios";

export const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/' //aqui passa o que é fixo na url da API
});