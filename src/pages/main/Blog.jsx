import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../layouts/main/Header";
import Footer from "../../layouts/main/Footer";

function Blog() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState();

    console.log(blogId);
    console.log(blog);

    useEffect(() => {
        fetch(`http://localhost:4000/api/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);

    return (
        <div>
            <Header />
            <div className="space-container">
                <div className="flex gap-10">
                    <img
                        src="/public/images/blog/blog-1.png"
                        className="object-cover object-center"
                        alt=""
                    />
                    <div className="flex flex-1 flex-col justify-around">
                        <div>
                            <h2 className="text-2xl mb-3">{blog && blog.title}</h2>
                            <p>{blog && blog.title}</p>
                        </div>
                        <span className="w-fit product__tip">{blog && blog.tip}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
