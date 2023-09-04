import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import ErrorMessage from "../../components/ErrorMessage";
import Swal from "sweetalert2";
import { DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "../../context/CartContext/cartActions";

function Cart() {
    const { state, dispatch } = useContext(CartContext);

    const qtyRef = useRef();
    const totalPriceRef = useRef();

    useEffect(() => {
        changeBgColor(qtyRef);
        changeBgColor(totalPriceRef);
    }, [state.cart]);

    const changeBgColor = elem => {
        elem.current.classList.add(`bg-blue-200`);
        elem.current.classList.add(`animate-pulse`);
        setTimeout(() => {
            elem.current.classList.remove(`bg-blue-200`);
            elem.current.classList.remove(`animate-pulse`);
        }, 2500);
    };

    const totalQty = state.cart.reduce((acc, product) => {
        return acc + product.qty;
    }, 0);

    const total = state.cart.reduce((acc, product) => {
        return acc + product.priceOriginal * product.qty;
    }, 0);

    const checkoutHandler = () => {
        totalQty == 0
            ? Swal.fire("Your cart is empty", "", "warning")
            : Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, Checkout!",
              }).then(result => {
                  if (result.isConfirmed) {
                      Swal.fire("Checkout!", "Your order has been placed.", "success");
                      dispatch({ type: "CLEAR_CART" });
                  }
              });
    };

    const clearCartHandler = () => {
        totalQty == 0
            ? Swal.fire("Your cart is empty", "", "warning")
            : Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, Clear it!",
              }).then(result => {
                  if (result.isConfirmed) {
                      Swal.fire("Cleared!", "Your cart has been cleared.", "success");
                      dispatch({ type: "CLEAR_CART" });
                  }
              });
    };

    return (
        <>
            <div className="flex flex-col desktop:flex-row gap-[18px] mb-24 laptop:mb-28 bigDesktop:mb-36">
                <div className="flex w-full bigDesktop:flex-1 flex-col gap-y-6 tablet:gap-y-8">
                    {totalQty > 0 &&
                        state.cart.map((product, index) => (
                            <div
                                key={index}
                                className="flex flex-col mobile:flex-row gap-x-7 w-full p-3 mobile:p-6 laptop:mx-auto border border-[#cbcbcb] dark:border-grey-2 rounded-xl mobile:rounded-2xl">
                                <div className="bg-grey-1 dark:bg-grey-2 w-[106px] h-[106px] mx-auto mb-4 tablet:m-0 py-2 tablet:py-4 rounded-2xl">
                                    <img
                                        src={`http://localhost:4000/api/products/cover/${product.productImage}`}
                                        className="h-full mx-auto"
                                        alt=""
                                    />
                                </div>

                                <div className="flex flex-col justify-between items-center mobile:items-start py-0.5 mobile:flex-1">
                                    <div className="flex flex-col mobile:flex-row justify-center mobile:justify-between items-center mobile:items-start w-full mb-4 mobile:mb-0">
                                        <h3 className="w-80 text-grey-dark-100 dark:text-grey-light-100 text-lg/8 desktop:text-lg/6 font-semibold text-center tablet:text-left text-ellipsis">
                                            {product.title}
                                        </h3>
                                        <h5 className="mt-4 mobile:mt-0 text-grey-dark-100 dark:text-grey-light-100 text-lg/8 desktop:text-lg/6 font-semibold">
                                            ${product.priceOriginal}
                                        </h5>
                                    </div>

                                    <div className="flex mobile:flex-1 w-full justify-center items-center mobile:justify-start gap-6">
                                        <div className="flex justify-between items-center w-[136px] h-12 desktop:w-[176px] tablet:h-[50px] py-4 px-2 desktop:p-4 border border-[#cbcbcb] dark:border-grey-2 rounded-full select-none">
                                            <span
                                                className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                                onClick={() => {
                                                    product.qty > 1
                                                        ? dispatch({ type: DECREASE_QUANTITY, payload: product })
                                                        : dispatch({ type: REMOVE_FROM_CART, payload: product });
                                                }}>
                                                <svg className="w-4 h-4 text-black dark:text-white">
                                                    <use href={`#${product.qty > 1 ? "arrow-left" : "trash"}`}></use>
                                                </svg>
                                            </span>
                                            <span className="inline-block text-grey-dark-100 dark:text-grey-light-100 font-bold text-xl tablet:text-2xl leading-8">
                                                {product.qty}
                                            </span>
                                            <span
                                                className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                                onClick={() => dispatch({ type: INCREASE_QUANTITY, payload: product })}>
                                                <svg className="w-4 h-4 text-black dark:text-white">
                                                    <use href="#arrow-right"></use>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <span
                                                className="inline-flex p-3 tablet:p-4 border border-[#cbcbcb] dark:border-grey-2 rounded-full cursor-pointer"
                                                onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: product })}>
                                                <svg className="w-4 h-4 text-black dark:text-white">
                                                    <use href="#close"></use>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {totalQty == 0 && <ErrorMessage title="Your cart is empty" />}
                </div>

                <div className="p-8 tablet:p-6 w-full bigDesktop:w-[325px] h-fit border border-[#cbcbcb] dark:border-grey-2 rounded-xl tablet:rounded-2xl">
                    <h1 className="text-grey-dark-100 dark:text-grey-light-100 text-2xl/8 font-bold">Cart Total</h1>

                    <div className="flex flex-col gap-5 tablet:gap-32 laptop:gap-y-6 laptop:gap-x-24 mt-5 tablet:mt-6 mb-7 tablet:mb-10">
                        {/* 
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
                        */}
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10">Quantity:</span>
                            <span
                                className="text-xl px-1 font-semibold rounded-md transition-colors ease-linear"
                                ref={qtyRef}>
                                {totalQty}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-grey-dark-100 dark:text-grey-light-100">
                            <span className="text-xl/10">Total:</span>
                            <span
                                className="text-xl px-1 font-semibold rounded-md transition-colors ease-linear"
                                ref={totalPriceRef}>
                                ${total}
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            className="w-fit py-3 px-6 bg-green-100 text-grey-light-100 text-base tablet:text-lg/8 tracking-wide font-bold rounded-full"
                            onClick={checkoutHandler}>
                            Checkout
                        </button>
                        <button
                            className="w-fit py-3 px-3 text-gray-800 text-base tablet:text-lg/8 tracking-wide font-bold rounded-full"
                            onClick={clearCartHandler}>
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
