import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./HomeLayout/HomeLayout";
import Home from "./Component/layout/Home";
import CategoryNews from "./Component/Pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'categories/:id',
                element: <CategoryNews></CategoryNews>,
                loader : ()=>fetch('/news.json')

            }
        ]
    }
]);

export default router;