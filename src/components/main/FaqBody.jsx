import { useEffect, useRef, useState } from "react";

function FaqBody({ title, question, answer }) {
    const [isAccordion, setIsAccordion] = useState(false);

    const accordionBodyRef = useRef();
    const accordionHandler = () => {
        setIsAccordion(false);
        setIsAccordion(!isAccordion);
    };

    return (
        <div className="mb-14">
            <div
                className="flex justify-between items-start h-fit tablet:h-12 gap-x-6 cursor-pointer select-none"
                onClick={accordionHandler}>
                <p className="font-semibold w-fit text-grey-dark-100 max-w-[180px] tablet:max-w-[600px] desktop:max-w-[765px] bigDesktop:max-w-[480px] dark:text-grey-light-100 text-base tablet:text-xl tablet:leading-8">
                    1. How do I place an order on your website?
                </p>
                <span className="flex justify-center items-center w-8 h-8 tablet:w-12 tablet:h-12 border-2 rounded-full">
                    <svg className={`w-4 h-4 text-black dark:text-white transition-transform duration-500 ${isAccordion && "rotate-180"}`}>
                        <use href="#arrow-down"></use>
                    </svg>
                </span>
            </div>
            <div className={`max-w-[180px] tablet:max-w-[600px] desktop:max-w-[808px] bigDesktop:max-w-[480px] transition-all duration-500" ${isAccordion ? "h-[100px] px-5 mt-4" : "h-0 overflow-hidden"}`}>
                <p className="text-grey-dark-100 dark:text-grey-light-100 font-normal text-base tablet:leading-8" ref={accordionBodyRef}>
                    All you need to do to place an order on our wesbite is to choose the product that you would like to buy, then add it to
                    cart and pay for it using any of the supported payment methods.{" "}
                </p>
            </div>
        </div>
    );
}

export default FaqBody;
