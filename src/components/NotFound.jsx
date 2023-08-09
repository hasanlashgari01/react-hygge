import Header from "../layouts/main/Header";
import Footer from "../layouts/main/Footer";
import SmoothScrollLink from "./SmoothScrollLink";

function NotFound() {
    return (
        <>
            <Header />
            <div className="space-container flex flex-col items-center h-screen">
                <h1 className="my-28 text-6xl font-black text-green-100">404 Not Found 404</h1>
                <SmoothScrollLink
                    to="/"
                    className="text-lg font-bold bg-green-10 text-green-100 py-4 px-8 rounded-lg hover:scale-125 transition-all duration-200 ease-linear">
                    {" "}
                    Go back home{" "}
                </SmoothScrollLink>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;
