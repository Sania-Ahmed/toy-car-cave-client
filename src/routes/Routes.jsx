import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/Mytoys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Blogs from "../pages/blogs/Blogs";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import UpdateToy from "../pages/Mytoys/UpdateToy";
import Details from "../pages/details/Details";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage.JSX";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Alltoys',
                element: <AllToys></AllToys>
            },
            {
               path: '/details/:id',
               element: <PrivateRoute><Details></Details></PrivateRoute>,
               loader : ({params}) => fetch(`http://localhost:5000/myCar/${params.id}`)
            }, 
            {
                path: '/MyToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/updateToy/:id',
                element : <UpdateToy></UpdateToy>,
                loader : ({params}) => fetch(`http://localhost:5000/myCar/${params.id}`)
            },
            {
                path: '/AddToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ]

    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router 