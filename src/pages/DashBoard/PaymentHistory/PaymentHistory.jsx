import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payment/${user?.email}`);
            return data;
        }
    })

    return (
        <div className="mx-4">
            <div className="flex justify-center items-center">
                <SectionTitle heading={"PAYMENT HISTORY"} subHeading={"At a Glance!"} />
            </div>
            <div className="flex flex-col md:flex-row">
                <h1 className="text-3xl font-bold cinzelFont">Total Payments: {paymentHistory.length}</h1>
            </div>
            <div>
                <div className="overflow-auto rounded-t-3xl">
                    <table className="table">
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th>

                                </th>
                                <th>EMAIL</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((item, idx) => (
                                    <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            {item?.email}
                                        </td>
                                        <td>
                                            ${item?.price}
                                        </td>
                                        <td>
                                            {item?.status}
                                        </td>
                                        <th>
                                            {new Date(item?.date).toLocaleDateString()}
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

export default PaymentHistory;