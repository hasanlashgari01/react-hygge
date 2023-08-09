import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";

function BlogMobile({ post }) {
    return (
        <div className="relative mx-auto max-w-[311px] mt-14">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[311px] rounded-[48px] overflow-hidden">
                <img
                    src="/public/images/blog/blog-1.png"
                    className="object-cover object-center"
                    alt=""
                />
                {/* <img src={blog} className="object-cover object-center" alt="" /> */}
            </div>

            {/* Content */}
            <div className="mt-8">
                <SmoothScrollLink
                    to={`http://localhost:5173/blogs/${post._id}`}
                    className="product__title">
                    {post.title}
                </SmoothScrollLink>
                <span className="product__tip mt-4">{post.tip}</span>
            </div>
        </div>
    );
}

BlogMobile.propTypes = {
    post: propTypes.number,
};

export default BlogMobile;
