import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                image: res.data.data.display_url,
                recipe: data.recipe,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            if (menuRes.data.insertedId) {
                toast.success('added Successfully!');
            }
        }

    }
    return (
        <div className="md:mx-4">
            <div className="flex justify-center items-center">
                <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new?"} />
            </div>
            <div className="bg-[#F3F3F3] flex justify-center items-center mx-4 md:mx-12 p-4 md:p-12 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full grid md:grid-cols-2 gap-3">
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" className="input input-bordered w-full" placeholder="Recipe name" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select {...register("category", { required: true })} className="input input-bordered w-full">
                            <option value="">select category</option>
                            <option value="salad">SALAD</option>
                            <option value="pizza">Pizza</option>
                            <option value="soups">Soups</option>
                            <option value="desserts">Desserts</option>
                            <option value="drinks">drinks</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input {...register("price", { required: true })} type="text" className="input input-bordered w-full " placeholder="Price" />
                    </label>
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                    </label>
                    <label className="form-control w-full md:col-span-2">
                        <input {...register("image", { required: true })} type="file" className=" file-input-bordered w-full max-w-xs" />
                    </label>

                    <button type="submit" className="btn text-white bg-gradient-to-l to-[#835D23] from-[#B58130] max-w-36">Add Item<FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;