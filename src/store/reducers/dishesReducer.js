import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from "../actionTypes";

const initialState = {
    loading: false,
    error: null,
    dishes: []
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return { ...state, loading: true }

        case FETCH_ITEMS_SUCCESS:
            return { ...state, dishes: action.responseItems, loading: false }

        case FETCH_ITEMS_ERROR:
            return { ...state, loading: false, error: action.error }

        default:
            return state;
    }
};

export default dishesReducer;