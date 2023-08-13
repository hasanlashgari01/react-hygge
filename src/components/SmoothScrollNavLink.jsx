import { NavLink } from "react-router-dom";

const SmoothScrollNavLink = ({ to, children, className }) => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            // behavior: "smooth",
        });
    };

    return (
        <NavLink to={to} className={className} onClick={handleLinkClick}>
            {children}
        </NavLink>
    );
};

export default SmoothScrollNavLink;
