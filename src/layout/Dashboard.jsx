import { FaAmazonPay, FaBook, FaCalendarAlt, FaCartPlus, FaComment, FaHome, FaRegCalendarPlus, FaUtensils } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FaListCheck, FaUsersGear } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";
import { RiMenuFoldFill } from "react-icons/ri";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    if (isAdminLoading) {
        return <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
    }

    return (
        <div className="flex">
            <div>
                <div className="drawer z-10 md:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content absolute top-1 left-1">
                        <label htmlFor="my-drawer" className="btn bg-[#D1A054] drawer-button"><RiMenuFoldFill size={30} /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 min-h-full bg-[#D1A054] text-base-content">
                            {
                                isAdmin ? <>
                                    <li>
                                        <Link to="/dashboard/adminHome" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaHome />
                                            Admin Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/addItems" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaUtensils />
                                            add items</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manageItems" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaListCheck />
                                            manage items</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manageBooking" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaBook />
                                            Manage bookings</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/allUsers" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaUsersGear />
                                            all users</Link>
                                    </li>
                                </> :
                                    <>
                                        <li>
                                            <Link to="/dashboard/userHome" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaHome />
                                                User Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/reservation" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaCalendarAlt />
                                                reservation</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/payment" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaAmazonPay />
                                                payment history</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/cart" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaCartPlus />
                                                my cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/review" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaComment />
                                                add review</Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard/myBooking" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                                <FaRegCalendarPlus />
                                                my booking</Link>
                                        </li>
                                    </>
                            }
                            <div className="divider"></div>
                            <li>
                                <Link to="/" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                    <FaHome />
                                    Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/menu" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                    <IoMdMenu />
                                    Menu</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/shop" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                    <FaShoppingCart />
                                    Shop</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/contact" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                    <MdContacts />
                                    contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[330px] h-full min-h-screen bg-[#D1A054] cinzelFont p-3 hidden md:block">
                    <h1 className="cinzelFont text-2xl font-extrabold">BISTRO BOSS</h1>
                    <ul className="m-8 space-y-3">
                        {
                            isAdmin ? <>
                                <li>
                                    <Link to="/dashboard/adminHome" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                        <FaHome />
                                        Admin Home</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addItems" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                        <FaUtensils />
                                        add items</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageItems" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                        <FaListCheck />
                                        manage items</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageBooking" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                        <FaBook />
                                        Manage bookings</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/allUsers" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                        <FaUsersGear />
                                        all users</Link>
                                </li>
                            </> :
                                <>
                                    <li>
                                        <Link to="/dashboard/userHome" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaHome />
                                            User Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/reservation" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaCalendarAlt />
                                            reservation</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/payment" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaAmazonPay />
                                            payment history</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/cart" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaCartPlus />
                                            my cart</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/review" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaComment />
                                            add review</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/myBooking" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                            <FaRegCalendarPlus />
                                            my booking</Link>
                                    </li>
                                </>
                        }
                        <div className="divider"></div>
                        <li>
                            <Link to="/" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                <FaHome />
                                Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/menu" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                <IoMdMenu />
                                Menu</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/shop" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                <FaShoppingCart />
                                Shop</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/contact" className={"text-xl font-bold cinzelFont flex items-center gap-1"}>
                                <MdContacts />
                                contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;