import ic_hamburger from "../assets/images/ic_hamburger.svg"
import ic_arrow_down from "../assets/images/ic_arrow_down.svg"
import { useTranslation } from 'react-i18next'
import { useState } from 'react';


export default function SlidingMenu() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:border lg:border-gray-200 lg:px-4">
            <div
                className={`${isOpen ? 'block' : 'hidden'} bg-black`}
                onClick={toggleMenu}
            ></div>
            <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-green-600 z-50 transform transition-transform duration-300 ease-in-out`}>
                <button className="hover:text-white cursor-pointer w-full text-right p-4" onClick={toggleMenu}>{t("close")}</button>

                <nav className="mt-16">
                    <a href="/" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("home")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("shop")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("products")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("features")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("blog")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("elements")}
                    </a>
                    <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                        {t("buy_portal")}
                    </a>
                    <div className="block lg:hidden">
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("special_offers")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("recipes")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("our_stores")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("track_your_order")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("help")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("wishlist")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("sign_in")}
                        </a>
                        <a href="/page404" className="block w-full px-4 py-2 hover:bg-green-500">
                            {t("shopping_cart")}
                        </a>
                    </div>
                </nav>
            </div>
            <button className="z-50" onClick={toggleMenu}>
                <div className="flex items-center mx-8 my-4">
                    <img src={ic_hamburger} className="w-8" alt="Menu" />
                    <p className="hidden lg:block ml-2 mr-24 text-green-600">{t("all_departments")}</p>
                    <img src={ic_arrow_down} className="hidden lg:block w-3" alt="Menu" />
                </div>
            </button>
        </div>
    );
};
