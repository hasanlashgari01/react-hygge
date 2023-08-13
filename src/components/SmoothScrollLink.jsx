import { Link } from "react-router-dom";

const SmoothScrollLink = ({ to, children, className }) => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth",
        });
    };

    return (
        <Link to={to} className={className} onClick={handleLinkClick}>
            {children}
        </Link>
    );
};

export default SmoothScrollLink;
