import { withChakraProvider } from '@/HOC/ChakraProviderHOC'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
      <p>Admin Header</p>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default withChakraProvider(AdminLayout);