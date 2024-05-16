import logo_porto from "../assets/images/logo_porto.png";
import SearchBar from './SearchBar';
import Button from './Button';
import ic_shopping_cart from "../assets/images/ic_shopping_cart.svg";
import { handleClick } from "./Header";
import { useTranslation } from "react-i18next";
import Link from "./Link";
import ic_profile from "../assets/images/ic_profile.svg";

const MiddleHeader = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-between items-center space-x-24 mx-16 my-8">
            <Link destination={'/'}>
                <img src={logo_porto} className="h-16" alt="Logo" />
            </Link>

            <div className="w-1/2">
                <SearchBar placeholderText={t("search")} />
            </div>
            <div className="flex space-x-4 items-right">
                <Button
                    variant="inline"
                    style="hidden lg:flex font-bold"
                    onClick={() => handleClick("/page404")}
                >
                    <>
                        <img src={ic_profile} alt="Icon" className="h-12 px-1" />
                        <div className="flex-colummn">
                            <p className={"text-left text-sm text-gray-500"}>{t("welcome")}</p>
                            <p className={"font-bold"}>{t("sign_in")}</p>
                        </div></>
                </Button>

                <Button
                    variant="inline"
                    style="hidden lg:flex font-bold"
                    onClick={() => handleClick("/page404")}
                >
                    <div className="relative">
                        <img src={ic_shopping_cart} alt="Icon" className="h-12 px-1" />
                        <p className="absolute inset-y-0 right-1 text-sm rounded-full bg-red-600 text-white h-5 w-5">{0}</p>
                    </div>
                    <div className="flex-colummn">
                        <p className={"text-left text-sm text-gray-500"}>{t("shopping_cart")}</p>
                        <p className={"text-left text-red-600"}>$ 0.00</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default MiddleHeader
