import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, userLoader } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    if (userLoader || isAdminLoading) {
        return <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>

};

export default AdminRoute;