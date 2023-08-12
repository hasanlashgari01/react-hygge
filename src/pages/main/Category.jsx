import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Breadcrumbs from "../../components/main/Breadcrumbs";
import NewsLetter from "../../components/main/NewsLetter";
import Product from "../../components/main/Product";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import useTitle from "../../hooks/useTitle";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";

function CategoryProducts() {
    useTitle("Category Products");
    const { shortName } = useParams();
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [filter, setFilter] = useState({ price: 1, date: 1 });

    useEffect(() => {
        fetch(
            `http://localhost:4000/api/categories/${shortName}`
            /* {
                ,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ filter }),
            } */
        )
            .then(res => res.json())
            .then(result => {
                setCategory(result);
                setProducts(result.products);
                setIsPending(false);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="space-container">
                <Breadcrumbs />
                <div className="mb-[104px] desktop:mb-[112px] bigDesktop:mb-36">
                    <div>
                        <SubTitle subtitle={`- ${category.title} Products`} />
                        <Title title={`Explore the ${category.title} Products`} />
                    </div>
                    {products.length ? (
                        <>
                            <div className="flex flex-col justify-between items-center gap-8 w-full mt-16">
                                <div className="flex desktop:hidden justify-between items-center w-full">
                                    <div className="dropdown-wrapper">
                                        <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                            Filter By
                                        </span>
                                        <svg className="w-4 h-4 text-black dark:text-white">
                                            <use href="#arrow-down"></use>
                                        </svg>
                                    </div>
                                    <div className="dropdown-wrapper">
                                        <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                            Sort By
                                        </span>
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
                                        <span className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-bold">
                                            Sort By
                                        </span>
                                        <svg className="w-4 h-4 text-black dark:text-white">
                                            <use href="#arrow-down"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 xmobile:grid-cols-2 tablet:grid-cols-3 bigDesktop:grid-cols-4 gap-3.5 mobile:gap-5 desktop:gap-10 gap-y-8 mt-14">
                                {products &&
                                    products.map(product => (
                                        <Product key={product._id} product={product} />
                                    ))}
                            </div>
                        </>
                    ) : (
                        !isPending && <ErrorMessage title="There is no product" />
                    )}
                </div>
                <NewsLetter />
            </div>
            <Footer />
        </div>
    );
}

export default CategoryProducts;
