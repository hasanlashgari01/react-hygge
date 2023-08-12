import { createContext } from "react";

// const initialState = {
//     selectedItems: [],
//     itemsCounter: 0,
//     total: 0,
//     checkout: false,
// };

const dataContext = {
    initialState: {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
    },
    cartReducer: () => {},
};

const CartContext = createContext(dataContext);

export default CartContext;
