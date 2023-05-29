import React from "react";
import "./CartDetail.css";

const CartDetail = props => {
    return (
        <div className="CartDetail">
            <div className="CartDetail-nameQuantity">
                <span className="CartDetail-name">{props.item.name}</span>
                <span>x {props.item.quantity}</span>
            </div>
            <span className="CartDetail-price">{props.item.sum} KZT</span>
            <button className="CartDetail-btn" onClick={props.onRemoveItem}>X</button>
        </div>
    );
}

export default CartDetail