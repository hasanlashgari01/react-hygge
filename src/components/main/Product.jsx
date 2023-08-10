import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";
import ProductDetails from "./ProductDetails";

function Product({ product }) {
    return (
        <div className="relative mobile:flex laptop:block flex-col w-[250px] tablet:w-[320px] laptop:w-[272px] desktop:w-[272px] mx-auto">
            {product.offPercent && (
                <span className="product__badge">
                    <span>{product.offPercent}%</span>{" "}
                    <span className="hidden tablet:inline-block">OFF</span>
                </span>
            )}
            <div className="bg-grey-1 dark:bg-grey-2 w-full h-[250px] mobile:h-[250px] tablet:h-[320px] laptop:h-[272px] desktop:h-[272px] mx-auto py-[51px] rounded-[48px]">
                <img
                    src={`/public/images/products/Product 1.png`}
                    className="h-full mx-auto"
                    alt=""
                />
            </div>
            <div className="mt-8">
                <SmoothScrollLink
                    to={`http://localhost:5173/product/${product._id}`}
                    className="product__title">
                    {product.title}
                </SmoothScrollLink>
                <ProductDetails
                    ability={product.ability}
                    offPercent={product.offPercent}
                    original={product.priceOriginal}
                    discount={product.priceDiscount}
                />
                <div>
                    <button className="p-3 dark:text-white">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: propTypes.object,
};

export default Product;
