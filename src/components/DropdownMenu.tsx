import ic_hamburger from "../assets/images/ic_hamburger.svg"
import ic_arrow_down from "../assets/images/ic_arrow_down.svg"
import { useTranslation } from 'react-i18next'
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
} from "tw-elements-react";

export default function DropdownLinkButton(): JSX.Element {
    const { t } = useTranslation();

    return (
        <TEDropdown className="border border-gray-200 p-4">
            <TEDropdownToggle
                tag="a"
                className="flex items-center pointer-events-auto cursor-pointer font-medium"
            >
                <img src={ic_hamburger} className="w-8" alt="Menu" />
                <p className="ml-2 mr-24 text-green-600">{t("all_departments")}</p>
                <img src={ic_arrow_down} className="w-3" alt="Menu" />
            </TEDropdownToggle>

            <TEDropdownMenu>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("shop")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("products")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("features")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("blog")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("elements")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("buy_portal")}
                    </a>
                </TEDropdownItem>
                <div className="block lg:hidden">
                    <hr></hr>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("special_offers")}
                        </a>
                    </TEDropdownItem>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("recipes")}
                        </a>
                    </TEDropdownItem>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("our_stores")}
                        </a>
                    </TEDropdownItem>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("track_your_order")}
                        </a>
                    </TEDropdownItem>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("help")}
                        </a>
                    </TEDropdownItem>
                    <TEDropdownItem>
                        <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                            {t("wishlist")}
                        </a>
                    </TEDropdownItem>
                <hr></hr>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("sign_in")}
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="/page404" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        {t("shopping_cart")}
                    </a>
                </TEDropdownItem>
                </div>
            </TEDropdownMenu>
        </TEDropdown>
    );
}
