import { useEffect, useState } from "react";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import Product from "../../components/main/Product";
import Header from "../../layouts/main/Header";
import Footer from "../../layouts/main/Footer";

function Search() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data.data));
    }, []);

    return (
        <div>
            <Header />
            <div className="space-container">
                <div>
                    <SubTitle subtitle="- Sign Up" />
                    <Title title="Create Account" />
                </div>

                <div className="flex flex-col justify-between items-center gap-8 w-full mt-16">
                    <div className="flex desktop:hidden justify-between items-center w-full">
                        <div className="dropdown-wrapper">
                            <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">Filter By</span>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-down"></use>
                            </svg>
                        </div>
                        <div className="dropdown-wrapper">
                            <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">Sort By</span>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-down"></use>
                            </svg>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-wrap desktop:flex-nowrap desktop:flex-row items-center gap-8 w-full desktop:w-fit">
                            <div className="dropdown-wrapper w-full tablet:flex-1 desktop:flex-grow-0">
                                <span className="w-[120px] text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                    Color
                                </span>
                                <svg className="w-4 h-4 text-black dark:text-white">
                                    <use href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div className="dropdown-wrapper w-full tablet:flex-1 desktop:flex-grow-0">
                                <span className="w-[120px] text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                    Use Case
                                </span>
                                <svg className="w-4 h-4 text-black dark:text-white">
                                    <use href="#arrow-down"></use>
                                </svg>
                            </div>
                            <div className="dropdown-wrapper w-full tablet:flex-1 desktop:flex-grow-0">
                                <span className="w-[120px] text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                    Price Range
                                </span>
                                <svg className="w-4 h-4 text-black dark:text-white">
                                    <use href="#arrow-down"></use>
                                </svg>
                            </div>
                        </div>

                        <div className="hidden desktop:inline-flex dropdown-wrapper">
                            <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">Sort By</span>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-down"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-x-12 laptop:gap-x-14 desktop:gap-x-12 gap-y-16 mt-14">
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Search;
