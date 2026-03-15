import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./HomeLayout/HomeLayout";
import Home from "./Component/layout/Home";
import CategoryNews from "./Component/Pages/CategoryNews";
import LoginLayout from "./HomeLayout/LoginLayout";
import Login from "./Component/Pages/Login";
import Registration from "./Component/Pages/Registration";
import NewsDetails from "./Component/Pages/NewsDetails";
import SaveNews from "./Component/Pages/SaveNews";
import PrivetRoute from "./Component/privatRoot/PrivetRoute";
import Loading from "./Component/Pages/Loading";


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
                loader: () => fetch('/news.json'),
                 hydrateFallbackElement : <Loading></Loading>
            },

        ]
    },
    {
        path: 'auth',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/registration',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: 'news/:id',
        element : <PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
        loader: () => fetch('/news.json'),
         hydrateFallbackElement : <Loading></Loading>
    },

    {
        path: 'save/:id',
        element: <SaveNews></SaveNews>,
        loader : ()=>fetch('/news.json'),
       
    }

]);

export default router;