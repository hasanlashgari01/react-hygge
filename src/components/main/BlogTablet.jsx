import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";

function BlogTablet({ blog }) {
    return (
        <div className="relative hidden tablet:block w-full">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[320px] rounded-[48px] overflow-hidden">
                <img
                    src="/public/images/blog/blog-1-large.png"
                    className="h-full object-cover"
                    alt=""
                />
            </div>

            {/* Content */}
            <div className="mt-4 px-4">
                <SmoothScrollLink
                    to={`http://localhost:5173/blogs/${blog._id}`}
                    className="product__title">
                    {blog.title}
                </SmoothScrollLink>
                <span className="product__tip mt-4">{blog.tip}</span>
            </div>
        </div>
    );
}

BlogTablet.propTypes = {
    title: propTypes.string,
    tip: propTypes.string,
};

export default BlogTablet;
