import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { fetchItems } from "../../store/actions/dishesActions";
import { addItem, setTotalSum, removeItem } from "../../store/actions/cartActions";

import "./Dishes.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

import ItemsList from "../../components/ItemsList/ItemsList";
import CartDetails from "../../components/CartDetails/CartDetails";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const Dishes = () => {
    const dispatch = useDispatch();

    const { dishes, loading } = useSelector(state => state.dishes, shallowEqual);
    const errorMsg = useSelector(state => state.dishes.error);

    const { cartDetails, totalSum, deliveryAmount } = useSelector(state => state.cart, shallowEqual);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    useEffect(() => {
        if (errorMsg !== null) console.log("Error with request: ", errorMsg);
    }, [errorMsg]);

    const addItemHandler = (item) => {
        dispatch(addItem(item, cartDetails));
    }

    const removeItemHandler = (id) => {
        dispatch(removeItem(id, cartDetails));
    }

    useEffect(() => {
        let total = cartDetails.reduce((sum, currentItem) => {
            return sum + currentItem.sum;
        }, 0);
        total += deliveryAmount;

        dispatch(setTotalSum(total));
    }, [dispatch, cartDetails, deliveryAmount])


    // =========================================================
    const [modalIsDisplayed, setModalIsDisplayed] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const modalContent = (
        <>
            <OrderSummary
                orderItems={cartDetails}
                totalSum={totalSum}
                deliveryAmount={deliveryAmount}
            />
            Contact data will be here
        </>
    );

    const showModal = () => {
        setModalIsDisplayed(true);
        setModalTitle("Order details");
    }

    const closeModal = () => {
        setModalIsDisplayed(false);
    }

    const placeOrderHandler = () => {
        if (!modalIsDisplayed) showModal();
    }

    // =========================================================
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
                    <CartDetails
                        cartDetails={cartDetails}
                        totalSum={totalSum}
                        totalSumTitle={"Итого"}
                        deliveryAmount={deliveryAmount}
                        deliveryAmountTitle={"Доставка"}
                        onRemoveItem={(id) => removeItemHandler(id)}
                        onPlaceOrderClick={placeOrderHandler}
                    />
                </div>
                <Modal
                    show={modalIsDisplayed}
                    closed={closeModal}
                    title={modalTitle}
                >
                    {modalContent}
                </Modal>
            </>
        )
}

export default Dishes