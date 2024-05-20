import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
    const { userLoader } = useContext(AuthContext);
    if (userLoader) {
        return <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
    }
    return (
        <div className="max-w-[1536px] w-full mx-auto">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;