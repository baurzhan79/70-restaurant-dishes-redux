import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../store/actions/dishesActions";

import "./Dishes.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import ItemsList from "../../components/ItemsList/ItemsList";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes);
    const loading = useSelector(state => state.loading);
    const errorMsg = useSelector(state => state.error);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        if (errorMsg !== null) console.log("Error with request: ", errorMsg);
    }, [errorMsg]);

    const addItemHandler = (item) => {
        console.log("[addItemHandler]", item);
    }

    if (loading) return (<Spinner />);
    else
        return (
            <>
                <div className="Dishes">
                    <ItemsList
                        title={"Dishes"}
                        iconCartSrc={"./icon-cart.png"}
                        itemsList={dishes}
                        onAddItem={(item) => addItemHandler(item)}
                    />
                </div>
            </>
        )
}

export default Dishes