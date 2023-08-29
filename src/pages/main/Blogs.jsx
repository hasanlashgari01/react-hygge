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
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="space-container">
                <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
                    {blogs.map(blog => (
                        <BlogMobile key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;
