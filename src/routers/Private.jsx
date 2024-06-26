import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const Private = ({ children }) => {
    const { user, userLoader } = useContext(AuthContext);
    if (userLoader) {
        return <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default Private;