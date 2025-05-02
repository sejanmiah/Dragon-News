import { createBrowserRouter } from "react-router";
import MainLaoyout from "../Layout/MainLaoyout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLaoyout></MainLaoyout>,
            children:[
                {
                    path:"",
                    element: <Home></Home>,
                },
                {
                    path:"/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch("/news.json")
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: '/auth/login',
                    element: <Login></Login>,
                },
                {
                    path: '/auth/registration',
                    element: <Registration></Registration>,
                },
            ]
        },
        {
            path: '/news',
            element: <h1>News layout</h1>,
        },
        {
            path: '/*',
            element: <h1>Error 404</h1>,
        },
    ]
)

export default router