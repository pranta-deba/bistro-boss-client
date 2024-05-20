import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [carts] = useCart();

    const navItems = <>
        <li><NavLink to={"/"} className="uppercase text-md font-semibold">Home</NavLink></li>
        <li><NavLink to={"/contact"} className="uppercase text-md font-semibold">CONTACT us</NavLink></li>
        <li><NavLink to={"/dashboard"} className="uppercase text-md font-semibold">DASHBOARD</NavLink></li>
        <li><NavLink to={"/our_menu"} className="uppercase text-md font-semibold">Our Menu</NavLink></li>
        <li><NavLink to={"/our_shop/salad"} className="uppercase text-md font-semibold">Our Shop</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut();
    }

    return (
        <>
            <div className="navbar fixed top-0 z-10 text-white bg-black bg-opacity-60 max-w-[1536px] w-full mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-stone-400 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="text-xl flex flex-col">
                        <span className="text-2xl font-black cinzelFont">BISTRO BOSS</span>
                        {/* <span className="cinzelFont text-2xl font-bold">Restaurant</span> */}
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className="dropdown">
                        <div role="button" className="btn btn-ghost btn-circle">
                            <Link to={"/dashboard/cart"} className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{carts.length}</span>
                            </Link>
                        </div>
                    </div>
                    {!user ? <div className="">
                        <Link to={"/login"} className="btn bg-transparent text-white hover:text-black">Sign In</Link>
                    </div>
                        :
                        <div className="">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="m-1">
                                    <div className="avatar">
                                        <div title={user?.displayName} className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>}
                </div>
            </div>
        </>
    );
};

export default Navbar;