import PropTypes from "prop-types";
import { useState } from "react";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import SmoothScrollNavLink from "../../components/SmoothScrollNavLink";

function Header() {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [cart, setCart] = useState(false);

    const navLinkStyle = ({ isActive }) => (isActive ? "navigation-link navigation-link--active" : "navigation-link");

    return (
        <>
            <div className="container sticky top-0 py-5 z-30 flex justify-between items-center bg-white dark:bg-grey-3 transition-dark child:transition-dark">
                {/* Logo Laptop */}
                <svg className="hidden laptop:inline-block w-[154px] h-[48px] dark:text-white transition-dark">
                    <use href="#logo-tablet"></use>
                </svg>
                {/* Hamburger */}
                <div
                    className="relative w-12 h-12 bg-grey-1 dark:bg-grey-2 rounded-full laptop:cursor-pointer transition-dark"
                    onClick={() => setIsShowMenu(!isShowMenu)}>
                    <span className={`hamburger-line${isShowMenu ? " hamburger-line--top" : ""}`}></span>
                    <span className={`hamburger-line ${isShowMenu ? " hamburger-line--bottom" : " mt-3"}`}></span>
                </div>
                {/* Logo Mobile */}
                <svg className="inline-block tablet:hidden w-[100px] h-[43px] dark:text-white transition-dark">
                    <use href="#logo-mobile"></use>
                </svg>
                {/* Logo Tablet */}
                <svg className="hidden tablet:inline-block laptop:hidden w-[154px] h-[48px] ml-20 dark:text-white transition-dark">
                    <use href="#logo-tablet"></use>
                </svg>
                {/* Right */}
                <div className="flex justify-between items-center tablet:w-[154px]">
                    <svg className="hidden tablet:inline-block w-6 h-6 dark:text-white">
                        <use href="#search"></use>
                    </svg>
                    <div className="relative group">
                        <SmoothScrollLink to="/cart" className="relative flex justify-center items-center w-12 h-12 laptop:cursor-pointer">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#cart"></use>
                            </svg>
                            <span className="absolute top-0 right-0 inline-flex justify-center items-center w-4 h-4 p-2.5 bg-pink-100 rounded-full">0</span>
                        </SmoothScrollLink>
                    </div>
                    <SmoothScrollLink to="/register">
                        <svg className="hidden tablet:inline-block w-6 h-6 dark:text-white">
                            <use href="#user"></use>
                        </svg>
                    </SmoothScrollLink>
                </div>
            </div>
            <div className={`navigation ${isShowMenu ? "navigation--active" : ""}`}>
                {/* Search Bar */}
                <div className="inline-flex mobile:hidden w-full mb-14 px-4 py-3 border dark:border-grey-4 rounded-full">
                    <svg className="w-6 h-6 dark:text-white">
                        <use href="#search"></use>
                    </svg>
                    <input type="text" placeholder="Search" className="ml-4 bg-transparent dark:text-white outline-none" />
                </div>
                {/* Nav */}
                <nav className="flex flex-col gap-6 mb-14 mobile:mt-14">
                    <SmoothScrollNavLink to="/" className={navLinkStyle}>
                        Home
                    </SmoothScrollNavLink>
                    <SmoothScrollNavLink to="/category-products" className={navLinkStyle}>
                        Categories
                    </SmoothScrollNavLink>
                    <SmoothScrollNavLink to="/blog" className={navLinkStyle}>
                        Blog
                    </SmoothScrollNavLink>
                    <SmoothScrollNavLink to="/about" className={navLinkStyle}>
                        About
                    </SmoothScrollNavLink>
                    <SmoothScrollNavLink to="/contact" className={navLinkStyle}>
                        Contact
                    </SmoothScrollNavLink>
                </nav>
                {/* Login Link */}
                <a
                    href="#"
                    className="inline-flex mobile:hidden justify-center items-center w-full py-3 px-6 bg-green-100 text-white dark:text-black leading-6 font-bold rounded-full">
                    Login
                </a>
                {/* Social Media */}
                <div className="mobile:container mobile:absolute mobile:bottom-8 mobile:left-10 flex justify-between items-center">
                    <div className="inline-flex gap-6">
                        <a href="#">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#instagram"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#twitter"></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#facebook"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    isShowMenu: PropTypes.bool,
    isDark: PropTypes.bool,
};

export default Header;
