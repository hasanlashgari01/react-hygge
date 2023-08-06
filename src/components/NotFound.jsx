import Header from "../layouts/main/Header";
import Footer from "../layouts/main/Footer";

function NotFound() {
    return (
        <>
            <Header />
            <div className="space-container flex justify-center items-center py-60 text-6xl font-black text-green-100">404 Not Found 404</div>
            <Footer />
        </>
    );
}

export default NotFound;
