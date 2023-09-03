import { Link } from "react-router-dom";

function Breadcrumbs({ productTitle }) {
    return (
        <ul className="hidden bigDesktop:inline-flex mt-10 mb-12 gap-6">
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <Link to="/">Home Page</Link>
                <svg className="w-4 h-4 text-black dark:text-white">
                    <use href="#arrow-right"></use>
                </svg>
            </li>
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <span>Categories</span>
                <svg className="w-4 h-4 text-black dark:text-white">
                    <use href="#arrow-right"></use>
                </svg>
            </li>
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <a href="#">{productTitle}</a>
                <svg className="w-4 h-4 text-black dark:text-white">
                    <use href="#arrow-right"></use>
                </svg>
            </li>
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                {productTitle}
            </li>
        </ul>
    );
}

export default Breadcrumbs;
