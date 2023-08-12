import propTypes from "prop-types";

function ProductDetails({ offPercent, priceOriginal, discount }) {
    return (
        <div className="flex items-center gap-x-6">
            <div className="flex items-center">
                {offPercent && (
                    <span className="text-grey-dark-24 dark:text-grey-light-24 text-base mobile:text-lg tablet:text-xl/8 laptop:text-2xl/9 font-medium line-through">
                        ${priceOriginal}
                    </span>
                )}
                {offPercent ? (
                    <span className="ml-2 text-grey-dark-100 dark:text-grey-light-100 text-base mobile:text-lg tablet:text-xl/8 laptop:text-2xl/9 font-semibold">
                        ${discount}
                    </span>
                ) : (
                    <span className="text-grey-dark-100 dark:text-grey-light-100 text-base mobile:text-lg tablet:text-xl/8 laptop:text-2xl/9 font-semibold">
                        ${priceOriginal}
                    </span>
                )}
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    ability: propTypes.string,
    offPercent: propTypes.number,
    priceOriginal: propTypes.number,
    discount: propTypes.number,
};

export default ProductDetails;
