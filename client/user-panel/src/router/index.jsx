import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '@/components/layouts/MainLayout';
import mainRoutes from './mainRoutes';
import Error from '@/components/pages/errorPages/Error';
import CommonLayout from '@/components/layouts/CommonLayout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <CommonLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: mainRoutes,
            }
        ]
    }
])


export default router;