import { INIT_ORDER, ORDER_REQUEST, ORDER_SUCCESS, ORDER_FAILURE } from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    ordered: false
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ORDER:
            return initialState;

        case ORDER_REQUEST:
            return { ...state, loading: true };

        case ORDER_SUCCESS:
            return { ...state, loading: false, ordered: true };

        case ORDER_FAILURE:
            return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
};

export default ordersReducer;