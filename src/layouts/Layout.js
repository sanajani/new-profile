import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout