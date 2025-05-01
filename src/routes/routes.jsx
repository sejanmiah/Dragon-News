import { createBrowserRouter } from "react-router";
import MainLaoyout from "../Layout/MainLaoyout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
            element: <h1>Hello Auth Layout</h1>,
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