import {Link, Outlet} from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <div className="header">
                <Link to="/">Projects</Link>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
                <Link to="/login">Login</Link>
            </div>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
