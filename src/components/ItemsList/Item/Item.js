import React from "react";
import "./Item.css";
import StyledButton from "./ItemStyledButton";

const Item = props => {
    return (
        <div className="Item">
            <div className="Item-box">
                <div className="Item-imgBox">
                    <img className="Item-img"
                        src={props.item.imgSrc}
                        alt={props.item.name}
                    />
                </div>
                <div className="Item-description">
                    <p>{props.item.name}</p>
                    <span>{props.item.price} KZT</span>
                </div>
            </div>
            <div className="Item-btnBox">
                <StyledButton className="Item-btn" iconBefore={props.iconCartSrc} onClick={props.onAddItem} >
                    <span className="Item-btnText">Add to cart</span>
                </StyledButton>
            </div>
        </div>
    );
};

export default Item;