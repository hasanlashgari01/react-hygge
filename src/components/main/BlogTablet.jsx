import propTypes from "prop-types";

function BlogTablet({ blog }) {
    return (
        <div className="blog-post-tablet relative hidden tablet:block w-full bigDesktop:mt-[72px] first:col-span-2 last:col-span-2">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[320px] rounded-[48px] overflow-hidden">
                <img
                    src="/public/images/blog/blog-1-large.png"
                    className="w-full object-cover object-center"
                    alt=""
                />
            </div>

            {/* Content */}
            <div className="mt-8">
                <h3 className="product__title">{blog.title}</h3>
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
