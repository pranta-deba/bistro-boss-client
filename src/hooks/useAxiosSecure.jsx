import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, (err) => {
        return Promise.reject(err)
    })

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(err)
    })


    return axiosSecure;
};

export default useAxiosSecure;