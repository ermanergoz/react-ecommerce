import ic_arrow_right from "../../assets/images/ic_arrow_right.svg"
import ic_arrow_left from "../../assets/images/ic_arrow_left.svg"

interface CarousalButtonProps {
    onClick?: () => void;
    buttonMargin: number;
}

export function CarousalNextArrow(props: CarousalButtonProps) {
    const rightValue = `${props.buttonMargin}px`;
    return (
        <button className="bg-white py-6 px-1 absolute top-1/2 z-10 border" style={{ right: rightValue }} onClick={props.onClick}>
            <img src={ic_arrow_right} alt="Next" className="h-8" />
        </button>
    );
}

export function CarousalPrevArrow(props: CarousalButtonProps) {
    const leftValue = `${props.buttonMargin}px`;
    return (
        <button className="bg-white py-6 px-1 absolute top-1/2 z-10 border" style={{ left: leftValue }} onClick={props.onClick}>
            <img src={ic_arrow_left} alt="Prev" className="h-8" />
        </button>
    );
}
