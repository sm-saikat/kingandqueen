import {createBrowserRouter} from 'react-router-dom'
import UserLayout from '@/components/layouts/UserLayout';
import userRoutes from './userRouter';
import Error from '@/components/pages/errorPages/Error';
import AdminLayout from '@/components/layouts/AdminLayout';
import adminRoutes from './adminRouter';
import { Login } from '@/components/pages/user';
import Layout from '@/components/layouts/Layout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <UserLayout />,
                children: userRoutes,
                errorElement: <Error />
            },
            {
                path: '/admin',
                element: <AdminLayout />,
                children: adminRoutes
            }
        ]
    }
])


export default router;