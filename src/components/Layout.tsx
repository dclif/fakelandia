import { Outlet } from "react-router";
import Nav from "./Nav"
import Footer from "./Footer"

const Layout: React.FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout