import { useEffect, useRef, useState } from "react";
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "./SubTitle";
import Title from "./Title";

import "swiper/css";
import "swiper/css/pagination";
import SmoothScrollLink from "../SmoothScrollLink";

function Categories() {
    const [categories, setCategories] = useState([]);
    const desktopNavigationPrevRef = useRef(null);
    const desktopNavigationNextRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/categories")
            .then(res => res.json())
            .then(result => {
                setCategories(result);
            });
    }, []);

    return (
        <div className="space-container">
            <div>
                <SubTitle subtitle="- The Categories" />
                <div className="flex justify-between items-center">
                    <Title title="Browse by Category" />
                    <div className="hidden tablet:flex gap-4 select-none">
                        <span className="slider-click-wrapper" ref={desktopNavigationPrevRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-left"></use>
                            </svg>
                        </span>
                        <span className="slider-click-wrapper" ref={desktopNavigationNextRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="mt-14 px-3">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={32}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            375: {
                                slidesPerView: 2,
                            },
                            478: {
                                slidesPerView: 2.6,
                            },
                            640: {
                                slidesPerView: 3.6,
                            },
                            768: {
                                slidesPerView: 4.6,
                            },
                            1024: {
                                slidesPerView: 6.2,
                            },
                            1280: {
                                slidesPerView: 7.2,
                            },
                            1440: {
                                slidesPerView: 8,
                            },
                        }}
                        modules={[Keyboard, Navigation]}
                        navigation={{
                            prevEl: desktopNavigationPrevRef.current,
                            nextEl: desktopNavigationNextRef.current,
                        }}
                        onBeforeInit={swiper => {
                            swiper.params.navigation.prevEl = desktopNavigationPrevRef.current;
                            swiper.params.navigation.nextEl = desktopNavigationNextRef.current;
                        }}
                        className="mySwiper">
                        {categories.map(category => (
                            <SwiperSlide key={category._id}>
                                <SmoothScrollLink
                                    to={`http://localhost:5173/category/${category.name}`}
                                    className="group inline-flex flex-col justify-center items-center w-32 h-32 bg-grey-1 dark:bg-grey-2 hover:bg-green-100/70 dark:hover:bg-green-100/70 rounded-3xl transition-dark">
                                    <svg className="w-8 h-8 text-green-100 group-hover:text-white transition-colors">
                                        <use href={`#${category.icon}`}></use>
                                    </svg>
                                    <h3 className="mt-4 text-grey-dark-100 dark:text-grey-light-100 font-semibold select-none">{category.title}</h3>
                                </SmoothScrollLink>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Categories;
