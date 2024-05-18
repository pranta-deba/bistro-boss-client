import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";

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
        ]
    },
]);