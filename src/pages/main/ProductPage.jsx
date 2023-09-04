import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { FreeMode, Keyboard, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AuthContext from "../../context/authContext";
import { CartContext } from "../../context/CartContext/CartContext";
import useToken from "../../hooks/useToken";
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
import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_FROM_CART,
} from "../../context/CartContext/cartActions";

function ProductPage() {
    const { userInfos } = useContext(AuthContext);
    const { state, dispatch } = useContext(CartContext);

    useTitle("Product Page");

    const token = useToken();

    let { productId } = useParams();

    const productItem = state.cart.find(item => item._id === productId);

    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [isInLikeList, setIsInLikeList] = useState();
    const [isInBookmarkList, setIsInBookmarkList] = useState();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const desktopProductPrevRef = useRef(null);
    const desktopProductNextRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:4000/api/products/${productId}`)
            .then(res => res.json())
            .then(result => {
                setProduct(result);
                setImages(result.image);
                setIsInLikeList(result.isLike);
                setIsInBookmarkList(result.isBookmark);
            })
            .catch(err => err);
    }, [isInLikeList, isInBookmarkList]);

    const addOrRemoveLike = (productId, userId) => {
        if (!isInLikeList) {
            fetch(`http://localhost:4000/api/products/like/${productId}/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    setIsInLikeList(true);
                });
        } else {
            fetch(`http://localhost:4000/api/products/unlike/${productId}/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    setIsInLikeList(false);
                });
        }
    };

    const addOrRemoveBookmark = (productId, userId) => {
        if (!isInBookmarkList) {
            fetch(`http://localhost:4000/api/products/bookmark/${productId}/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    setIsInBookmarkList(true);
                });
        } else {
            fetch(`http://localhost:4000/api/products/remove-bookmark/${productId}/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    setIsInBookmarkList(false);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="space-container">
                <Breadcrumbs productTitle={product.title} />
                <div className="flex flex-col bigDesktop:flex-row gap-x-[72px] mt-14 tablet:mt-16 bigDesktop:mt-4">
                    {/* Images */}
                    <div className="flex flex-col laptop:flex-row-reverse justify-center items-center laptop:gap-6 mb-6 tablet:mb-16 overflow-hidden">
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
                                {[0, 1].map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-grey-1 dark:bg-grey-2 w-[225px] h-[225px] tablet:w-[504px] tablet:h-[504px] mx-auto py-[51px] rounded-[48px] tablet:rounded-[64px]">
                                            <img
                                                src={`/public/images/products/${image}`}
                                                className="h-full mx-auto"
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="flex tablet:hidden justify-center gap-4 mt-4 xmobile:mt-10 select-none">
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
                                {[0, 1].map((image, index) => (
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
                    <div className="flex flex-col gap-y-5 bigDesktop:gap-y-20 px-6 bigDesktop:items-start bigDesktop:justify-center bigDesktop:h-[504px]">
                        <div className="text-center">
                            <span className="hidden">
                                <SubTitle subtitle="- Selling Fast" />
                            </span>
                            <Title title={product.title} />
                            <ProductDetails ability={product.ability} priceOriginal={product.priceOriginal} />
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <div className="flex">
                                {!productItem ? (
                                    <span
                                        className="py-3 px-6 tablet:py-4 tablet:px-10 bg-green-100 text-grey-light-100 tablet:text-xl/[32px] font-bold rounded-full cursor-pointer"
                                        onClick={() => dispatch({ type: ADD_TO_CART, payload: product })}>
                                        Add to Cart
                                    </span>
                                ) : (
                                    <div className="flex justify-between items-center w-[136px] h-12 tablet:w-[176px] tablet:h-16 py-4 px-2 tablet:p-4 border-2 border-grey-1 dark:border-grey-2 rounded-full select-none">
                                        <div>
                                            <span
                                                className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                                onClick={() => {
                                                    productItem.qty > 1
                                                        ? dispatch({ type: DECREASE_QUANTITY, payload: product })
                                                        : dispatch({ type: REMOVE_FROM_CART, payload: product });
                                                }}>
                                                <svg className="w-4 h-4 text-black dark:text-white">
                                                    <use
                                                        href={`#${productItem.qty > 1 ? "arrow-left" : "trash"}`}></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="inline-block text-grey-dark-100 dark:text-grey-light-100 font-bold text-xl tablet:text-2xl leading-8">
                                            {productItem ? productItem.qty : 0}
                                        </span>
                                        <span
                                            className="inline-flex justify-center items-center w-8 h-8 cursor-pointer"
                                            onClick={() => dispatch({ type: INCREASE_QUANTITY, payload: product })}>
                                            <svg className="w-4 h-4 text-black dark:text-white">
                                                <use href="#arrow-right"></use>
                                            </svg>
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div>
                                <span
                                    className="inline-flex p-3 tablet:p-4 border-2 border-grey-1 dark:border-grey-2 rounded-full cursor-pointer"
                                    onClick={() => addOrRemoveLike(product._id, userInfos._id)}>
                                    <svg
                                        className={`w-6 tablet:w-8 h-6 tablet:h-8 ${
                                            isInLikeList
                                                ? "text-red stroke-red"
                                                : "text-white stroke-black transition-custom ease-out"
                                        } `}>
                                        <use href="#heart"></use>
                                    </svg>
                                </span>
                                <span
                                    className="inline-flex p-3 tablet:p-4 border-2 border-grey-1 dark:border-grey-2 rounded-full cursor-pointer"
                                    onClick={() => addOrRemoveBookmark(product._id, userInfos._id)}>
                                    <svg
                                        className={`w-6 tablet:w-8 h-6 tablet:h-8 ${
                                            isInBookmarkList
                                                ? "text-black stroke-black"
                                                : "text-white stroke-black transition-custom ease-out"
                                        } `}>
                                        <use href="#bookmark"></use>
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
