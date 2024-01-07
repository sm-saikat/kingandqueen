import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'
import {PersonFill, GearFill, BellFill} from 'react-bootstrap-icons'
import { useLocation } from 'react-router-dom'


const Navbar = () => {
    const location = useLocation();

    return (
        <div className='flex justify-between items-center w-full px-4 py-6'>
            {/* left Side */}
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>{location.pathname.replace('/', '')}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            {/* Right Side */}
            <div className='flex gap-2 items-center mr-8'>
                <div className='text-lg p-2 cursor-pointer opacity-70'><PersonFill /></div>
                <div className='text-lg p-2 cursor-pointer opacity-70'><BellFill /></div>
                <div className='text-lg p-2 cursor-pointer opacity-70'><GearFill /></div>
            </div>
        </div>
    )
}


export default Navbar;