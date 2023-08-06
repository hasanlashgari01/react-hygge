import propTypes from "prop-types";

function BlogMobile({ post }) {
    return (
        <div className="relative mx-auto max-w-[311px] mt-14">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[311px] rounded-[48px] overflow-hidden">
                <img src="/public/images/blog/blog-1.png" className="object-cover object-center" alt="" />
            </div>

            {/* Content */}
            <div className="mt-8">
                <h3 className="product__title">Morning Skincare Routine: 10 Top Tips for you</h3>
                <span className="product__tip mt-4">TOP TIPS</span>
            </div>
        </div>
    );
}

BlogMobile.propTypes = {
    post: propTypes.number,
};

export default BlogMobile;
