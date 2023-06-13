import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import PopularInstructor from "../PopularInstructors/PopularInstructor";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <PopularClasses></PopularClasses> */}
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;