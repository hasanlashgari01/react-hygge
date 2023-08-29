import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";
import ProductDetails from "./ProductDetails";

function Product({ _id, offPercent, priceOriginal, priceDiscount, title, ability, productImage }) {
    return (
        <div className="bg-grey-1 dark:bg-grey-2 w-64 xmobile:w-48 mobile:w-56 tablet:w-52 laptop:w-[285px] mx-auto p-5 rounded-lg">
            {offPercent && (
                <span className="product__badge">
                    <span>{offPercent}%</span>{" "}
                    <span className="hidden tablet:inline-block">OFF</span>
                </span>
            )}
            <div className="h-36 xmobile:h-28 mobile:h-36 laptop:h-40 aspect-square mx-auto rounded-3xl mobile:rounded-[48px]">
                <img
                    src={`http://localhost:4000/api/products/cover/${productImage}`}
                    className="h-full mx-auto"
                    alt=""
                />
            </div>
            <div className="mt-8">
                <SmoothScrollLink
                    to={`http://localhost:5173/product/${_id}`}
                    className="product__title">
                    {title}
                </SmoothScrollLink>
                <ProductDetails
                    offPercent={offPercent}
                    priceOriginal={priceOriginal}
                    discount={priceDiscount}
                />
                <div className="flex items-center justify-between mt-4">
                    <button className="hidden laptop:inline-block py-2 px-3 bg-green-200 dark:bg-green-100/5 text-green-800 dark:text-green-400 font-semibold rounded-3xl">
                        Add to cart
                    </button>
                    <span className="inline-block laptop:hidden p-2.5 bg-green-200 dark:bg-green-100/5 text-green-800 dark:text-green-400 rounded-full desktop:cursor-pointer">
                        <svg className="w-4 h-4">
                            <use href="#cart"></use>
                        </svg>
                    </span>
                    <span className={`product__tip`}>{ability}</span>

                    {/* <div className="space-x-2.5">
                        <span className="inline-block p-2.5 bg-sky-100 dark:bg-sky-100/5 text-sky-800 dark:text-sky-400 rounded-full desktop:cursor-pointer">
                            <svg className="w-4 h-4">
                                <use href="#cart"></use>
                            </svg>
                        </span>
                        <span className="inline-block p-2.5 bg-red/10 text-red dark:text-red/500 rounded-full desktop:cursor-pointer">
                            <svg className="w-4 h-4">
                                <use href="#heart"></use>
                            </svg>
                        </span>
                        <span className="inline-block p-2.5 bg-orange-100 dark:bg-orange-100/5 text-orange-800 dark:text-orange-400 rounded-full desktop:cursor-pointer">
                            <svg className="w-4 h-4">
                                <use href="#bookmark"></use>
                            </svg>
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: propTypes.object,
};

export default Product;
