import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import Product from "./Product";
import SubTitle from "./SubTitle";
import Title from "./Title";
import SmoothScrollLink from "../SmoothScrollLink";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(result => setProducts(result.products.slice(0, 8)));
    }, []);

    return (
        <div className="space-container">
            <div>
                <SubTitle subtitle="- Our Products" />
                <Title title="Explore our Products" />
            </div>
            <div className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-12 laptop:gap-x-14 desktop:gap-x-12 gap-y-16 mt-14">
                {products ? products.map(product => <Product key={product._id} product={product} />) : <ErrorMessage title="There is no products" />}
            </div>
            {products && products.length > 0 && (
                <SmoothScrollLink
                    to="#"
                    className="block mx-auto w-fit bg-green-100 hover:bg-green-100/10 text-grey-light-100 hover:text-green-100 mt-14 tablet:mt-16 desktop:mt-[72px] px-6 py-3 tablet:px-10 tablet:py-4 text-base tablet:text-xl/[32px] font-bold rounded-3xl transition-colors duration-300">
                    View All
                </SmoothScrollLink>
            )}
        </div>
    );
}

export default Products;
