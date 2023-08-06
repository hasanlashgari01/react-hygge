import Blog from "../../components/main/Blog";
import Categories from "../../components/main/Categories";
import Hero from "../../components/main/Hero";
import NewsLetter from "../../components/main/NewsLetter";
import Products from "../../components/main/Products";
import Reviews from "../../components/main/Reviews";
import useTitle from "../../components/main/SubTitle";
import WhyUs from "../../components/main/WhyUs";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";

function Home() {
    useTitle("HomePage");

    return (
        <>
            <Header />
            <Hero
                subtitle="- Skincare Products"
                title="We Offer the Best Products for your Skin"
                imageMobile="/public/images/hero-mobile.png"
                imageDesktop="/public/images/hero-desktop.png"
            />
            <Categories />
            <Products />
            <WhyUs />
            <Reviews />
            <Blog />ّ
            <NewsLetter />
            <Footer />
        </>
    );
}

export default Home;
