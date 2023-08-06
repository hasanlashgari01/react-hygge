import Breadcrumbs from "../../components/main/Breadcrumbs";
import FaqSection from "../../components/main/FaqSection";
import NewsLetter from "../../components/main/NewsLetter";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";

function Faq() {
    return (
        <div>
            <Header />
            <div className="space-container">
                <Breadcrumbs />
                <div>
                    <SubTitle subtitle="- Find the Answers" />
                    <Title title="Frequently Asked Questions" />
                </div>
                <FaqSection />
            </div>
            <NewsLetter />
            <Footer />
        </div>
    );
}

export default Faq;
