import {
    createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/home/Home";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/Mytoys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Blogs from "../pages/blogs/Blogs";


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
                path: '/MyToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/AddToys',
                element: <AddToys></AddToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
]);

export default router 