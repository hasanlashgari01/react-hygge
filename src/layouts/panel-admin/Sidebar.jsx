import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

function Sidebar() {
    const [isDark, themeHandler] = useTheme();

    const navLinkStyle = ({ isActive }) => (isActive ? "p-admin__link p-admin__link--active" : "p-admin__link");

    return (
        <div className="hidden laptop:block basis-72 min-h-screen bg-green-10 p-8">
            <nav>
                <ul className="flex flex-col gap-2">
                    <NavLink to="index" className={navLinkStyle}>
                        Home
                    </NavLink>
                    <NavLink to="users" className={navLinkStyle}>
                        Users
                    </NavLink>
                    <NavLink to="admins" className={navLinkStyle}>
                        Admins
                    </NavLink>
                    <NavLink to="products" className={navLinkStyle}>
                        Products
                    </NavLink>
                    <NavLink to="off" className={navLinkStyle}>
                        Off
                    </NavLink>
                </ul>
            </nav>
            <div
                className="relative w-14 h-8 mt-10 p-1 bg-grey-1 dark:bg-grey-2 shadow-md rounded-full select-none cursor-pointer transition-dark"
                onClick={themeHandler}>
                <span className={`darkMode flex justify-center items-center ${isDark ? "left-1/2" : "left-1"}`}>
                    <svg className="w-6 h-6">
                        <use href={`#${isDark ? "moon" : "sun"}`}></use>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default Sidebar;
