
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="max-w-[424px] mx-auto text-center my-12">
            <p className="text-[#D99904] text-xl font-normal">---{subHeading}---</p>
            <hr />
            <h2 className="text-4xl font-normal my-2 uppercase">{heading}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;