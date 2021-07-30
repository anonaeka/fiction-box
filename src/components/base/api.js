import axios from "axios";

export const Client = axios.create({
    baseURL: "https://safe-inlet-46917.herokuapp.com/api/v1/user"
    // baseURL: "http://localhost:4000/api/v1/user"
});

export default Client