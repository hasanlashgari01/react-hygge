import { NavLink } from "react-router-dom";

function Sidebar({ status, setClose }) {
    const linkStyle = ({ isActive }) =>
        isActive ? "p-user__link p-user__link--active" : "p-user__link";

    return (
        <div
            className={`${status} laptop: flex flex-col gap-y-4 h-fit py-6 px-[28px] border border - [#cbcbcb] rounded - lg`}>
            <NavLink to="/" className={linkStyle} onClick={setClose}>
                <svg className="w-6 h-6">
                    <use href="#home"></use>
                </svg>
                Home
            </NavLink>
            <NavLink to="cart" className={linkStyle} onClick={setClose}>
                <svg className="w-6 h-6">
                    <use href="#cart"></use>
                </svg>
                Cart
            </NavLink>
            <NavLink to="likes" className={linkStyle} onClick={setClose}>
                <svg className="w-6 h-6">
                    <use href="#heart"></use>
                </svg>
                Likes
            </NavLink>
            <NavLink to="bookmarks" className={linkStyle} onClick={setClose}>
                <svg className="w-6 h-6">
                    <use href="#bookmark"></use>
                </svg>
                Bookmarks
            </NavLink>
            <NavLink to="profile" className={linkStyle} onClick={setClose}>
                <svg className="w-6 h-6">
                    <use href="#user"></use>
                </svg>
                Profile
            </NavLink>
        </div>
    );
}

export default Sidebar;
