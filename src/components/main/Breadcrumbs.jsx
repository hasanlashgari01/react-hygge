function Breadcrumbs({ productTitle }) {
    return (
        <ul className="hidden bigDesktop:inline-flex mt-10 mb-12 gap-6">
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <a href="#">Home Page</a>
                <svg className="w-4 h-4 text-black dark:text-white">
                    <use href="#arrow-right"></use>
                </svg>
            </li>
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <a href="#">Categories</a>
                <svg className="w-4 h-4 text-black dark:text-white">
                    <use href="#arrow-right"></use>
                </svg>
            </li>
            <li className="flex items-center gap-x-4 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-medium">
                <a href="#">Sun Care</a>
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
