import propTypes from "prop-types";

function ProductDetails({ ability, offPercent, original, discount }) {
    return (
        <div className="flex items-center gap-x-6 mt-4">
            <span className={`product__tip`}>{ability}</span>
            <div className="flex items-center">
                {offPercent && (
                    <span className="text-grey-dark-24 dark:text-grey-light-24 text-base tablet:text-xl/[32px] font-semibold line-through">
                        ${original}
                    </span>
                )}
                {offPercent ? (
                    <span className="ml-2 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-semibold">
                        ${discount}
                    </span>
                ) : (
                    <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-semibold">
                        ${original}
                    </span>
                )}
            </div>
        </div>
    );
}

ProductDetails.propTypes = {
    ability: propTypes.string,
    offPercent: propTypes.number,
    original: propTypes.number,
    discount: propTypes.number,
};

export default ProductDetails;
