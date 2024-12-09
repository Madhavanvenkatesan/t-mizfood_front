'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

type SideNavItem = {
    title: string;
    path: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};

const SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Projects',
        path: '/projects',
        submenu: true,
        subMenuItems: [
            { title: 'All', path: '/projects' },
            { title: 'Web Design', path: '/projects/web-design' },
            { title: 'Graphic Design', path: '/projects/graphic-design' },
        ],
    },
    {
        title: 'Messages',
        path: '/messages',
    },
    {
        title: 'Settings',
        path: '/settings',
        submenu: true,
        subMenuItems: [
            { title: 'Account', path: '/settings/account' },
            { title: 'Privacy', path: '/settings/privacy' },
        ],
    },
    {
        title: 'Help',
        path: '/help',
    },
];


export default function SideBar({ isOpen, toggleSidebar }: SidebarProps) {

    return (
        <div className="fixed flex left-0 top-14 w-full h-[calc(100vh-3.5rem)]">
            {isOpen &&( <button onClick={toggleSidebar}>x</button>)}
            <div className="w-4/5 sm:w-2/3 md:w-80 px-4 py-2 bg-white shadow-md dark:bg-gray-800 overflow-scroll">
                <h1>Rayons</h1>
                <div className="flex flex-col w-full">
                    {SIDENAV_ITEMS.map((item, idx) => {
                        return <MenuItem key={idx} item={item} />;
                    })}
                </div>
            </div>
            <div
                onClick={toggleSidebar}
                className="flex-1 bg-black opacity-50">
            </div>
        </div>
    )
}

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className="">
            {item.submenu ? (
                <>
                    <button
                        onClick={toggleSubMenu}
                        className="flex flex-row items-center w-full justify-between">
                        <div className="flex flex-row space-x-4 p-2 items-center">
                            <span className="text-sm flex">{item.title}</span>
                        </div>
                    </button>

                    {subMenuOpen && (
                        <div className="flex flex-col">
                            {item.subMenuItems?.map((subItem, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        href={subItem.path}
                                        className={`${subItem.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        <span className="text-sm p-2 px-4 flex">{subItem.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </>
            ) : (
                <Link
                    href={item.path}
                    className="flex flex-row space-x-4 items-center p-2 rounded-lg">
                    <span className="text-sm flex">{item.title}</span>
                </Link>
            )}
        </div>
    );
};