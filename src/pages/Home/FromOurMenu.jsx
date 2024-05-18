import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";

const FromOurMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json').then(res => res.json()).then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        });
    }, [])

    return (
        <>
            <SectionTitle heading={'popular items'} subHeading={"Check it out"} />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-12">
                {menu.map(item => <MenuItemCard key={item._id} item={item} />)}
            </div>
            <div className="text-center mb-12">
                <button className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">View Full  Menu</button>
            </div>
        </>
    );
};

export default FromOurMenu;