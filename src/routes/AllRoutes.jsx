import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "../pages/auth/Login";
import Root, { categoriesLoader } from "../pages/Root";
import SignUp, { singUpAction } from "../pages/auth/SignUp";
import Error from "../pages/error/Error";
import Menu, { productsLoader } from "../pages/menu/Menu";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Product, { productLoader } from "../pages/product/Product";
import Search from "../pages/search/Search";
import Checkout from "../pages/cart/Checkout";
import CartRoot from "../pages/cart/CartRoot";

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
            {
                path: "search",
                element: <Search />,
                loader: productsLoader,
            },
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