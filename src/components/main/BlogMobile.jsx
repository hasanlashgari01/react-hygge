import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";

function BlogMobile({ _id, image, title, tip }) {
    return (
        <div className="relative mx-auto max-w-[311px] mt-14">
            {/* Badge */}
            <span className="product__badge">RECENT</span>
            {/* Image */}
            <div className="h-[311px] aspect-square rounded-[48px] overflow-hidden">
                <img src={`http://localhost:4000/api/blogs/image/${image}`} className="h-full object-cover" alt="" />
            </div>

            {/* Content */}
            <div className="mt-8">
                <SmoothScrollLink to={`http://localhost:5173/blogs/${_id}`} className="product__title">
                    {title}
                </SmoothScrollLink>
                <span className="product__tip mt-4">{tip}</span>
            </div>
        </div>
    );
}

BlogMobile.propTypes = {
    _id: propTypes.string,
    image: propTypes.string,
    title: propTypes.string,
    tip: propTypes.string,
};

export default BlogMobile;
