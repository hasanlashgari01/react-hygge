import propTypes from "prop-types";

function Title({ title }) {
    return (
        <>
            <h1 className="max-w-[335px] tablet:max-w-full text-grey-dark-100 dark:text-grey-light-100 text-lg mobile:text-[32px] tablet:text-[40px] font-bold  laptop:leading-[48px] tablet:leading-[56px]">
                {title}
            </h1>
        </>
    );
}

Title.propTypes = {
    title: propTypes.string,
};

export default Title;
