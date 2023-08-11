import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

function Sidebar() {
    const [isDark, themeHandler] = useTheme();

    const navLinkStyle = ({ isActive }) =>
        isActive ? "p-admin__link p-admin__link--active" : "p-admin__link";

    return (
        <div className="sticky top-0 hidden laptop:block w-64 p-3 sidebar">
            <nav>
                <ul className="flex flex-col">
                    <NavLink to="index" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#home"></use>
                        </svg>
                        Home
                    </NavLink>
                    <NavLink to="users" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#users"></use>
                        </svg>
                        Users
                    </NavLink>
                    <NavLink to="admins" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#receipt-percent"></use>
                        </svg>
                        Admins
                    </NavLink>
                    <NavLink to="products" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#receipt-percent"></use>
                        </svg>
                        Products
                    </NavLink>
                    <NavLink to="category" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#bag"></use>
                        </svg>
                        Categories
                    </NavLink>
                    <NavLink to="off" className={navLinkStyle}>
                        <svg className="w-5 h-5">
                            <use href="#receipt-percent"></use>
                        </svg>
                        Off
                    </NavLink>
                </ul>
            </nav>
            <div
                className="relative w-14 h-8 mt-10 p-1 bg-grey-1 dark:bg-grey-2 shadow-md rounded-full select-none cursor-pointer transition-custom"
                onClick={themeHandler}>
                <span
                    className={`darkMode flex justify-center items-center ${
                        isDark ? "left-1/2" : "left-1"
                    }`}>
                    <svg className="w-6 h-6">
                        <use href={`#${isDark ? "moon" : "sun"}`}></use>
                    </svg>
                </span>
            </div>

            <div></div>
        </div>
    );
}

export default Sidebar;
