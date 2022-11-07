import { Link , Outlet } from "react-router-dom"

const SectionOff = () => {
  return (
    <>
      <nav>
        <Link id="itemNav" to="/Login">Login</Link>
      </nav>
      <Outlet />
      {/*el outlet importantisimo*/}
    </>
  )
}
export default SectionOff;


