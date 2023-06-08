import Navbar from "../component/Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Layout