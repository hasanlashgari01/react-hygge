import { useState } from "react";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import NewsLetter from "../../components/main/NewsLetter";
import Header from "../../layouts/main/Header";
import Footer from "../../layouts/main/Footer";

function Cart() {
    const [products, setProducts] = useState([1, 2]);
    const [productCount, setProductCount] = useState(1);

    const decreaseCount = () => {
        productCount > 0 && setProductCount(prevState => prevState - 1);
    };

    const increaseCount = () => {
        setProductCount(prevState => prevState + 1);
    };

    return (
        <>
            <div className="flex flex-col desktop:flex-row gap-[18px] mb-24 laptop:mb-28 bigDesktop:mb-36">
                <div className="flex bigDesktop:flex-1 flex-col gap-y-6 tablet:gap-y-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col mobile:flex-row gap-x-7 w-full p-3 mobile:p-6 laptop:mx-auto border border-[#cbcbcb] dark:border-grey-2 rounded-xl mobile:rounded-2xl">
                            <div className="bg-grey-1 dark:bg-grey-2 w-[106px] h-[106px] mx-auto mb-4 tablet:m-0 py-2 tablet:py-4 rounded-2xl">
                                <img
                                    src="/public/images/products/Product 1.png"
                                    className="h-full mx-auto"
                                    alt=""
                                />
                            </div>

                            <div className="flex flex-col justify-between items-center mobile:items-start py-0.5 mobile:flex-1">
                                <div className="flex flex-col mobile:flex-row justify-center mobile:justify-between items-center mobile:items-start w-full mb-4 mobile:mb-0">
                                    <h3 className="w-80 text-grey-dark-100 dark:text-grey-light-100 text-lg/8 desktop:text-lg/6 font-semibold text-center tablet:text-left text-ellipsis">
                                        Sleepless Night 10 g
                                    </h3>
                                    <h5 className="mt-4 mobile:mt-0 text-grey-dark-100 dark:text-grey-light-100 text-lg/8 desktop:text-lg/6 font-semibold">
                                        $97
                                    </h5>
                                </div>

                                <div className="flex mobile:flex-1 w-full justify-center items-center mobile:justify-start gap-6">
                                    <div className="flex justify-between items-center w-[136px] h-12 desktop:w-[176px] tablet:h-[50px] py-4 px-2 desktop:p-4 border border-[#cbcbcb] dark:border-grey-2 rounded-full select-none">
                                        <span
                                            className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                            onClick={decreaseCount}>
                                            <svg className="w-4 h-4 text-black dark:text-white">
                                                <use href="#arrow-left"></use>
                                            </svg>
                                        </span>
                                        <span className="inline-block text-grey-dark-100 dark:text-grey-light-100 font-bold text-xl tablet:text-2xl leading-8">
                                            {productCount}
                                        </span>
                                        <span
                                            className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                            onClick={increaseCount}>
                                            <svg className="w-4 h-4 text-black dark:text-white">
                                                <use href="#arrow-right"></use>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <span className="inline-flex p-3 tablet:p-4 border border-[#cbcbcb] dark:border-grey-2 rounded-full cursor-pointer">
                                            <svg className="w-4 h-4 text-black dark:text-white">
                                                <use href="#close"></use>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-3 tablet:p-6 w-full bigDesktop:w-[325px] h-fit border border-[#cbcbcb] dark:border-grey-2 rounded-xl tablet:rounded-2xl">
                    <h1 className="text-grey-dark-100 dark:text-grey-light-100 text-xl/8  tablet:text-2xl/[48px] font-semibold">
                        Cart Total
                    </h1>

                    <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-1 gap-5 tablet:gap-3 laptop:gap-y-6 laptop:gap-x-24 mt-5 tablet:mt-6 mb-7 tablet:mb-10">
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10 font-normal">Subtotal:</span>
                            <span className="text-xl/10 font-normal">$209</span>
                        </div>
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10 font-normal">Tax:</span>
                            <span className="text-xl/10 font-normal">$20.73</span>
                        </div>
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10 font-normal">Shipping:</span>
                            <span className="text-xl/10 font-normal">$15</span>
                        </div>
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10 font-semibold">Total:</span>
                            <span className="text-xl/10 font-semibold">$224</span>
                        </div>
                    </div>

                    <button className="w-fit py-3 px-6 desktop:px-10 bg-green-100 text-grey-light-100 text-base tablet:text-lg/8 tracking-wide font-bold rounded-full">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;
