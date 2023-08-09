import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { FreeMode, Keyboard, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumbs from "../../components/main/Breadcrumbs";
import NewsLetter from "../../components/main/NewsLetter";
import ProductDetails from "../../components/main/ProductDetails";
import Products from "../../components/main/Products";
import Reviews from "../../components/main/Reviews";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import WhyUs from "../../components/main/WhyUs";
import useTitle from "../../hooks/useTitle";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ProductPage() {
    useTitle("Product Page");

    let { productId } = useParams();

    const [product, setProduct] = useState();
    const [images, setImages] = useState([]);
    const [productCount, setProductCount] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const desktopProductPrevRef = useRef(null);
    const desktopProductNextRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:4000/api/products/${productId}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setProduct(result);
                setProduct(result.image);
            })
            .catch(err => err);
    }, []);

    console.log(product);

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
                <Breadcrumbs />
                <div className="flex flex-col bigDesktop:flex-row gap-x-[72px] mt-14 tablet:mt-16 bigDesktop:mt-4">
                    {/* Images */}
                    <div className="flex flex-col laptop:flex-row-reverse justify-center items-center laptop:gap-6 mb-14 tablet:mb-16 overflow-hidden">
                        <div className="w-screen laptop:w-[504px] laptop:h-[504px] select-none">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={24}
                                keyboard={{
                                    enabled: true,
                                }}
                                modules={[Keyboard, Pagination, FreeMode, Navigation, Thumbs]}
                                navigation={{
                                    prevEl: desktopProductPrevRef.current,
                                    nextEl: desktopProductNextRef.current,
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                onBeforeInit={swiper => {
                                    swiper.params.navigation.prevEl = desktopProductPrevRef.current;
                                    swiper.params.navigation.nextEl = desktopProductNextRef.current;
                                }}
                                className="mySwiper2">
                                <div className="bg-grey-1 dark:bg-grey-2 w-[311px] h-[311px] tablet:w-[504px] tablet:h-[504px] mx-auto py-[51px] rounded-[48px] tablet:rounded-[64px]">
                                    <img
                                        src={`/public/images/products/Product 1.png`}
                                        className="h-full mx-auto"
                                        alt=""
                                    />
                                </div>

                                {/* {product.map(index => (
                                    <SwiperSlide key={index}>
                                    </SwiperSlide>
                                ))} */}
                            </Swiper>
                        </div>

                        <div className="flex tablet:hidden justify-center gap-4 mt-10 select-none">
                            <span
                                className="slider-click-wrapper border hover:border-black dark:border-white/30"
                                ref={desktopProductPrevRef}>
                                <svg className="w-4 h-4 text-black dark:text-white">
                                    <use href="#arrow-left"></use>
                                </svg>
                            </span>
                            <span
                                className="slider-click-wrapper border hover:border-black dark:border-white/30"
                                ref={desktopProductNextRef}>
                                <svg className="w-4 h-4 text-black dark:text-white">
                                    <use href="#arrow-right"></use>
                                </svg>
                            </span>
                        </div>

                        <div id="swiper-image" className="hidden tablet:flex select-none">
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper">
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`/public/images/products/${image}`}
                                            className="h-full mx-auto"
                                            alt=""
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-y-10 bigDesktop:gap-y-20 items-center bigDesktop:items-start bigDesktop:justify-center bigDesktop:h-[504px]">
                        <div>
                            <SubTitle subtitle="- Selling Fast" />
                            {product && <Title title={product.title} />}
                            {product && (
                                <ProductDetails
                                    ability={product.ability}
                                    priceOriginal={product.priceOriginal}
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-6">
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

                            <div className="flex items-center gap-x-6">
                                <span className="py-3 px-6 tablet:py-4 tablet:px-10 bg-green-100 text-grey-light-100 tablet:text-xl/[32px] font-bold rounded-full cursor-pointer">
                                    Add to Cart
                                </span>

                                <span className="inline-flex p-3 tablet:p-4 border-2 text-black dark:text-white border-grey-1 dark:border-grey-2 rounded-full cursor-pointer">
                                    <svg className="w-6 h-6 tablet:w-8 tablet:h-8">
                                        <use href="#heart"></use>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <WhyUs />
            <Reviews />
            <Products />
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default ProductPage;
