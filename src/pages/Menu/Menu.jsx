import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../hooks/useMenu";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import SectionTitle from "../../components/SectionTitle";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import { Link } from "react-router-dom";

const Menu = () => {
    const { menu } = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Our Menu</title>
            </Helmet>
            <div>
                <Cover img={menuImg} title={"OUR MENU"} sortDes={"Would you like to try a dish?"} />
                <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-12">
                    {offered.map(item => <MenuItemCard key={item._id} item={item} />)}
                </div>
                <div className="text-center mb-12">
                    <Link to={`/our_shop/${"all"}`} className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
            <div>
                <Cover img={dessertImg} title={"DESSERTS"} sortDes={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center my-12 ">
                    {dessert.map(item => <MenuItemCard key={item._id} item={item} />)}
                </div>
                <div className="text-center mb-12">
                    <Link to={`/our_shop/${"desserts"}`} className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
            <div>
                <Cover img={pizzaImg} title={"PIZZA"} sortDes={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center my-12 ">
                    {pizza.map(item => <MenuItemCard key={item._id} item={item} />)}
                </div>
                <div className="text-center mb-12">
                    <Link to={`/our_shop/${"pizza"}`} className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
            <div>
                <Cover img={saladImg} title={"SALADS"} sortDes={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center my-12 ">
                    {salad.map(item => <MenuItemCard key={item._id} item={item} />)}
                </div>
                <div className="text-center mb-12">
                    <Link to={`/our_shop/${"salad"}`} className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
            <div>
                <Cover img={soupImg} title={"SOUPS"} sortDes={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center my-12 ">
                    {soup.map(item => <MenuItemCard key={item._id} item={item} />)}
                </div>
                <div className="text-center mb-12">
                    <Link to={`/our_shop/${"soups"}`} className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;