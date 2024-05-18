import { Helmet } from "react-helmet-async";
import banner from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuItemCard2 from "../Shared/MenuItemCard/MenuItemCard2";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";

const Shop = () => {
    const { menu } = useMenu();
    const { category } = useParams();
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");

    const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex == -1 ? 0 : initialIndex);

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Our Shop</title>
            </Helmet>
            <div>
                <Cover img={banner} title={"OUR SHOP"} sortDes={"Would you like to try a dish?"} />
            </div>
            <div className="flex justify-center items-center my-8">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center mb-8">
                        <Tab><h2 className="uppercase">Salad</h2></Tab>
                        <Tab><h2 className="uppercase">pizza</h2></Tab>
                        <Tab><h2 className="uppercase">soups</h2></Tab>
                        <Tab><h2 className="uppercase">desserts</h2></Tab>
                        <Tab><h2 className="uppercase">drinks</h2></Tab>
                    </TabList>
                    <TabPanel>
                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                            {salad.map(item => <MenuItemCard2 key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                            {pizza.map(item => <MenuItemCard2 key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                            {soup.map(item => <MenuItemCard2 key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                            {dessert.map(item => <MenuItemCard2 key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                            {drinks.map(item => <MenuItemCard2 key={item._id} item={item} />)}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;