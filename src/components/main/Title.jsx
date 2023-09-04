import propTypes from "prop-types";

function Title({ title }) {
    return (
        <>
            <h1 className="max-w-[335px] tablet:w-[500px] text-grey-dark-100 dark:text-grey-light-100 text-lg mobile:text-3xl/10 tablet:text-4xl/[56px] font-bold">
                {title}
            </h1>
        </>
    );
}

Title.propTypes = {
    title: propTypes.string,
};

export default Title;
