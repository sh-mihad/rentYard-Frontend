import { createBrowserRouter } from "react-router-dom";
import GetStartPage from "../pages/get-start";
import HomePage from "../pages/home";
import InfoPage from "../pages/info";
import PaymentPage from "../pages/payment";

export const route = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/get-start",
        element:<GetStartPage/>
    },
    {
        path:"/information",
        element:<InfoPage/>
    },
    {
        path:"/payment",
        element:<PaymentPage/>
    },

])