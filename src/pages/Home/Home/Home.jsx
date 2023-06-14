import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import PopularInstructor from "../PopularInstructors/PopularInstructor";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Test/Testimonials";
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            {/* <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;