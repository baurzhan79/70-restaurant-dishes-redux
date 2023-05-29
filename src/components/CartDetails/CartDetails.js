import React from "react";
import "./CartDetails.css";
import CartDetail from "./CartDetail/CartDetail";

const CartDetails = props => {
    if (props.cartDetails.length === 0)
        return (
            <div className="CartDetails-box">
                <p className="CartDetails-title">Cart</p>
                <div className="CartDetails-textBox">
                    <p>Cart is empty!</p>
                    <p>Please add some items!</p>
                </div>
            </div>
        );
    else
        return (
            <div className="CartDetails">
                <p className="CartDetails-title">Cart</p>
                <div>
                    {
                        props.cartDetails.map((item, index) => {
                            return (
                                <CartDetail
                                    key={item.id}
                                    item={item}
                                    onRemoveItem={() => props.onRemoveItem(item.id)}
                                />);
                        })
                    }
                </div>
                <hr className="CartDetails-hr" />
                <div>
                    <p className="CartDetails-title">{props.deliveryAmountTitle}: {props.deliveryAmount} KZT</p>
                    <p className="CartDetails-title">{props.totalSumTitle}: {props.totalSum} KZT</p>
                </div>
                <div className="CartDetails-btnBox">
                    <button className="CartDetails-btn" onClick={props.onPlaceOrderClick}>
                        <span className="CartDetails-btnText">Place order</span>
                    </button>
                </div>
            </div>
        );
}

export default CartDetails