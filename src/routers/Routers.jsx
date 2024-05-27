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
import Private from "./Private";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageMenu from "../pages/DashBoard/ManageMenu/ManageMenu";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/DashBoard/Peyment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";

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
        element: <Private><Dashboard /></Private>,
        children: [
            {
                path: "dashHome",
                element: <DashHome />,
            },
            // users routes
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "payment",
                element: <Payment />,
            },
            {
                path: "payment_history",
                element: <PaymentHistory />,
            },
            //admin routes
            {
                path: "allUsers",
                element: <AdminRoute><AllUsers /></AdminRoute>,
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems /></AdminRoute>,
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageMenu /></AdminRoute>,
            },
            {
                path: "updateItems/:id",
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    },
]);