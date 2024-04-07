import axios from "axios";

export const connection = axios.create({
    baseURL: "http://localhost:8000",
    responseType: "json",
});