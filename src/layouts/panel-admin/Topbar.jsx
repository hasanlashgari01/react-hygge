import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext";

function Topbar({ image }) {
    const authContext = useContext(AuthContext);

    const [isShowNavbar, setIsShowNavbar] = useState(false);

    const logoutHandler = () => {
        authContext.logout();
    };

    const navbarHandler = () => {
        setIsShowNavbar(!isShowNavbar);
    };

    const closeNavbarHandler = () => {
        setIsShowNavbar(false);
    };

    const navLinkStyle = ({ isActive }) =>
        isActive ? "p-admin__link p-admin__link--active" : "p-admin__link";

    return (
        <div className="sticky top-0 flex w-screen tablet:w-full justify-between items-center py-3 px-10 shadow-md z-50 sidebar">
            <span className="hidden laptop:inline-block text-2xl font-semibold">
                Hello, {authContext.userInfos.fullName}
            </span>
            <div>
                <div></div>
                <div></div>
                <div className="relative group">
                    <div className="flex justify-between items-center gap-3 p-2 bg-gray-50/50 rounded-full laptop:cursor-pointer">
                        <img
                            src={authContext.userInfos.image ? authContext.userInfos : image}
                            className="w-8 h-8 rounded-full"
                            alt=""
                        />
                        <span className="hidden tablet:inline-block mr-4 text-base font-semibold">
                            {authContext.userInfos.fullName}
                        </span>
                    </div>
                    <ul className="absolute left-0 laptop:right-0 top-full mt-5 space-y-2 w-52 bg-slate-500 rounded-xl p-2.5 opacity-0 invisible group-hover:opacity-100 delay-75 group-hover:visible transition-all">
                        <NavLink
                            to="profile"
                            className="inline-block w-full bg-slate-300 p-2 rounded-md">
                            Profile
                        </NavLink>
                        <NavLink
                            to=""
                            onClick={logoutHandler}
                            className="inline-block w-full bg-slate-300 p-2 rounded-md">
                            Logout
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="laptop:hidden">
                <svg className="w-6 h-6" onClick={navbarHandler}>
                    <use href={`#${isShowNavbar ? "close" : "bars-3"}`}></use>
                </svg>
                <div
                    className={`fixed inset-0 top-[72px] laptop:hidden p-3 w-64 sidebar transition-all duration-300 ${
                        isShowNavbar ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    <nav>
                        <ul className="flex flex-col">
                            <NavLink
                                to="index"
                                onClick={closeNavbarHandler}
                                className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#home"></use>
                                </svg>
                                Home
                            </NavLink>
                            <NavLink
                                to="users"
                                onClick={closeNavbarHandler}
                                className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#users"></use>
                                </svg>
                                Users
                            </NavLink>
                            <NavLink
                                to="admins"
                                onClick={closeNavbarHandler}
                                className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#receipt-percent"></use>
                                </svg>
                                Admins
                            </NavLink>
                            <NavLink
                                to="products"
                                onClick={closeNavbarHandler}
                                className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#receipt-percent"></use>
                                </svg>
                                Products
                            </NavLink>
                            <NavLink
                                to="category"
                                onClick={closeNavbarHandler}
                                className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#bag"></use>
                                </svg>
                                Categories
                            </NavLink>
                            <NavLink to="off" onClick={closeNavbarHandler} className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href="#receipt-percent"></use>
                                </svg>
                                Off
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

Topbar.defaultProps = {
    image: "../public/user.png",
};

export default Topbar;
