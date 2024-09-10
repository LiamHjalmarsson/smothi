import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "../pages/Auth/Login";
import Root, { categoriesLoader } from "../pages/Root";
import SignUp, { singUpAction } from "../pages/Auth/SignUp";
import Error from "../pages/Error/Error";
import Menu, { productsLoader } from "../pages/Menu/Menu";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import Product, { productLoader } from "../pages/Product/Product";
// import Search from "../pages/Search/Search";
import Checkout from "../pages/Cart/Checkout";
import CartRoot from "../pages/Cart/CartRoot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: categoriesLoader,
        errorElement: <Error />,
        id: "root",
        children: [
            {
                index: true,
                element: <Menu />,
                loader: productsLoader,
            },
            {
                path: "product/:id",
                element: <Product />,
                loader: productLoader,
            },
            // {
            //     path: "search",
            //     element: <Search />,
            //     loader: productsLoader,
            // },
            {
                path: "cart",
                element: <CartRoot />,
                children: [
                    {
                        index: true,
                        element: <Cart />,
                    },
                    {
                        path: "checkout",
                        element: <Checkout />
                    }
                ]
            },
            {
                path: "profile/:id",
                element: <Profile />,
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
    }
]);