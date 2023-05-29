import { INIT_CART, UPDATE_CART, SET_TOTAL_SUM } from "../actionTypes";

export const initCart = () => {
    return { type: INIT_CART };
};

export const addItem = (itemToAdd, items) => {
    const filteredArray = items.filter(item => {
        return item["name"] === itemToAdd.name;
    });

    const itemsCopy = [...items];

    if (filteredArray.length === 0) {
        const DateInMilliseconds = new Date().getTime();
        const newItem = {
            id: DateInMilliseconds,
            name: itemToAdd.name,
            price: itemToAdd.price,
            sum: itemToAdd.price,
            quantity: 1
        }
        itemsCopy.push(newItem);
    }
    else {
        for (let i = 0; i < itemsCopy.length; i++) {
            if (itemsCopy[i].name === itemToAdd.name) {
                const itemsCopyObj = { ...itemsCopy[i] };
                itemsCopyObj.quantity++;
                itemsCopyObj.sum = itemsCopyObj.sum + itemsCopyObj.price;
                itemsCopy[i] = itemsCopyObj;
            }
        }
    }

    return { type: UPDATE_CART, updatedItems: itemsCopy };
}

export const removeItem = (id, items) => {
    const index = items.findIndex(p => p.id === id);

    const itemsCopy = [...items];
    const itemsCopyObj = { ...itemsCopy[index] };

    if (itemsCopyObj.quantity > 1) {
        itemsCopyObj.quantity--;
        itemsCopyObj.sum = itemsCopyObj.sum - itemsCopyObj.price;
        itemsCopy[index] = itemsCopyObj;
    }
    else {
        itemsCopy.splice(index, 1);
    }

    return { type: UPDATE_CART, updatedItems: itemsCopy };
}

export const setTotalSum = (totalSum) => {
    return { type: SET_TOTAL_SUM, value: totalSum };
}
