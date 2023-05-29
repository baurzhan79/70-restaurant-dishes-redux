import React from "react";
import "./ItemsList.css";
import Item from "./Item/Item";

const ItemsList = props => {
    return (
        <div className="ItemsList">
            <p className="ItemsList-title">{props.title}</p>
            {
                props.itemsList.map((item, index) => {
                    return (<Item
                        key={index}
                        item={item}
                        onAddItem={() => props.onAddItem(item)}
                        iconCartSrc={props.iconCartSrc}
                    />);
                })
            }
        </div>
    );
}

export default ItemsList