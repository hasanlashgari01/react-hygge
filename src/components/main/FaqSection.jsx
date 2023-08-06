import propTypes from "prop-types";
import FaqBody from "./FaqBody";

function FaqSection(props) {
    return (
        <div>
            <h1 className="text-grey-dark-100 dark:text-grey-light-100 my-14 text-2xl font-bold leading-8">General</h1>
            <div className="bigDesktop:flex flex-row flex-wrap gap-x-24" >
                <FaqBody props={props} />
                <FaqBody props={props} />
                <FaqBody props={props} />
            </div>
        </div>
    );
}

FaqSection.propTypes = {
    title: propTypes.string,
    question: propTypes.string,
    answer: propTypes.string,
};

export default FaqSection;
