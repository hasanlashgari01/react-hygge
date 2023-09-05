import NotFound from "./components/NotFound";
// Main
import About from "./pages/main/About";
import CategoryProducts from "./pages/main/Category";
import Contact from "./pages/main/Contact";
import Faq from "./pages/main/Faq";
import Index from "./pages/main/Index";
import Login from "./pages/main/Login";
import ProductPage from "./pages/main/ProductPage";
import Register from "./pages/main/Register";
import Search from "./pages/main/Search";
import Blogs from "./pages/main/Blogs";
import Blog from "./pages/main/Blog";
// Privates
import LoginPrivate from "./Private/LoginPrivate";
import PAdminPrivate from "./Private/PAdminPrivate";
import PUserPrivate from "./Private/PUserPrivate";
// Admin Dashboard
import AdminPanel from "./pages/panel-admin/AdminPanel";
import PAdminAdmins from "./pages/panel-admin/Admins";
import PAdminIndex from "./pages/panel-admin/Index";
import PAdminOff from "./pages/panel-admin/Off";
import PAdminProducts from "./pages/panel-admin/Products";
import PAdminCategories from "./pages/panel-admin/Category";
import Profile from "./pages/panel-admin/Profile";
import PAdminUsers from "./pages/panel-admin/Users";
import PAdminBlogs from "./pages/panel-admin/Blog";
// User Dashboard
import UserPanel from "./pages/panel-user/UserPanel";
import PUserCart from "./pages/panel-user/Cart";
import PUserLikes from "./pages/panel-user/Likes";
import PUserBookmarks from "./pages/panel-user/Bookmarks";
import PUserProfile from "./pages/panel-user/Profile";

export const routes = [
    { path: "/", element: <Index /> },
    { path: "/category/:shortName", element: <CategoryProducts /> },
    { path: "/product/:productId", element: <ProductPage /> },
    { path: "/about", element: <About /> },
    { path: "/faq", element: <Faq /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/blogs/:blogId", element: <Blog /> },
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
            { path: "category", element: <PAdminCategories /> },
            { path: "off", element: <PAdminOff /> },
            { path: "blog", element: <PAdminBlogs /> },
            { path: "profile", element: <Profile /> },
        ],
    },
    // User Panel
    {
        path: "/my-account/*",
        element: (
            <PUserPrivate>
                <UserPanel />
            </PUserPrivate>
        ),
        children: [
            { path: "cart", element: <PUserCart /> },
            { path: "likes", element: <PUserLikes /> },
            { path: "bookmarks", element: <PUserBookmarks /> },
            { path: "profile", element: <PUserProfile /> },
        ],
    },
];
