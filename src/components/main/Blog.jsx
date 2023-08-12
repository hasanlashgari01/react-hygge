import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import BlogMobile from "./BlogMobile";
import BlogTablet from "./BlogTablet";
import SubTitle from "./SubTitle";
import Title from "./Title";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const desktopBlogPostPrevRef = useRef(null);
    const desktopBlogPostNextRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return (
        <div className="space-container">
            <div className="mb-14 tablet:mb-16 desktop:mb-[72px]">
                <SubTitle subtitle="- Our Blog" />
                <Title title="Check Out our Blog" />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={14}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={true}
                    breakpoints={{
                        478: {
                            slidesPerView: 1.2,
                            spaceBetween: 16,
                        },
                    }}
                    modules={[Keyboard]}
                    navigation={{
                        prevEl: desktopBlogPostPrevRef.current,
                        nextEl: desktopBlogPostNextRef.current,
                    }}
                    onBeforeInit={swiper => {
                        swiper.params.navigation.prevEl = desktopBlogPostPrevRef.current;
                        swiper.params.navigation.nextEl = desktopBlogPostNextRef.current;
                    }}
                    className="mySwiper tablet:hidden">
                    {blogs.map(blog => (
                        <SwiperSlide key={blog._id}>
                            <BlogMobile blog={blog} />
                        </SwiperSlide>
                    ))}

                    <div className="flex justify-center laptop:justify-start mt-10 gap-4 select-none">
                        <span
                            className="slider-click-wrapper border border-black dark:border-white/30"
                            ref={desktopBlogPostPrevRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-left"></use>
                            </svg>
                        </span>
                        <span
                            className="slider-click-wrapper border border-black dark:border-white/30"
                            ref={desktopBlogPostNextRef}>
                            <svg className="w-4 h-4 text-black dark:text-white">
                                <use href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </Swiper>

                <div className="grid tablet:grid-cols-2 desktop:grid-cols-3 gap-12 mt-12">
                    {blogs.map(blog => (
                        <BlogTablet key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
