import ic_hamburger from "../assets/images/ic_hamburger.svg"
import ic_arrow_down from "../assets/images/ic_arrow_down.svg"

import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
} from "tw-elements-react";

export default function DropdownLinkButton(): JSX.Element {
    return (
        <TEDropdown className="border border-gray-200 p-4">
            <TEDropdownToggle
                tag="a"
                className="flex items-center pointer-events-auto cursor-pointer font-medium"
            >
                <img src={ic_hamburger} className="w-8" alt="Menu" />
                <p className="ml-2 mr-24 text-green-600">All Departments</p>
                <img src={ic_arrow_down} className="w-3" alt="Menu" />
            </TEDropdownToggle>

            <TEDropdownMenu>
                <TEDropdownItem>
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                        Action
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                        Another action
                    </a>
                </TEDropdownItem>
                <TEDropdownItem>
                    <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                        Something else here
                    </a>
                </TEDropdownItem>
            </TEDropdownMenu>
        </TEDropdown>
    );
}