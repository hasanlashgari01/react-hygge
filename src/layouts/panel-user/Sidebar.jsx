import SmoothScrollNavLink from "../../components/SmoothScrollNavLink";

function Sidebar() {
    const linkStyle = ({ isActive }) =>
        isActive ? "p-user__link p-user__link--active" : "p-user__link";

    return (
        <div className="hidden laptop:flex flex-col gap-y-4 h-fit py-6 px-[28px] border border-[#cbcbcb] rounded-lg">
            <SmoothScrollNavLink className={linkStyle} to="/">
                <svg className="w-6 h-6">
                    <use href="#home"></use>
                </svg>
                Home
            </SmoothScrollNavLink>
            <SmoothScrollNavLink className={linkStyle} to="cart">
                <svg className="w-6 h-6">
                    <use href="#cart"></use>
                </svg>
                Cart
            </SmoothScrollNavLink>
            <SmoothScrollNavLink className={linkStyle} to="likes">
                <svg className="w-6 h-6">
                    <use href="#heart"></use>
                </svg>
                Likes
            </SmoothScrollNavLink>
            <SmoothScrollNavLink className={linkStyle} to="bookmarks">
                <svg className="w-6 h-6">
                    <use href="#bookmark"></use>
                </svg>
                Bookmarks
            </SmoothScrollNavLink>
            <SmoothScrollNavLink className={linkStyle} to="profile">
                <svg className="w-6 h-6">
                    <use href="#user"></use>
                </svg>
                Profile
            </SmoothScrollNavLink>
        </div>
    );
}

export default Sidebar;
