import axios from "../../axios-dishes";

import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from "../actionTypes";

export const fetchItemsRequest = () => (
    { type: FETCH_ITEMS_REQUEST }
);

export const fetchItemsSuccess = responseItems => (
    { type: FETCH_ITEMS_SUCCESS, responseItems }
);

export const fetchItemsError = (error) => (
    { type: FETCH_ITEMS_ERROR, error }
);


export const fetchItems = () => {
    return async dispatch => {
        dispatch(fetchItemsRequest());
        try {
            const response = await axios.get("/dishes.json");
            const items = [];
            if (response.status === 200) { // OK
                if (response.data !== null) {
                    const itemValues = Object.values(response.data);
                    itemValues.map(item => (
                        items.push({ name: item.name, price: item.price, imgSrc: item.imgSrc })
                    ))
                }
            }
            dispatch(fetchItemsSuccess(items));
        } catch (error) {
            dispatch(fetchItemsError(error));
        }
    }
};
