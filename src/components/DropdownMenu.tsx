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
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        Action
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        Another action
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100">
                        Something else here
                    </a>
                </TEDropdownItem>
            </TEDropdownMenu>
        </TEDropdown>
    );
}