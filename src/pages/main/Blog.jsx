import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../layouts/main/Header";
import Footer from "../../layouts/main/Footer";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import { Link } from "react-router-dom";
import Title from "../../components/main/Title";

function Blog() {
    const { blogId } = useParams();
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [blog, setBlog] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/api/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data));

        fetch("http://localhost:4000/api/blogs")
            .then(res => res.json())
            .then(data => {
                const indexToDelete = data.findIndex(blog => blog._id === blogId);
                if (indexToDelete !== -1) {
                    data.splice(indexToDelete, 1);
                }

                setBlogs(data);
            });

        fetch("http://localhost:4000/api/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            });
    }, [blogs]);

    return (
        <div>
            <Header />
            <div className="space-container">
                <div className="flex flex-col laptop:flex-row gap-10 mt-5">
                    <div className="h-[311px] rounded-[48px] overflow-hidden">
                        <img src="/public/images/blog/blog-1.png" className="object-cover object-center" alt="" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-6">
                        <h2 className="mb-3 dark:text-white text-xl lg:text-3xl font-semibold">{blog && blog.title}</h2>
                        <div className="flex gap-2.5">
                            <span className="w-fit product__tip">{blog && blog.tip}</span>
                            <span className="w-fit product__tip font-semibold text-black/50 dark:text-white/50">
                                5 min
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col laptop:flex-row gap-10 my-10">
                    <div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">1. Cleanse with Care:</h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Begin your morning routine by gently cleansing your face. Opt for a mild cleanser that
                                removes overnight impurities without stripping your skin's natural oils. This step
                                prepares your canvas for the subsequent skincare products.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">2. Hydration is Key:</h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Hydrated skin is happy skin. After cleansing, apply a hydrating serum containing
                                ingredients like hyaluronic acid. This will help lock in moisture and create a plump,
                                youthful appearance.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">
                                3. Sunscreen: Non-Negotiable:
                            </h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Never skip sunscreen! UV rays can damage your skin and lead to premature aging. Choose a
                                broad-spectrum sunscreen with at least SPF 30 and apply it generously to shield your
                                skin from harmful rays.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">
                                4. Vitamin C for Brightness:
                            </h3>
                            <img
                                src="https://x6s2i7c2.rocketcdn.me/wp-content/uploads/2023/02/Can-vitamin-C-help-treat-COVID-19.jpg"
                                alt=""
                            />
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Incorporate a vitamin C serum into your routine. Vitamin C is a powerful antioxidant
                                that helps brighten your complexion, fade dark spots, and protect your skin from
                                environmental stressors.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">5. Eye Cream Elegance:</h3>
                            <img
                                src="https://images.unsplash.com/photo-1561383615-1f7c3646eedf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                            />
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                The delicate skin around your eyes requires special attention. A lightweight eye cream
                                can help reduce puffiness, diminish dark circles, and keep the area hydrated, giving you
                                a refreshed look.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">
                                6. Don't Forget Your Neck:
                            </h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Extend your skincare routine to your neck and décolletage. These areas often show signs
                                of aging sooner than the face. Apply the same products you use on your face to maintain
                                a consistent appearance.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">
                                7. Incorporate Antioxidants:
                            </h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Antioxidant-rich products help combat free radicals, which contribute to skin aging.
                                Look for ingredients like green tea extract, niacinamide, and resveratrol to boost your
                                skin's defense mechanisms.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">8. Gentle Exfoliation:</h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Exfoliation removes dead skin cells, allowing other products to penetrate effectively.
                                Opt for a gentle exfoliant with alpha hydroxy acids (AHAs) or beta hydroxy acids (BHAs)
                                a few times a week to reveal smoother skin.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">9. Layer Products Wisely:</h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                When layering products, apply them in order from thinnest to thickest consistency. This
                                ensures that each product can be absorbed properly, maximizing their benefits.
                            </p>
                        </div>
                        <div className="mb-5 space-y-2.5">
                            <h3 className="text-3xl font-bold text-black dark:text-white">10. Listen to Your Skin:</h3>
                            <p className="px-5 text-justify text-lg text-black dark:text-white/80">
                                Your skin's needs can change based on factors like weather, hormones, and stress. Pay
                                attention to how your skin reacts to certain products and adjust your routine as needed.
                                Flexibility is key to achieving and maintaining healthy skin.
                            </p>
                        </div>
                    </div>
                    <div className="sticky top-4 space-y-5 w-full laptop:basis-[750px] h-fit">
                        <h1 className="max-w-[335px] tablet:max-w-full mt-2 text-green-100 text-2xl mobile:text-[32px] tablet:text-[40px] font-bold leading-[48px] tablet:leading-[56px]">
                            Products
                        </h1>
                        {products.map(product => (
                            <SmoothScrollLink
                                to={`http://localhost:5173/product/${product._id}`}
                                className="flex gap-x-3 p-3 bg-green-10/5 rounded-xl"
                                key={product._id}>
                                <div className="max-w-[110px] max-h-[110px] rounded-md overflow-hidden">
                                    <img src="/public/images/blog/blog-1.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between py-2">
                                    <h3 className="text-green-100 font-semibold">{product.title}</h3>
                                    <span className="text-sm dark:text-white transiton-custom"></span>
                                </div>
                            </SmoothScrollLink>
                        ))}
                    </div>
                </div>
                <div className="space-x-5">
                    <h1 className="max-w-[335px] tablet:max-w-full mt-2 text-green-100 text-2xl mobile:text-[32px] tablet:text-[40px] font-bold leading-[48px] tablet:leading-[56px]">
                        Blogs
                    </h1>
                    <div className="grid laptop:grid-cols-4 gap-10 mt-10">
                        {blogs.map(blog => (
                            <SmoothScrollLink
                                to={`http://localhost:5173/blogs/${blog._id}`}
                                className="flex laptop:flex-col w-full p-3 rounded-xl"
                                key={blog._id}>
                                <div className="h-[220px] w-[220px] aspect-square rounded-t-md overflow-hidden">
                                    <img
                                        src={`http://localhost:4000/api/blogs/image/${blog.image}`}
                                        className="h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col justify-between p-2">
                                    <h3 className="mt-5 text-2xl text-black dark:text-white font-semibold">
                                        {blog.title}
                                    </h3>
                                    <span className="text-sm dark:text-white transiton-custom"></span>
                                </div>
                            </SmoothScrollLink>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
