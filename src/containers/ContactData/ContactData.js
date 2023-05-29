import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { createOrder } from "../../store/actions/ordersActions";

import "./ContactData.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";

const ContactData = () => {
    const dispatch = useDispatch();

    const { cartDetails, totalSum } = useSelector(state => state.cart, shallowEqual);
    const loading = useSelector(state => state.orders.loading);

    const [state, setState] = useState(
        {
            name: "",
            address: "",
            phone: ""
        }
    );

    const valueChanged = (event) => {
        const name = event.target.name;
        setState({ ...state, [name]: event.target.value });
    };

    const orderHandler = (event) => {
        event.preventDefault();

        const orders = cartDetails.map(cartDetail => {
            return { name: cartDetail.name, quantity: cartDetail.quantity }
        })

        const order = {
            orderDetails: orders,
            totalSum: totalSum,
            customer: {
                name: state.name,
                address: state.address,
                phone: state.phone
            }
        };

        dispatch(createOrder(order));
    };


    let form = (
        <form>
            <input value={state.name}
                onChange={valueChanged}
                className="Input" type="text" name="name" placeholder="Your name" />

            <input value={state.address}
                onChange={valueChanged}
                className="Input" type="text" name="address" placeholder="Your address" />

            <input value={state.phone}
                onChange={valueChanged}
                className="Input" type="phone" name="phone" placeholder="Your phone" />

            <Button clicked={orderHandler} btnType="Success">ORDER</Button>
        </form>
    );

    if (loading) {
        form = <Spinner />;
    }

    return (
        <div className="ContactData">
            <h4 className="ContactData-title">Enter your Contact Data</h4>
            {form}
        </div>
    );
}

export default ContactData;