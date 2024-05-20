import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const MenuItemCard2 = ({ item }) => {
    const { name, recipe, image } = item || {};
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = async (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: food._id,
                email: user.email,
                menuName: food.name,
                image,
                price: food.price
            }

            try {
                const { data } = await axiosSecure.post("/carts", cartItem);
                if (data.insertedId) {
                    toast.success('Item Added to Cart successfully!');
                    refetch();
                }

            } catch (error) {
                console.log(error.message);
            }

        } else {
            toast.error('Please Login First!');
        }
    }
    return (
        <div className="card bg-[#F3F3F3] shadow-xl">
            <figure className="">
                <img src={image} alt={name} className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe.slice(0, 65)}....</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn outline-none border-b-2 border-b-[#BB8506] text-[#BB8506]  uppercase hover:bg-[#1F2937] hover:border-b-[#1F2937]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard2;