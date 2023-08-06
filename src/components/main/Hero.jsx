import PropTypes from "prop-types";
import SubTitle from "./SubTitle";
import Title from "./Title";

function Hero({ subtitle, title, imageMobile, imageDesktop }) {
    return (
        <div className="space-container mt-6 tablet:mt-8 bigDesktop:mt-16">
            <div className="laptop:hidden">
                <SubTitle subtitle={subtitle} />
                <Title title={title} />
                <a
                    href="#"
                    className="inline-block mt-6 tablet:mt-10 py-3 px-6 tablet:py-4 tablet:px-10 bg-green-100 hover:bg-green-100/70 text-white font-bold leading-6 rounded-full transition-colors duration-300 ease-linear">
                    Shop Now
                </a>
            </div>

            <div className="w-full h-[311px] tablet:h-[400px] laptop:h-[504px] desktop:max-h-[600px] mt-10 laptop:py-[100px] flex justify-center laptop:justify-between desktop:items-center bg-grey-1 dark:bg-grey-2 rounded-[48px]">
                <div className="hidden laptop:block pl-12 bigDesktop:pl-24 ">
                    <SubTitle subtitle={subtitle} />
                    <Title title={title} />
                    <a
                        href="#"
                        className="inline-block mt-6 tablet:mt-10 py-3 px-6 tablet:py-4 tablet:px-10 bg-green-100 hover:bg-green-100/70 text-white font-bold leading-6 rounded-full transition-colors duration-300 ease-linear">
                        Shop Now
                    </a>
                </div>
                <div className="laptop:w-[500px] desktop:w-[650px] h-full desktop:h-fit mr-4 desktop:mr-6">
                    <img src={imageMobile} alt="" className="tablet:hidden h-full py-10 px-2 object-cover" />
                    <img
                        src={imageDesktop}
                        alt=""
                        className="hidden tablet:inline-block laptop:w-full h-full py-10 tablet:py-0 px-2 object-cover border-grey-dark-24"
                    />
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imageMobile: PropTypes.string,
    imageDesktop: PropTypes.string,
};

export default Hero;
