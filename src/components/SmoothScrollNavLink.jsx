import { NavLink } from "react-router-dom";

const SmoothScrollNavLink = ({ to, children, className }) => {
    const handleLinkClick = e => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <NavLink to={to} className={className} onClick={handleLinkClick}>
            {children}
        </NavLink>
    );
};

export default SmoothScrollNavLink;
