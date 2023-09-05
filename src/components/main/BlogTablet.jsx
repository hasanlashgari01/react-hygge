import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";

function BlogTablet({ _id, image, title, tip }) {
    return (
        <div className="relative hidden tablet:block w-full">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[320px] aspect-square rounded-[48px] overflow-hidden">
                <img src={`http://localhost:4000/api/blogs/image/${image}`} className="h-full object-cover" alt="" />
            </div>

            {/* Content */}
            <div className="mt-4 px-4">
                <SmoothScrollLink to={`http://localhost:5173/blogs/${_id}`} className="product__title">
                    {title}
                </SmoothScrollLink>
                <span className="product__tip mt-4">{tip}</span>
            </div>
        </div>
    );
}

BlogTablet.propTypes = {
    _id: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    tip: propTypes.string,
};

export default BlogTablet;
