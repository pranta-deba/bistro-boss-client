import { useContext, useEffect } from "react";
import bg from "../../assets/others/authentication.png";
import cover from "../../assets/others/authentication2.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { googleLogin, loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = '/';
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const captcha = e.target.captcha.value;
        if (!validateCaptcha(captcha)) {
            toast.error('Captcha Not Matched.!');
            return;
        }

        try {
            await loginUser(email, password)
            toast.success('Login Successfully!');
            navigate(from);
        } catch (error) {
            console.log(error.message);
        }
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success('Login Successfully!');
                navigate(from);
            }).catch(() => {
                toast.error('Login Failed.! please try again!');
            })
    }
    return (
        <div style={{
            backgroundImage: `url("${bg}")`
        }} className="h-screen bg-cover bg-none bg-center p-12 md:p-28 flex justify-center items-center">
            <Helmet>
                <title>Bistro Boss - Login</title>
            </Helmet>
            <div style={{
                boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
                backgroundImage: `url("${bg}")`
            }} className="flex flex-col md:flex-row justify-center items-center border p-3 md:p-12">
                <div className="flex-1">
                    <img src={cover} />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label className="text-xl font-semibold">Email</label> <br />
                            <input className="w-full input rounded-none outline-none" type="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className="text-xl font-semibold">Password</label> <br />
                            <input className="w-full input rounded-none outline-none" type="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div>
                            <div className="w-full text-xl font-semibold">< LoadCanvasTemplate /></div>
                            <input className="w-full input rounded-none outline-none" type="text" name="captcha" placeholder="Type here" required />
                        </div>
                        <div>
                            <button style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} className="btn w-full text-white" type="submit">Sign In</button>
                        </div>
                    </form>

                    <div className="text-center my-4">
                        <h1 className="text-[#D1A054]">New here? <Link to={"/register"} className="font-bold">Create a New Account</Link></h1>
                        <p>Or sign in with</p>
                        <div className="flex justify-center items-center gap-3 mt-2">
                            <button onClick={handleGoogleLogin} className="p-2 border border-black rounded-full"><FaGoogle size={20} /></button>
                            <button className="p-2 border border-black rounded-full"><FaGithub size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;