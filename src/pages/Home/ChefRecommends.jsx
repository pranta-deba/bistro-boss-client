import SectionTitle from "../../components/SectionTitle";
import MenuItemCard2 from "../Shared/MenuItemCard/MenuItemCard2";
import useMenu from "../../hooks/useMenu";

const ChefRecommends = () => {
    const { menu } = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    return (
        <>
            <SectionTitle heading='CHEF RECOMMENDS' subHeading='Should Try' />
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-12">
                {offered.slice(0, 3).map(item => <MenuItemCard2 key={item._id} item={item} />)}
            </div>
        </>
    );
};

export default ChefRecommends;