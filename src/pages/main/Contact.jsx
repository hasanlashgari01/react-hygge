import { useState } from "react";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import Breadcrumbs from "../../components/main/Breadcrumbs";
import NewsLetter from "../../components/main/NewsLetter";
import Header from "../../layouts/main/Header";
import Footer from "../../layouts/main/Footer";

function Contact() {
    const [headSection, setHeadSection] = useState([
        { id: 1, title: "Customer Service", email: "customercare@hygge.com", body: "Please send us an email at" },
        { id: 2, title: "Public Relations", email: "media@hygge.com", body: "You can contact our media team by sending an email" },
        {
            id: 3,
            title: "Large Orders",
            email: "sales@hygge.com",
            body: "If you are thinking of making a very large order, please feel free to contact us at and we will give you a special discount",
        },
        {
            id: 4,
            title: "Other Enquiries",
            email: "general@hygge.com",
            body: "For all of your other questions, please send us an email at",
        },
    ]);

    return (
        <div>
            <Header />
            <div className="space-container">
                <Breadcrumbs />
                <div>
                    <SubTitle subtitle="- Ask Questions" />
                    <Title title="We are always here to help you" />
                </div>

                <div className="my-[104px] tablet:my-28 desktop:my-36 grid grid-cols-1 desktop:grid-cols-2 gap-y-14 tablet:gap-y-16 desktop:gap-x-24">
                    {headSection.map(section => (
                        <div key={section.id}>
                            <h1 className="text-grey-dark-100 dark:text-grey-light-100 text-2xl leading-10 font-semibold ">
                                {section.title}
                            </h1>
                            <h4 className="mt-4 text-grey-dark-100 dark:text-grey-light-100 tablet:text-lg tablet:leading-8 font-normal">
                                {section.body} <b>{section.email}</b>
                            </h4>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col bigDesktop:flex-row bigDesktop:gap-36">
                    <div className="bigDesktop:w-[440px] ml-[84px]">
                        <SubTitle subtitle="- Reach Out to Us" />
                        <Title title="Please fill out the contact form" />
                    </div>

                    <form className="flex flex-col items-start flex-1 gap-10 tablet:gap-12 mt-14 mb-[104px] tablet:mb-28 desktop:mb-36">
                        <div className="form-wrapper">
                            <span className="form-text">Full Name</span>
                            <input type="text" className="form-input" />
                        </div>
                        <div className="form-wrapper">
                            <span className="form-text">Email Address</span>
                            <input type="email" className="form-input" />
                        </div>
                        <div className="form-wrapper">
                            <span className="form-text">Subject</span>
                            <input type="email" className="form-input" />
                        </div>
                        <div className="form-wrapper">
                            <span className="form-text">Message</span>
                            <textarea className="form-input h-36 tablet:h-48 rounded-3xl"></textarea>
                        </div>
                        <input
                            type="submit"
                            value="Send"
                            className="px-6 py-3 tablet:px-10 tablet:py-4 bg-green-100 hover:bg-green-100/80 text-grey-light-100 font-bold rounded-full cursor-pointer transition-colors"
                        />
                    </form>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default Contact;
