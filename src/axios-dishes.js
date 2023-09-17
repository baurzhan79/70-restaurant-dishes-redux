import axios from "axios";

const instance = axios.create({
    baseURL: "https://restaurant-dishes-672d6-default-rtdb.firebaseio.com"
});

export default instance;
