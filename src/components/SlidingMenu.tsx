import ic_hamburger from "../assets/images/ic_hamburger.svg";
import ic_arrow_down from "../assets/images/ic_arrow_down.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Link from "./Link";

export default function SlidingMenu() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:border lg:border-gray-200 lg:px-4">
      <div
        className={`${isOpen ? "block" : "hidden"} bg-black`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 bg-green-600 z-50 transform transition-transform duration-300 ease-in-out`}
      >
        <button
          className="hover:text-white cursor-pointer w-full text-right p-4"
          onClick={toggleMenu}
        >
          {t("close")}
        </button>

        <nav className="mt-16">
          <Link children={t("home")} destination="/" variant="full" />
          <Link children={t("shop")} variant="full" />
          <Link children={t("products")} variant="full" />
          <Link children={t("features")} variant="full" />
          <Link children={t("blog")} variant="full" />
          <Link children={t("elements")} variant="full" />
          <Link children={t("buy_portal")} variant="full" />
          <div className="block lg:hidden">
            <Link children={t("special_offers")} variant="full" />
            <Link children={t("recipes")} variant="full" />
            <Link children={t("our_stores")} variant="full" />
            <Link children={t("track_your_order")} variant="full" />
            <Link children={t("help")} variant="full" />
            <Link children={t("wishlist")} variant="full" />
            <Link children={t("sign_in")} variant="full" />
            <Link children={t("shopping_cart")} variant="full" />
          </div>
        </nav>
      </div>
      <button className="z-50" onClick={toggleMenu}>
        <div className="flex items-center mx-8 my-4">
          <img src={ic_hamburger} className="w-8" alt="Menu" />
          <p className="hidden lg:block ml-2 mr-24 text-green-600">
            {t("all_departments")}
          </p>
          <img src={ic_arrow_down} className="hidden lg:block w-3" alt="Menu" />
        </div>
      </button>
    </div>
  );
}
