import React from "react";
import "./OrderSummary.css";

const OrderSummary = props => {
    return (
        <div className="OrderSummary">
            <h3>Your order</h3>
            <ul>
                {
                    props.orderItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>
                                    {item.name} - {item.quantity}, {item.sum} KZT
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
            <p><strong>Delivery: {props.deliveryAmount} KZT</strong></p>
            <p><strong>Total amount: {props.totalSum} KZT</strong></p>
        </div>
    )
};

export default OrderSummary;