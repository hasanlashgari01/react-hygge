import { useId } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";

function Sidebar() {
    const [isDark, themeHandler] = useTheme();

    const links = [
        { to: "index", icon: "home", title: "Home" },
        { to: "users", icon: "users", title: "Users" },
        { to: "admins", icon: "receipt-percent", title: "Admins" },
        { to: "products", icon: "receipt-percent", title: "Products" },
        { to: "category", icon: "bag", title: "Categories" },
        { to: "off", icon: "receipt-percent", title: "Off" },
        { to: "blog", icon: "document-text", title: "Blog" },
    ];

    const navLinkStyle = ({ isActive }) => (isActive ? "p-admin__link p-admin__link--active" : "p-admin__link");

    return (
        <div className="relative hidden laptop:block w-64 h-screen p-3 sidebar">
            <div className="sticky top-5">
                <nav>
                    {links.map((link, index) => (
                        <ul key={index} className="flex flex-col">
                            <NavLink to={link.to} className={navLinkStyle}>
                                <svg className="w-5 h-5">
                                    <use href={`#${link.icon}`}></use>
                                </svg>
                                {link.title}
                            </NavLink>
                        </ul>
                    ))}
                </nav>
                <div
                    className="fixed bottom-8 left-8 w-14 h-8 mt-10 p-1 bg-grey-1 dark:bg-grey-2 shadow-md rounded-full select-none cursor-pointer transition-custom"
                    onClick={themeHandler}>
                    <span className={`darkMode flex justify-center items-center ${isDark ? "left-1/2" : "left-1"}`}>
                        <svg className="w-6 h-6">
                            <use href={`#${isDark ? "moon" : "sun"}`}></use>
                        </svg>
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Sidebar;
