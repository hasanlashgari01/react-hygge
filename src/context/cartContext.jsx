import { createContext } from "react";

const dataContext = {
    cart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    removeAllProductsFromCart: () => {},
    increaseProduct: () => {},
    decreaseProduct: () => {},
};

const CartContext = createContext(dataContext);

export default CartContext;
