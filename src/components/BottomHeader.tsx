import DropdownMenu from "./DropdownMenu";
import ic_special_offer from "../assets/images/ic_special_offer.svg";
import ic_recipe from "../assets/images/ic_recipe.svg";
import IconButton from "./buttons/IconButton";
import { handleClick } from "./Header";
import { useTranslation } from 'react-i18next'

const BottomHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-gray-200">
      <div className="flex justify-between items-left mx-16">
        <div className="flex items-center space-x-16">
          <DropdownMenu />
          <button>{t("shop")}</button>
          <button>{t("products")}</button>
          <button>{t("features")}</button>
          <button>{t("blog")}</button>
          <button>{t("elements")}</button>
          <button>{t("buy_portal")}</button>

        </div>

        <div className="flex items-center float-right space-x-8">
          <IconButton style="font-bold" buttonText={t("special_offers")} icon={ic_special_offer} onClick={() => handleClick("/page404")} />
          <IconButton style="font-bold" buttonText={t("recipes")} icon={ic_recipe} onClick={() => handleClick("/page404")} />
        </div>
      </div>
    </div>
  )
}

export default BottomHeader
