import Choose from "./Choose";
import SubTitle from "./SubTitle";
import Title from "./Title";

function WhyUs() {
    return (
        <div className="space-container">
            <div>
                <SubTitle subtitle="- Why Us" />
                <Title title="Why People Choose Us" />
            </div>
            <div className="flex flex-col tablet:flex-row flex-wrap justify-center gap-y-14 tablet:gap-y-8 tablet:gap-x-16 mt-14">
                <Choose
                    icon="box"
                    title="Easy Returns"
                    description="Our return policy is simple and that is why customers love our shop."
                />
                <Choose
                    icon="user"
                    title="Customer Service"
                    description="We offer amazing customer service no matter what happens."
                />
                <Choose
                    icon="star"
                    title="High Quality"
                    description="All of our products go through very strict inspection before we dispatch them."
                />
            </div>
        </div>
    );
}

export default WhyUs;
