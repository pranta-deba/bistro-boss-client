import toast from "react-hot-toast";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((p, c) => p + c.price, 0)
    const handleDelete = async id => {
        try {
            const { data } = await axiosSecure.delete(`/carts/${id}`);
            if (data.deletedCount > 0) {
                toast.success("Delete successfully!")
                refetch();
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="mx-4">
            <div className="flex justify-center items-center">
                <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />
            </div>
            <div className="flex flex-col md:flex-row justify-around gap-4">
                <h1 className="text-3xl font-bold cinzelFont">Total orders: {cart.length}</h1>
                <h1 className="text-3xl font-bold cinzelFont">total price: ${totalPrice}</h1>
                <button className="btn bg-[#D1A054]">Pay</button>
            </div>
            <div>
                <div className="overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => (
                                    <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item?.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.menuName}
                                        </td>
                                        <td>${item?.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn bg-[#B91C1C]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M3 6H5H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 11V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14 11V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg></button>
                                        </th>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;