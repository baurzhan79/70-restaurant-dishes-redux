import { INIT_ORDER, ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE } from "../actionTypes";
import axiosOrders from "../../axios-dishes";

export const orderRequest = () => {
    return { type: ORDER_REQUEST };
};

export const orderSuccess = () => {
    return { type: ORDER_SUCCESS };
};

export const orderFailure = error => {
    return { type: ORDER_FAILURE, error };
};


export const initOrder = () => {
    return { type: INIT_ORDER };
};

export const createOrder = order => {
    return async dispatch => {
        try {
            dispatch(orderRequest());
            await axiosOrders.post("/orders.json", order);
            dispatch(orderSuccess());
        } catch (error) {
            dispatch(orderFailure(error));
        }
    }
};
