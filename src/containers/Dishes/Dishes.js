import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../store/actions/dishesActions";

import Spinner from "../../components/UI/Spinner/Spinner";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes);
    const loading = useSelector(state => state.loading);
    const errorMsg = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        console.log("dishes: ", dishes);
    }, [dishes]);

    useEffect(() => {
        if (errorMsg !== null) console.log("Error with request: ", errorMsg);
    }, [errorMsg]);

    if (loading) return (<Spinner />);
    else
        return (
            <>
            </>
        )
}

export default Dishes