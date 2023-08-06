import { useState } from "react";
import FooterColumn from "../../components/main/FooterColumn";
import useTheme from "../../hooks/useTheme";

function Footer() {
    const [isDark, themeHandler] = useTheme();
    const [footerItems, setFooterItems] = useState([
        {
            id: 1,
            title: "Categories",
            data: ["On Sale", "Featured", "Masks", "Eye Care", "Moisturizers", "Treatments", "Night Care", "Sun Care"],
        },
        {
            id: 2,
            title: "Legal",
            data: ["Terms of Service", "Privacy Policy", "Return Policy", "Shipping", "Data Protection"],
        },
        {
            id: 3,
            title: "Company",
            data: ["About", "Team", "Contact", "Careers", "Vision", "Culture"],
        },
    ]);

    return (
        <div className="space-container mb-0 pb-16 laptop:pb-28">
            <div className="grid grid-cols-2 laptop:grid-cols-4 gap-y-14 gap-x-16 desktop:pl-14">
                <div>
                    <div className="mb-6 tablet:mb-8">
                        <div className="mb-4 tablet:mb-6 child:transition-dark">
                            <svg className="hidden tablet:inline-block w-[154px] h-[48px] dark:text-white">
                                <use href="#logo-tablet"></use>
                            </svg>
                            <svg className="inline-block tablet:hidden w-[100px] h-[43px] dark:text-white">
                                <use href="#logo-mobile"></use>
                            </svg>
                        </div>
                        <span className="min-w-[134px] text-grey-dark-100 dark:text-grey-light-100 text-sm/[24px] font-normal] transition-dark">
                            © 2020 - All rights reserved
                        </span>
                    </div>
                    <div className="flex flex-col mobile:flex-row gap-x-6 mb-12">
                        <div className="flex justify-center items-center w-12 h-12 tablet:bg-grey-1 tablet:dark:bg-grey-2 rounded-full transition-dark">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#instagram"></use>
                            </svg>
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 tablet:bg-grey-1 tablet:dark:bg-grey-2 rounded-full transition-dark">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#twitter"></use>
                            </svg>
                        </div>
                        <div className="flex justify-center items-center w-12 h-12 tablet:bg-grey-1 tablet:dark:bg-grey-2 rounded-full transition-dark">
                            <svg className="w-6 h-6 dark:text-white">
                                <use href="#facebook"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="relative w-14 h-8 p-1 bg-grey-1 dark:bg-grey-2 shadow-md rounded-full select-none cursor-pointer transition-dark"
                        onClick={themeHandler}>
                        <span className={`darkMode flex justify-center items-center ${isDark ? "left-1/2" : "left-1"}`}>
                            <svg className="w-6 h-6">
                                <use href={`#${isDark ? "moon" : "sun"}`}></use>
                            </svg>
                        </span>
                    </div>
                </div>

                {footerItems.map(list => (
                    <FooterColumn key={list.id} list={list} />
                ))}
            </div>
        </div>
    );
}

export default Footer;
