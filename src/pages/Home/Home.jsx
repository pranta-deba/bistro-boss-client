import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import FromOurMenu from "./FromOurMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <FromOurMenu />
            <CallUs />
            <ChefRecommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;