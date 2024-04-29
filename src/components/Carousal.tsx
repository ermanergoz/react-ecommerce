import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarousalNextArrow } from "./buttons/CarousalButton"
import { CarousalPrevArrow } from "./buttons/CarousalButton"
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

interface CarouselProps {
    children: React.ReactNode[];
    slidesToShow: number;
    buttonMargin: number;
}

const Carousel = (props: CarouselProps) => {
    const { t } = useTranslation();

    var settings = {
        infinite: props.children.length > 1,
        nextArrow: <CarousalNextArrow buttonMargin={props.buttonMargin} />,
        prevArrow: <CarousalPrevArrow buttonMargin={props.buttonMargin} />,
        slidesToShow: props.slidesToShow,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    };

    if (props.children.length > 0) {
        return (
            <Slider {...settings}>
                {props.children.map((s) => {
                    return (s);
                })}
            </Slider>);
    } else {
        return (<p>{t("nothing_to_display")}</p>);
    }
}

export default Carousel;
