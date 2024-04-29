import PopularDepartment from "../components/PopularDepartment";
import { PopularDepartmentProps } from "../components/PopularDepartment";
import { useTranslation } from "react-i18next";
import img_cooking from "../assets/images/img_cooing.png";
import img_fruits from "../assets/images/img_fruits.png";
import img_vegetables from "../assets/images/img_vegetables.png";
import img_breakfast from "../assets/images/img_breakfast.png"

const PopularDepartments = () => {
    const { t } = useTranslation();

    let popularDepartments: PopularDepartmentProps[] = [
        { title: t("cooking"), productCountText: t("product_count", { PRODUCT_COUNT: 4 }), image: img_cooking, onClick: () => console.log('Cooking') },
        { title: t("fruits"), productCountText: t("product_count", { PRODUCT_COUNT: 10 }), image: img_fruits, onClick: () => console.log('Fruits') },
        { title: t("vegetables"), productCountText: t("product_count", { PRODUCT_COUNT: 1 }), image: img_vegetables, onClick: () => console.log('Vegetables') },
        { title: t("breakfast"), productCountText: t("product_count", { PRODUCT_COUNT: 8 }), image: img_breakfast, onClick: () => console.log('Breakfast') },
    ];

    return (
        <div>
            <p className="text-2xl font-bold">{t("popular_departments")}</p>
            <p className="text-sm text-gray-500">{t("often_bought_products")}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mt-4">
                {popularDepartments.map((popularDepartment) => {
                    return (
                        <PopularDepartment key={popularDepartment.title} title={popularDepartment.title} productCountText={popularDepartment.productCountText} image={popularDepartment.image} onClick={popularDepartment.onClick} />
                    );
                })}
            </div>
        </div>
    );
}

export default PopularDepartments;
