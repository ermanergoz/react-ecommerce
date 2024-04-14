import logo_porto from "../assets/images/logo_porto.png";
import SearchBar from './SearchBar';
import SignInButton from './buttons/SignInButton';
import ShoppingCartButton from './buttons/ShoppingCartButton';
import { handleClick } from "./Header";
import { useTranslation } from "react-i18next";

const MiddleHeader = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-between items-center space-x-24 mx-16 my-8">
            <a href={'/'}> <img src={logo_porto} className="h-16" alt="Logo" /></a>
            <div className="w-1/2">
                <SearchBar placeholderText={t("search")} />
            </div>
            <div className="flex space-x-4 items-right">
                <SignInButton buttonLabel={t("welcome")} buttonText={t("sign_in")} onClick={() => handleClick("/page404")} />
                <ShoppingCartButton buttonLabel={t("shopping_cart")} itemAmount={0} totalCost={0.00} onClick={() => handleClick("/page404")} />
            </div>
        </div>
    )
}

export default MiddleHeader
