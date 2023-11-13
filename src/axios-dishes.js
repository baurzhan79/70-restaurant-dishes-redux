import axios from "axios";

const instance = axios.create({
    baseURL: "https://restaurant-dishes-d51eb-default-rtdb.firebaseio.com"
});

export default instance;
