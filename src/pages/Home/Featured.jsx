import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="my-20 my_featured bg-fixed">
            <div className="bg-black bg-opacity-50 pb-16 pt-5 text-white">
                <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
                <div className="flex flex-col md:flex-row items-center justify-center gap-9 px-12">
                    <div className="flex-1 flex justify-end">
                        <img src={featuredImg} alt="" className="md:max-w-[648px] md:max-h-[400px] object-cover rounded-xl" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p className="max-w-[604px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="bg-transparent btn outline-none border-b-2 border-b-white text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;