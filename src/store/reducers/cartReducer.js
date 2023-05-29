import { INIT_CART, UPDATE_CART, SET_TOTAL_SUM } from "../actionTypes";

const initialState = {
    cartDetails: [],
    totalSum: 0,
    deliveryAmount: 500
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_CART:
            return initialState;

        case UPDATE_CART:
            return { ...state, cartDetails: action.updatedItems }

        case SET_TOTAL_SUM:
            return { ...state, totalSum: action.value }

        default:
            return state;
    }
};

export default cartReducer;