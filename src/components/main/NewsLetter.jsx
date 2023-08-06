import SubTitle from "./SubTitle";
import Title from "./Title";

function NewsLetter() {
    return (
        <div className="space-container hidden tablet:block">
            <div className="laptop:py-24 laptop:px-[314px] laptop:bg-grey-1 laptop:dark:bg-grey-2 rounded-[48px] desktop:rounded-[56px]">
                <div className="laptop:flex flex-col justify-center items-center text-center">
                    <SubTitle subtitle="- Our Newsletter" />
                    <Title title="Sign Up to our Newsletter" />
                </div>
                <form className="flex justify-center gap-x-6 mt-10 laptop:mt-12">
                    <input
                        type="text"
                        className="min-w-[448px] h-16 py-4 px-6 bg-grey-1 dark:bg-grey-4 laptop:bg-white text-grey-4 dark:text-grey-1 text-xl/[32px] font-normal rounded-[32px] outline-none transition-colors"
                        placeholder="Your Email"
                    />
                    <input
                        type="submit"
                        className="py-4 px-10 bg-green-100 text-grey-light-100 text-xl/[32px] font-bold rounded-full cursor-pointer"
                        value="Sign Up"
                    />
                </form>
            </div>
        </div>
    );
}

export default NewsLetter;
