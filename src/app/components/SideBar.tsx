'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { SideNavItem } from "../types";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    menuItems: SideNavItem[];
}

export default function SideBar({ isOpen, toggleSidebar, menuItems }: SidebarProps) {


    return (
        <div className="fixed flex left-0 top-12 w-full h-[calc(100vh-3rem)]">
            <div className="w-4/5 sm:w-2/3 md:w-80 bg-white shadow-md dark:bg-gray-800 overflow-scroll">
                <h2 className="flex justify-between w-full pl-4 p-2 shadow-sm">
                    <span className="font-bold">Rayons</span>
                    {isOpen && (
                        <button
                            className="p-2 rounded-full hover:bg-red-500 hover:text-white"
                            onClick={toggleSidebar}
                        >
                            <IoClose />
                        </button>
                    )}
                </h2>
                <div className="flex flex-col w-full px-2">
                    {menuItems.map((item, idx) => (
                        <MenuItem key={idx} item={item} onClick={toggleSidebar} />
                    ))}
                </div>
            </div>
            <div onClick={toggleSidebar} className="flex-1 bg-black opacity-50"></div>
        </div>
    );
}

const MenuItem = ({ item, onClick }: { item: SideNavItem, onClick: () => void; }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    const handleLinkClick = () => {
        onClick();
    };
    return (
        <div>
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className="flex flex-row items-center w-full justify-between rounded-lg hover:bg-red-500 hover:text-white"
                    >
                        <div className="flex flex-row space-x-4 p-1 pl-2 items-center justify-between w-full">
                            <span className="text-sm">{item.title}</span>
                            <IoIosArrowForward
                                className={`transform transition-transform duration-300 ${subMenuOpen ? "rotate-90" : ""
                                    }`}
                            />
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="flex flex-col">
                            {item.subMenuItems?.map((subItem, idx) => (
                                <Link
                                    key={idx}
                                    href={subItem.path}
                                    className={`rounded-lg hover:bg-red-500 hover:text-white ${subItem.path === pathname ? 'font-bold' : ''
                                        }`}
                                >
                                    <span className="text-sm p-1 px-4 flex">{subItem.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className="flex flex-row space-x-4 items-center p-1 pl-2 rounded-lg hover:bg-red-500 hover:text-white"
                    onClick={handleLinkClick}
                >
                    <span className="text-sm py-2 md:py-1 font-semibold">{item.title}</span>
                </Link>
            )}
        </div>
    );
};