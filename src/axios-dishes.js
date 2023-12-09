import axios from "axios";

const instance = axios.create({
    baseURL: "https://restaurant-dishes-3c048-default-rtdb.firebaseio.com"
});

export default instance;
