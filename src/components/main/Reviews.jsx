import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "./SubTitle";
import Title from "./Title";

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const desktopReviewsPrevRef = useRef(null);
    const desktopReviewsNextRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/comments")
            .then(res => res.json())
            .then(result => {
                setReviews(result);
            });
    }, []);

    return (
        <div className="space-container">
            <div className="laptop:hidden mb-14">
                <SubTitle subtitle="- Our Reviews" />
                <Title title="What our Customers are Saying" />
            </div>

            <div className="container laptop:flex justify-between items-center laptop:bg-grey-1 laptop:dark:bg-grey-2 laptop:rounded-[64px]">
                <div className="hidden laptop:inline-block w-[368px] desktop:w-[496px]">
                    <SubTitle subtitle="- Our Reviews" />
                    <Title title="What our Customers are Saying" />
                </div>

                <div className="laptop:w-[400px] mt-28 mb-12">
                    <Swiper
                        slidesPerView={1}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        navigation={{
                            prevEl: desktopReviewsPrevRef.current,
                            nextEl: desktopReviewsNextRef.current,
                        }}
                        onBeforeInit={swiper => {
                            swiper.params.navigation.prevEl = desktopReviewsPrevRef.current;
                            swiper.params.navigation.nextEl = desktopReviewsNextRef.current;
                        }}
                        className="mySwiper mb-10 tablet:mb-12 laptop:mb-10 desktop:mb-16">
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col justify-center laptop:justify-start text-center laptop:text-left">
                                    {/* FIXME */}
                                    <div className="w-20 h-20 mx-auto laptop:mx-0 mb-8 p-2 border-2 border-green-100 rounded-full"></div>
                                    <h3 className="mb-4 dark:text-grey-light-100 text-2xl/[40px] font-semibold">Amy Smith</h3>
                                    <p className="block dark:text-grey-light-100 mb-16 mobile:mb-20 mx-auto max-w-xs mobile:max-w-2xl text-xl/[32px] font-normal">
                                        {review.body}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-center  laptop:justify-start gap-4 select-none">
                        <span className="slider-click-wrapper border border-black dark:border-white/30" ref={desktopReviewsPrevRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-left"></use>
                            </svg>
                        </span>
                        <span className="slider-click-wrapper border border-black dark:border-white/30" ref={desktopReviewsNextRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;