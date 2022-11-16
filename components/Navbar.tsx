import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import NavbarOptionsData from './dataSource/navbar-options.json';

// Radix UI Components and Icons
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function Navbar() {
    const navbarOptionsRef = useRef(NavbarOptionsData);
    return (
        <div className="navbar py-6 flex flex-row items-center justify-between">
            <Link href="/" className="navbar-logo-wrapper flex flex-row items-center justify-start w-fit h-auto gap-3 cursor-pointer select-none">
                <Image src="/hekors-logo.png" alt="hekors-logo" width="46" height="46" priority />
                <span className="navbar-logo-title-wrapper text-black text-sm flex flex-col items-start justify-center font-semibold tracking-tighter">
                    <span className="navbar-logo-title-HEKORS-text-wrapper uppercase select-none">{"HEKORS"}</span>
                    <span className="navbar-logo-title-COMMUNITY-text-wrapper select-none">{"Community"}</span>
                </span>
            </Link>
            <div className="navbar-options-list-wrapper">
                <ul className="navbar-options-list flex flex-row items-center justify-end gap-8">
                    {navbarOptionsRef?.current?.map((navbarOption, navbarOptionIndex) => (
                        navbarOption?.isDropdown
                            ? <DropdownMenu.Root key={navbarOptionIndex}>
                                <DropdownMenu.Trigger asChild>
                                    <button className="dropdown-button text-sm text-gray-600 font-normal font-sans flex flex-row items-center justify-between gap-2">
                                        <span className="navbar-option-label-wrapper">{navbarOption?.label}</span>
                                        <span className="varbar-option-arrow-icon-wrapper">
                                            <CaretDownIcon />
                                        </span>
                                    </button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                                        <div className="dropdown-content-title-description-wrapper mb-4 px-2 cursor-default select-none">
                                            <h2 className="dropdown-option-title text-base font-semibold text-gray-800">
                                                {navbarOption?.dropdownContent?.dropdownTitle}
                                            </h2>
                                            <p className="dropdown-option-description leading-tight text-xs font-normal text-gray-400">
                                                {navbarOption?.dropdownContent?.dropdownDescription}
                                            </p>
                                        </div>
                                        {navbarOption?.dropdownContent?.dropdownOptionsList?.map((dropdownOption, dropdownOptionIndex) => (
                                            <DropdownMenu.Item className="DropdownMenuItem mb-2" key={dropdownOptionIndex}>
                                                <Link href={dropdownOption?.path}>
                                                    <div className="navbar-dropdown-option-content-wrapper px-3 py-1.5 bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:border-gray-200 rounded-md">
                                                        <h4 className="navbar-dropdown-option-title text-sm font-semibold text-gray-800 font-sans">
                                                            {dropdownOption?.label}
                                                        </h4>
                                                        <p className="navbar-dropdown-option-description text-xs font-normal text-gray-400 font-sans">
                                                            {dropdownOption?.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            </DropdownMenu.Item>
                                        ))}
                                    </DropdownMenu.Content>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Root>
                            : <Link href={navbarOption?.path || "/"} 
                                className="navbar-option-button text-sm text-gray-600 font-normal font-sans" 
                                key={navbarOptionIndex}>
                                    {navbarOption?.label}
                                </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}