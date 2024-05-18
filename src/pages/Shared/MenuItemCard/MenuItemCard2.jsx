
const MenuItemCard2 = ({ item }) => {
    const { name, recipe, image } = item || {};
    return (
        <div className="card bg-[#F3F3F3] shadow-xl">
            <figure className="">
                <img src={image} alt={name} className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe.slice(0, 65)}....</p>
                <div className="card-actions">
                    <button className="btn outline-none border-b-2 border-b-[#BB8506] text-[#BB8506]  uppercase hover:bg-[#1F2937] hover:border-b-[#1F2937]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard2;