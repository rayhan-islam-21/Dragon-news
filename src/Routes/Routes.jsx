import { createBrowserRouter } from "react-router";
import Header from "../Components/Header/Header";
import Root from "../Root/Root";
import HomeLayOut from "../Layouts/HomeLayOuts/HomeLayOut,";
import Home from "../Pages/Home/Home";
import Catagorynews from "../Pages/Catagorynews/Catagorynews";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/catagory/:id",
                Component:Catagorynews
            }
        ]
    }
])

export default router