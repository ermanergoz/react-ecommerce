import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import ic_arrow_right from "../assets/images/ic_arrow_right.svg";
import ic_arrow_left from "../assets/images/ic_arrow_left.svg";

interface CarouselProps {
    children: React.ReactNode[];
    slidesToShow: number;
    buttonMargin: number;
}

const Carousel = (props: CarouselProps) => {
    const { t } = useTranslation();

    var settings = {
        infinite: props.children.length > 1,
        nextArrow: <Button variant="next" buttonMargin={props.buttonMargin} children={<img src={ic_arrow_right} alt="next" />} />,
        prevArrow: <Button variant="prev" buttonMargin={props.buttonMargin} children={<img src={ic_arrow_left} alt="prev" />} />,
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
