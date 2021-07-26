import axios from "axios";

export const Client = axios.create({
    baseURL: "http://localhost:4000/api/v1/user"
});

export default Client