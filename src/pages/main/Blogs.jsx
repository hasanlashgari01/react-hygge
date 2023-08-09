import { useEffect, useState } from "react";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";
import BlogTablet from "../../components/main/BlogTablet";
import BlogMobile from "../../components/main/BlogMobile";

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <>
            <Header />
            <div className="space-container">
                <div className="blog-post">
                    {blogs.map(post => (
                        <BlogMobile key={post._id} post={post} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;
