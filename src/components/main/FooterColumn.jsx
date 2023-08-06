import propTypes from "prop-types";
import SmoothScrollLink from "../SmoothScrollLink";

function FooterColumn({ list }) {
    return (
        <div>
            <h2 className="mb-4 tablet:mb-6 text-grey-dark-100 dark:text-grey-light-100 text-xl/[32px] tablet:text-2xl font-bold">
                {list.title}
            </h2>
            <ul className="flex flex-col gap-y-4 tablet:gap-y-6">
                {list.data.map((item, index) => (
                    <SmoothScrollLink
                        to="/"
                        key={index}
                        className="text-grey-dark-100 dark:text-grey-light-100 text-sm/[24px] tablet:text-base font-normal">
                        {item}
                    </SmoothScrollLink>
                ))}
            </ul>
        </div>
    );
}

FooterColumn.propTypes = {
    list: propTypes.object,
};

export default FooterColumn;
