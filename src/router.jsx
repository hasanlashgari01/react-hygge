import NotFound from "./components/NotFound";
// Main
import About from "./pages/main/About";
import Cart from "./pages/main/Cart";
import CategoryProducts from "./pages/main/Category";
import Contact from "./pages/main/Contact";
import Faq from "./pages/main/Faq";
import Index from "./pages/main/Index";
import Login from "./pages/main/Login";
import ProductPage from "./pages/main/ProductPage";
import Register from "./pages/main/Register";
import Search from "./pages/main/Search";
import Blogs from "./pages/main/Blogs";
// Admin Dashboard
import AdminPanel from "./pages/panel-admin/AdminPanel";
import PAdminAdmins from "./pages/panel-admin/Admins";
import PAdminIndex from "./pages/panel-admin/Index";
import PAdminOff from "./pages/panel-admin/Off";
import PAdminProducts from "./pages/panel-admin/Products";
import Profile from "./pages/panel-admin/Profile";
import PAdminUsers from "./pages/panel-admin/Users";
// Privates
import LoginPrivate from "./components/main/Private/LoginPrivate";
import PAdminPrivate from "./components/panel-admin/Private/PAdminPrivate";
import Blog from "./pages/main/Blog";

export const routes = [
    { path: "/", element: <Index /> },
    { path: "/category/:categoryId", element: <CategoryProducts /> },
    { path: "/product/:productId", element: <ProductPage /> },
    { path: "/about", element: <About /> },
    { path: "/faq", element: <Faq /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart /> },
    { path: "/blogs/:blogId", element: <Blog /> },
    { path: "/blogs", element: <Blogs /> },
    {
        path: "/register",
        element: (
            <LoginPrivate>
                <Register />
            </LoginPrivate>
        ),
    },
    {
        path: "/login",
        element: (
            <LoginPrivate>
                <Login />
            </LoginPrivate>
        ),
    },
    { path: "/search", element: <Search /> },
    { path: "/*", element: <NotFound /> },
    // Admin Panel
    {
        path: "/p-admin/*",
        element: (
            <PAdminPrivate>
                <AdminPanel />
            </PAdminPrivate>
        ),
        children: [
            { path: "index", element: <PAdminIndex /> },
            { path: "users", element: <PAdminUsers /> },
            { path: "admins", element: <PAdminAdmins /> },
            { path: "products", element: <PAdminProducts /> },
            { path: "off", element: <PAdminOff /> },
            { path: "profile", element: <Profile /> },
        ],
    },
];
