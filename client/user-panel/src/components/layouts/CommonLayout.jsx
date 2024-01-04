import { Outlet, ScrollRestoration } from "react-router-dom"


const CommonLayout = () => {
  return (
    <>
        <ScrollRestoration />
        <Outlet />
    </>
  )
}

export default CommonLayout