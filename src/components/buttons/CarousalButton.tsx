import ic_arrow_right from "../../assets/images/ic_arrow_right.svg"
import ic_arrow_left from "../../assets/images/ic_arrow_left.svg"

interface CarousalButtonProps {
    onClick?: () => void;
}

export function CarousalNextArrow(props: CarousalButtonProps) {
    return (
        <button className="bg-white py-6 px-1 absolute top-1/2 right-24 z-10" onClick={props.onClick}>
            <img src={ic_arrow_right} alt="" className="h-8" />
        </button>
    );
}

export function CarousalPrevArrow(props: CarousalButtonProps) {
    return (
        <button className="bg-white py-6 px-1  absolute top-1/2 left-24 z-10" onClick={props.onClick}>
            <img src={ic_arrow_left} alt="" className="h-8" />
        </button>
    );
}
