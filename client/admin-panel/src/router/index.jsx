import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import CommonLayout from "../components/layouts/CommonLayout";
import mainRoutes from "./mainRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <CommonLayout />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: mainRoutes
            }
        ]
    }
])


export default router;