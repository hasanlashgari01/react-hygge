import propTypes from "prop-types";

function SubTitle({ subtitle }) {
    return (
        <>
            <h4 className="text-blue-100 font-semibold text-sm mobile:text-base/6 italic">{subtitle}</h4>
        </>
    );
}

SubTitle.propTypes = {
    subtitle: propTypes.string,
};

export default SubTitle;
