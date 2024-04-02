import React, { useState } from "react";
import ic_arrow_right from "../assets/images/ic_arrow_right.svg";
import ic_arrow_left from "../assets/images/ic_arrow_left.svg"

interface CarouselDefaultProps {
  slides: string[];
}

const CarouselDefault = (props: CarouselDefaultProps) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? props.slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === props.slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
      className={`flex transition ease-out duration-400 max-h-[480px]`}
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {props.slides.map((s) => {
        return (
          <img src={s as string} key={s} className="object-cover" />
        );
      })}
    </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <div className="bg-gray-200 h-16 flex items-center">
            <img src={ic_arrow_left} alt="Previous" className="h-8" />
          </div>
        </button>
        <button onClick={nextSlide}>
          <div className="bg-gray-200 h-16 flex items-center">
            <img src={ic_arrow_right} alt="Next" className="bg-gray-200 h-8" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CarouselDefault;
