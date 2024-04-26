import ReactStars from "react-rating-stars-component";
import ic_heart from "../assets/images/ic_heart.svg"

interface PopularProductProps {
  image: string;
  productCategory: string;
  productName: string;
  oldPrice: number;
  newPrice: number;
  onClick: () => void;
}

const calculateDiscountPercentage = (oldPrice: number, newPrice: number): number => {
  if (oldPrice === 0) return 0;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}

const PopularProduct = (props: PopularProductProps) => {
  const discountPercentage = calculateDiscountPercentage(props.oldPrice, props.newPrice);

  return (
    <div className="cursor-pointer m-4" onClick={props.onClick}>
      <div className="relative flex">
        <img className="h-56 w-48" src={props.image} alt="Coconut" />
        <p className={"text-white absolute inset-0 z-10 bg-red-600 rounded-sm flex justify-center items-center h-8 w-16"}>
          -{discountPercentage}%
        </p>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <img src={ic_heart} className="w-6 border border-red-600 p-1" alt="Favorite" />
        <p className="text-sm text-gray-500">{props.productCategory}</p>
      </div>
      <p>{props.productName}</p>
      <ReactStars />
      <div className="flex flex-row items-center space-x-2">
        <s className="text-gray-500">${props.oldPrice}</s>
        <p className="text-lg font-medium">${props.newPrice}</p>
      </div>
    </div>
  )
}

export default PopularProduct;
