import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckOutFrom = () => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((p, c) => p + c.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice]);


    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "anonymous",
                    email: user?.email || "anonymous",
                },
            }
        })
        if (confirmError) {
            toast.error('confirm error');
        } else {
            if (paymentIntent.status === 'succeeded') {
                console.log('confirm intent: ', paymentIntent);
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(), //utc convert.use moment js
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    transitionId: paymentIntent.id,
                    status: "pending"
                }
                const { data } = await axiosSecure.post("/payment", payment);
                console.log(data);
                refetch();
                toast.success("payment success");
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-[60%] mx-auto border p-4 rounded-xl space-y-8">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="text-right">
                <button className="btn text-white bg-gradient-to-l to-[#835D23] from-[#B58130] max-w-36" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckOutFrom;