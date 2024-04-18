import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarousalNextArrow } from "./buttons/CarousalButton"
import { CarousalPrevArrow } from "./buttons/CarousalButton"
import Slider from "react-slick";

interface CarouselProps {
    slides: string[];
}

const Carousel = (props: CarouselProps) => {
    var settings = {
        infinite: true,
        nextArrow: <CarousalNextArrow />,
        prevArrow: <CarousalPrevArrow />
    };

    return (
        <Slider {...settings}>
            {props.slides.map((s) => {
                return (
                    <img src={s as string} key={s} className="max-h-[480px] w-full" />
                );
            })}
        </Slider>
    );
}

export default Carousel;
