import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";
import DashHome from "../pages/DashBoard/Home/Home"
import AllUsers from "../pages/DashBoard/AllUser/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/our_menu",
                element: <Menu />,
            },
            {
                path: "/our_shop/:category",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "dashHome",
                element: <DashHome />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "allUsers",
                element: <AllUsers />,
            },
        ]
    },
]);