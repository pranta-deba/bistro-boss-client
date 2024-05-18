import { Parallax } from 'react-parallax';
const Cover = ({ img, title, sortDes }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero max-h-[800px] py-32 md:px-40">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" flex justify-center items-center text-center py-12 text-white">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold cinzelFont">{title}</h1>
                        <p className="mb-5 cinzelFont">{sortDes}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;