import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navItems = <>
        <li><NavLink to={"/"} className="uppercase text-md font-semibold">Home</NavLink></li>
        <li><NavLink to={"/contact"} className="uppercase text-md font-semibold">CONTACT us</NavLink></li>
        <li><NavLink to={"/dashboard"} className="uppercase text-md font-semibold">DASHBOARD</NavLink></li>
        <li><NavLink to={"/our_menu"} className="uppercase text-md font-semibold">Our Menu</NavLink></li>
        <li><NavLink to={"/our_shop/salad"} className="uppercase text-md font-semibold">Our Shop</NavLink></li>
    </>

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
                <div className="navbar-end">
                    <Link to={"/login"} className="btn bg-transparent text-white hover:text-black">Sign In</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;