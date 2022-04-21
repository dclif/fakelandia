import { Outlet } from "react-router";
import Nav from "./Nav"

const Layout: React.FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout