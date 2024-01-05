import { About, Contact, CustomerService, Home, Login, ProductDetail, ReturnOrder, ShippingAndReturns, Shop, TrackOrder } from '@/components/pages';


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
        path: 'shopping',
        element: <ProductDetail />
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
            },
            {
                path: 'return-order',
                element: <ReturnOrder />
            },
            {
                path: 'shipping-returns',
                element: <ShippingAndReturns />
            }
        ]
    }
]


export default userRoutes;