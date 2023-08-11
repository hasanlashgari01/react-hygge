import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import Sidebar from "./Sidebar";

function Header({ image }) {
    const authContext = useContext(AuthContext);

    const [isShowNavbar, setIsShowNavbar] = useState(false);

    const navbarHandler = () => {
        setIsShowNavbar(!isShowNavbar);
    };

    const closeNavbarHandler = () => {
        setIsShowNavbar(false);
    };

    return (
        <div className="sticky top-0 flex w-screen tablet:w-full justify-between items-center py-3 px-10 shadow-md z-50 sidebar">
            <span className="hidden laptop:inline-block text-xl font-semibold">
                Hello, {authContext.userInfos.fullName}
            </span>
            <div className="flex justify-between items-center gap-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-full laptop:cursor-pointer transition-custom">
                <img
                    src={authContext.userInfos.image ? authContext.userInfos : image}
                    className="w-8 h-8 rounded-full"
                    alt=""
                />
                <span className="hidden tablet:inline-block mr-4 text-base font-semibold">
                    {authContext.userInfos.fullName}
                </span>
            </div>
            <div className="laptop:hidden">
                <svg className="w-6 h-6" onClick={navbarHandler}>
                    <use href={`#${isShowNavbar ? "close" : "bars-3"}`}></use>
                </svg>

                <div
                    className={`fixed inset-0 top-[72px] laptop:hidden p-3 w-64 sidebar transition-all duration-300 ${
                        isShowNavbar ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    <Sidebar setClose={closeNavbarHandler} />
                </div>
            </div>
        </div>
    );
}

Header.defaultProps = {
    image: "../public/user.png",
};

export default Header;
