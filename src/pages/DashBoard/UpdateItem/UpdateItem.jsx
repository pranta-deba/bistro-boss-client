import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUtensils } from "react-icons/fa";

const UpdateItem = () => {
    const { name, category, recipe, price, image, _id } = useLoaderData();
    const navigate = useNavigate();

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
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            if (menuRes.data.modifiedCount > 0) {
                toast.success('updated Successfully!');
                navigate('/dashboard/manageItems');
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
                        <input defaultValue={name} {...register("name", { required: true })} type="text" className="input input-bordered w-full" placeholder="Recipe name" />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={category} {...register("category", { required: true })} className="input input-bordered w-full">
                            <option value="">select category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soups</option>
                            <option value="dessert">Desserts</option>
                            <option value="drinks">drinks</option>
                            <option value="popular">Popular</option>
                            <option value="offered">Offered</option>
                        </select>
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input defaultValue={price} {...register("price", { required: true })} type="text" className="input input-bordered w-full " placeholder="Price" />
                    </label>
                    <label className="form-control w-full md:col-span-2">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered" placeholder="Recipe Details"></textarea>
                    </label>
                    <label className="form-control w-full md:col-span-2 flex flex-row">
                        <input {...register("image", { required: true })} type="file" className=" file-input-bordered w-full max-w-xs" required />
                        <img src={image} alt="" className="w-14 h-14" />
                    </label>

                    <button type="submit" className="btn text-white bg-gradient-to-l to-[#835D23] from-[#B58130] max-w-36">Update Item<FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;