import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "../pages/Auth/Login";
import Root from "../pages/Root";
import SignUp, { singUpAction } from "../pages/Auth/SignUp";
import Error from "../pages/Error/Error";
import Menu, { productsLoader } from "../pages/Menu/Menu";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import Product, { productLoader } from "../pages/Product/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Menu />,
                loader: productsLoader,
            },
            {
                path: ":id",
                element: <Product />,
                loader: productLoader,
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "profile",
                element: <Profile />,
                // children:[
                //     {

                //     }
                // ]
            }
        ]
    },
    {
        path: "login",
        action: loginAction,
        element: <Login />
    },
    {
        path: "signup",
        action: singUpAction,
        element: <SignUp />
    },
]);