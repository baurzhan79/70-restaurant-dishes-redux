import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restaurant-dishes-c18df-default-rtdb.firebaseio.com/'
});

export default instance;
