import SectionTitle from "../../components/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import useMenu from "../../hooks/useMenu";

const FromOurMenu = () => {
    const { menu } = useMenu();
    const popularItems = menu.filter(item => item.category === "popular");

    return (
        <>
            <SectionTitle heading={'popular items'} subHeading={"Check it out"} />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-12">
                {popularItems.map(item => <MenuItemCard key={item._id} item={item} />)}
            </div>
            <div className="text-center mb-12">
                <button className="btn bg-transparent outline-none border-b-4 border-b-[#1F2937]">View Full  Menu</button>
            </div>
        </>
    );
};

export default FromOurMenu;