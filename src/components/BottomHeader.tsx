import DropdownMenu from "./SlidingMenu";
import ic_special_offer from "../assets/images/ic_special_offer.svg";
import ic_recipe from "../assets/images/ic_recipe.svg";
import Button from "./Button";
import { handleClick } from "./Header";
import { useTranslation } from 'react-i18next'

const BottomHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-gray-200">
      <div className="flex justify-between items-left lg:mx-16">
        <div className="flex items-center space-x-16">
          <DropdownMenu />
          <div className="hidden lg:block space-x-16">
            <button>{t("shop")}</button>
            <button>{t("products")}</button>
            <button>{t("features")}</button>
            <button>{t("blog")}</button>
            <button>{t("elements")}</button>
            <button>{t("buy_portal")}</button>

          </div>
        </div>

        <div className="flex items-center float-right space-x-8">
          <Button
            variant="inline"
            style="hidden lg:flex font-bold"
            onClick={() => handleClick("/page404")}
          >
            <>
              <img src={ic_special_offer} alt="Icon" className="object-contain h-6 px-1" />
              <p>{t("special_offers")}</p>
            </>
          </Button>

          <Button
            variant="inline"
            style="hidden lg:flex font-bold"
            onClick={() => handleClick("/page404")}
          >
            <>
              <img src={ic_recipe} alt="Icon" className="object-contain h-6 px-1" />
              <p>{t("recipes")}</p>
            </>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BottomHeader
