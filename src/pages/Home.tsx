import Carousel from '../components/Carousal'
import banner_1 from "../assets/images/banner_1.png"
import banner_2 from "../assets/images/banner_2.jpg"
import banner_3 from "../assets/images/banner_3.jpg"
import Services from "../components/Services"

const Home = () => {
    let slides = [
        banner_1,
        banner_2,
        banner_3
    ];

    return (
        <div className='bg-gray-200'>
            <Carousel slides={slides} />
            <div className='flex justify-center mx-16 my-8'>
                <Services />
            </div>
        </div>
    )
}

export default Home
