import { Link , Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <Link id="itemNav" to="/Logout">Logout</Link>
      </nav>
      <Outlet />
      {/*el outlet importantisimo*/}
    </>
  )
}
export default Layout;


