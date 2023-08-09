import propTypes from "prop-types";

function Choose({ icon, title, description }) {
    return (
        <div className="flex flex-1 flex-col items-center tablet:min-w-[350px]">
            <div className="flex justify-center items-center mb-8 w-16 h-16 bg-grey-1 dark:bg-grey-2 rounded-full">
                <svg className="w-8 h-8 text-black dark:text-white">
                    <use href={`#${icon}`}></use>
                </svg>
            </div>
            <h2 className="mb-4 text-grey-dark-100 dark:text-grey-light-100 text-2xl/[40px] font-semibold">{title}</h2>
            <p className="text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] font-normal text-center">{description}</p>
        </div>
    );
}

Choose.propTypes = {
    icon: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
};

export default Choose;
