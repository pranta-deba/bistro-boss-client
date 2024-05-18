
const MenuItemCard = ({ item }) => {
    const { name, recipe, image, price } = item || {};
    return (
        <div className="flex flex-col md:flex-row gap-7  md:justify-around shadow-md p-2">
            <img style={{
                borderRadius: "0px 200px 200px 200px",
                background: "#D9D9D9",
            }} src={image} alt={name} className="w-[118px] h-[104px] object-cover" />
            <div>
                <h2 className="cinzelFont text-xl">{name} ---------------</h2>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItemCard;