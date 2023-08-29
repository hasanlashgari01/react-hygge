import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

function ProductContext({ children }) {
    const [products, setProducts] = useState([]);

    // fetch products from the API and set the state without render the component
    useEffect(() => {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(result => {
                setProducts(result);
            });
    }, []);

    return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>;
}

export default ProductContext;
