import { useTranslation } from "react-i18next";
import Carousel from "./Carousal";
import PopularProduct from "./PopularProduct";
import img_coffee from "../assets/images/img_coffee.jpg";
import img_grape from "../assets/images/img_grape.jpg";
import img_magic_toast from "../assets/images/img_magic_toast.jpg";
import img_watermelon from "../assets/images/img_watermelon.jpg";
import img_banana from "../assets/images/img_banana.jpg";
import img_pizza from "../assets/images/img_pizza.jpg";

const buttonClicked = () => {
  console.log("One of the most popular products clicked");
};

const WeeklySpecials = () => {
  const { t } = useTranslation();

  const products: React.ReactNode[] = [
    <PopularProduct
      key={0}
      image={img_coffee}
      productCategory={t("other")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
    <PopularProduct
      key={1}
      image={img_grape}
      productCategory={t("fruits")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
    <PopularProduct
      key={2}
      image={img_magic_toast}
      productCategory={t("breakfast")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
    <PopularProduct
      key={3}
      image={img_watermelon}
      productCategory={t("fruits")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
    <PopularProduct
      key={4}
      image={img_banana}
      productCategory={t("fruits")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
    <PopularProduct
      key={5}
      image={img_pizza}
      productCategory={t("frozen")}
      productName={t("product_name")}
      oldPrice={59.9}
      newPrice={49.0}
      onClick={buttonClicked}
    />,
  ];

  return (
    <div>
      <p className="text-2xl font-bold">{t("this_weeks_specials")}</p>
      <p className="text-sm text-gray-500">{t("special_brands")}</p>

      <div className="bg-white p-4 lg:p-8 mt-4 rounded-md border border-red-600">
        <Carousel
          buttonMargin={-52}
          children={products}
          slidesToShow={products.length < 6 ? products.length : 6}
        />
      </div>
    </div>
  );
};

export default WeeklySpecials;
