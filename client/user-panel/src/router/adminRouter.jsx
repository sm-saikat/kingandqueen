import {Home, Products} from '@/components/pages/admin'


const adminRoutes = [
    {
        index: '/',
        element: <Home />
    },

    {
        path: 'products',
        element: <Products />
    }
]


export default adminRoutes