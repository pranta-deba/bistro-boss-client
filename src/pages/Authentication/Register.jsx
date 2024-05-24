import bg from "../../assets/others/authentication.png";
import cover from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext, useRef } from "react";
import axios from 'axios';
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { updateUser, createUser, googleLogin } = useContext(AuthContext);
    const imageRef = useRef();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const from = '/';
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = imageRef.current.files[0];
        const formData = new FormData();
        formData.append("image", image);

        try {
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`, formData)
            // console.log(data.data.display_url);

            const create = await createUser(email, password);
            console.log(create);

            await updateUser(name, data.data.display_url)

            const { data: userInsertRes } = await axiosPublic.post('/users', {
                name,
                email
            });
            if (userInsertRes.insertedId) {
                toast.success('Sign up Successfully!');
                navigate(from);
            }

        } catch (error) {
            console.log(error.message);
        }
    }
    const handleGoogleLogin = async () => {
        googleLogin()
            .then((res) => {
                axiosPublic.post('/users', {
                    name: res.user?.displayName,
                    email: res.user?.email
                }).then(() => {
                    toast.success('Sign up Successfully!');
                    navigate(from);
                })
            }).catch(() => {
                toast.error('Login Failed.! please try again!');
            })
    }
    return (
        <div style={{
            backgroundImage: `url("${bg}")`
        }} className="h-screen bg-cover bg-none bg-center p-12 md:p-28 flex justify-center items-center">
            <Helmet>
                <title>Bistro Boss - Register</title>
            </Helmet>
            <div style={{
                boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
                backgroundImage: `url("${bg}")`
            }} className="flex flex-col md:flex-row-reverse justify-center items-center border p-3 md:p-12">
                <div className="flex-1">
                    <img src={cover} />
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-center mb-4">Sign Up</h1>
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="text-xl font-semibold">Name</label> <br />
                            <input {...register("name", { required: true })} className="w-full input rounded-none outline-none" type="text" name="name" placeholder="Enter your name" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="text-xl font-semibold">Email</label> <br />
                            <input {...register("email", { required: true })} className="w-full input rounded-none outline-none" type="email" name="email" placeholder="Enter your email" />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="text-xl font-semibold">Password</label> <br />
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} className="w-full input rounded-none outline-none" type="password" name="password" placeholder="Enter your password" />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="text-xl font-semibold">Image</label> <br />
                            <input ref={imageRef} type="file" name="image" required />
                        </div>
                        <div>
                            <button style={{ backgroundColor: "rgba(209, 160, 84, 0.70)" }} className="btn w-full text-white" type="submit">Sign Up</button>
                        </div>
                    </form>

                    <div className="text-center my-4">
                        <h1 className="text-[#D1A054]">Already registered? <Link to={"/login"} className="font-bold">Go to log in</Link></h1>
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

export default Register;