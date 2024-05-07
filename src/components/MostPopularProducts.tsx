import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Carousel from "./Carousal";
import PopularProduct from './PopularProduct';
import img_coconut from "../assets/images/img_coconut.jpg";
import img_meat from "../assets/images/img_meat.jpg";
import img_pasta from "../assets/images/img_pasta.png";
import img_pinapple from "../assets/images/img_pinapple.jpg";
import img_banana from "../assets/images/img_banana.jpg";
import img_wine from "../assets/images/img_wine.jpg";
import img_pizza from "../assets/images/img_pizza.jpg";

const buttonClicked = () => {
    console.log("One of the most popular products clicked")
}

const MostPopular = () => {
    const { t } = useTranslation();
    const [activeButton, setActiveButton] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const buttonLabels: string[] = [t("view_all"), t("breakfast"), t("cooking"), t("frozen"), t("fruits"), t("vegetables")];
    const popularProducts: React.ReactNode[] = [
        <PopularProduct key={0} image={img_meat} productCategory={t("cooking")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={1} image={img_coconut} productCategory={t("fruits")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={2} image={img_pasta} productCategory={t("cooking")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={3} image={img_pinapple} productCategory={t("fruits")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={4} image={img_banana} productCategory={t("fruits")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={5} image={img_wine} productCategory={t("other")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />,
        <PopularProduct key={6} image={img_pizza} productCategory={t("frozen")} productName={t("product_name")} oldPrice={59.90} newPrice={49.00} onClick={buttonClicked} />
    ]
    const filteredProducts = selectedCategory === 'All' ? popularProducts : popularProducts.filter(product => t((product as React.ReactElement).props.productCategory) === selectedCategory);

    return (
        <div>
            <p className="text-2xl font-bold">{t("most_popular")}</p>
            <p className="text-sm text-gray-500">{t("popular_products")}</p>

            <div className="bg-white p-4 lg:p-8 mt-4 rounded-md">
                <div className='grid grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-4 xl:w-2/3'>
                    {buttonLabels.map((label, index) => (
                        <button
                            key={index}
                            className={`py-2 border-2 rounded-md ${activeButton === index ? 'border-green-600 text-green-600' : 'border-gray-200 text-black'}`}
                            onClick={() => {
                                setActiveButton(index);
                                setSelectedCategory(label === t("view_all") ? 'All' : label);
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className='mt-8'>
                    <Carousel buttonMargin={-52} children={filteredProducts} slidesToShow={filteredProducts.length < 6 ? filteredProducts.length : 6} />
                </div>
            </div>
        </div>
    );
}

export default MostPopular;
