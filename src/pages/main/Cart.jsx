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
        <div>
            <Header />
            <div className="space-container">
                <div className="mb-14">
                    <SubTitle subtitle="- Your Cart" />
                    <div className="flex justify-between">
                        <Title title="Shopping Cart" />
                        <span>Clear All</span>
                    </div>
                </div>

                <div className="flex flex-col bigDesktop:flex-row gap-12 mb-24 laptop:mb-28 bigDesktop:mb-36">
                    <div className="flex bigDesktop:flex-1 flex-col gap-y-10 tablet:gap-y-12">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="flex flex-col tablet:flex-row gap-x-14 w-full mobile:w-[311px] tablet:w-full p-6 tablet:p-14 mx-auto border-2 border-grey-1 dark:border-grey-2 rounded-[32px] tablet:rounded-[48px]">
                                <div className="bg-grey-1 dark:bg-grey-2 w-24 h-24 tablet:w-[196px] tablet:h-[196px] laptop:w-[196px] laptop:h-[196px] mx-auto mb-6 tablet:m-0 py-4 tablet:py-8 rounded-2xl">
                                    <img src="/public/images/products/Product 1.png" className="h-full mx-auto" alt="" />
                                </div>

                                <div className="flex flex-col items-center tablet:items-start tablet:flex-1">
                                    <h3 className="mb-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/8 tablet:text-[32px]/[48px] font-semibold text-center">
                                        Sleepless Night 10 g
                                    </h3>
                                    <h5 className="mb-10 tablet:mb-6 text-grey-dark-100 dark:text-grey-light-100 tablet:text-2xl/10 font-semibold">
                                        $97
                                    </h5>

                                    <div className="flex w-full justify-center items-center laptop:justify-between gap-6">
                                        <div className="flex justify-between items-center w-[136px] h-12 tablet:w-[176px] tablet:h-16 py-4 px-2 tablet:p-4 border-2 border-grey-1 dark:border-grey-2 rounded-full select-none">
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
                                            <span className="inline-flex p-3 tablet:p-4 border-2 border-grey-1 dark:border-grey-2 rounded-full cursor-pointer">
                                                <svg className="w-6 h-6 text-black dark:text-white">
                                                    <use href="#close"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 tablet:p-14 w-full bigDesktop:w-[416px] border-2 border-grey-1 dark:border-grey-2 rounded-[32px] tablet:rounded-[48px]">
                        <h1 className="text-grey-dark-100 dark:text-grey-light-100 text-xl/8 tablet:text-[32px]/[48px] font-semibold">
                            Cart Total
                        </h1>

                        <div className="grid grid-cols-1 laptop:grid-cols-2 bigDesktop:grid-cols-1 gap-10 tablet:gap-12 laptop:gap-y-12 laptop:gap-x-24 mt-10 tablet:mt-12 mb-14 tablet:mb-20">
                            <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                                <span className="text-2xl/10 font-normal">Subtotal:</span>
                                <span className="text-2xl/10 font-normal">$209</span>
                            </div>
                            <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                                <span className="text-2xl/10 font-normal">Tax:</span>
                                <span className="text-2xl/10 font-normal">$20.73</span>
                            </div>
                            <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                                <span className="text-2xl/10 font-normal">Shipping:</span>
                                <span className="text-2xl/10 font-normal">$15</span>
                            </div>
                            <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                                <span className="text-2xl/10 font-semibold">Total:</span>
                                <span className="text-2xl/10 font-semibold">$224</span>
                            </div>
                        </div>

                        <button className="w-full laptop:w-fit py-3 tablet:py-4 px-10 bg-green-100 text-grey-light-100 text-base tablet:text-xl/8 tracking-wide font-bold rounded-full">
                            Checkout
                        </button>
                    </div>
                </div>

                <NewsLetter />
            </div>
            <Footer />
        </div>
    );
}

export default Cart;