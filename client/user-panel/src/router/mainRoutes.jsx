import { About, Contact, CustomerService, Home, Login, Shop, TrackOrder } from '@/components/pages';


const userRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'customer-service',
        element: <CustomerService />,
        children: [
            {
                path: 'contact-us',
                element: <Contact />
            },
            {
                path: 'track-order',
                element: <TrackOrder />
            }
        ]
    }
]


export default userRoutes;