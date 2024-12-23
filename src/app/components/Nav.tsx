"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import SideBar from "./SideBar"; // Assuming you have a SideBar component
import { SideNavItem } from "../types";
import { useAuth } from "@/context/AuthContext";

export default function Nav() {
    const { isAuthenticated, user, logout } = useAuth(); // Use AuthContext for authentication

    // Fetch menu items from API for categories
    const [menuItems, setMenuItems] = useState<SideNavItem[]>([]);

    const fetchMenuItems = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products/categories");
            if (!res.ok) throw new Error("Failed to fetch categories");

            const data: { name: string }[] = await res.json();

            // Convert API data to SideNavItem format
            const formattedMenuItems: SideNavItem[] = data.map((category) => ({
                title: category.name,
                path: `/Product/category/${category.name}`,
            }));

            setMenuItems(formattedMenuItems);
        } catch (error) {
            console.error("Error fetching menu items:", error);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []); // Fetch data when the component mounts

    // Sidebar state
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setSideBarOpen((prev) => !prev);
    };

    // Dropdown menu state for authenticated users
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown menu

    const toggleDropdown = () => setDropdownOpen((prev) => !prev);

    // Click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        // Adding event listener for clicks outside
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup listener when the component is unmounted
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed z-10 flex flex-wrap justify-between items-center w-full px-4 py-2 bg-white shadow-md dark:bg-gray-800">
            {/* Left Section */}
            <div className="flex items-center space-x-5">
                <Link href="/" className="text-primary dark:text-primary-dark">
                    <Image src="/Logo.png" alt="Logo" width={152} height={691} />
                </Link>
                <button
                    onClick={toggleSideBar}
                    className="flex items-center justify-around text-primary dark:text-primary-dark border border-gray-300 rounded-md px-2 py-1 dark:border-gray-600 hover:border-red-400"
                >
                    <IoMenu className="md:text-l text-xl" />
                    <label htmlFor="rayon" className="hidden ml-1 md:flex cursor-pointer">
                        Rayons
                    </label>
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-10 relative">
                {isAuthenticated ? (
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-2 cursor-pointer font-bold"
                            aria-expanded={isDropdownOpen}
                        >
                            <MdAccountCircle className="md:text-xl text-2xl" />
                            <span className="hidden md:block">{user?.firstName}</span>
                            <IoMdArrowDropdown
                                className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute right-0 mt-4 w-48 bg-white border rounded-lg shadow-md z-10 text-sm"
                            >
                                <ul>
                                    <Link href="/Profile">
                                        <li
                                            className="px-4 py-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Profile
                                        </li>
                                    </Link>
                                    <li
                                        onClick={() => {
                                            logout(); // Call the logout method from AuthContext
                                            setDropdownOpen(false); // Close the dropdown
                                        }}
                                        className="px-4 py-2 text-red-600 hover:bg-gray-100 hover:rounded-lg cursor-pointer"
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        href="/Login"
                        className="flex items-center justify-around text-primary dark:text-primary-dark"
                    >
                        <MdAccountCircle className="md:text-xl text-2xl" />
                        <label
                            htmlFor="panier"
                            className="hidden ml-1 md:flex cursor-pointer font-bold"
                        >
                            Compte
                        </label>
                    </Link>
                )}
                <Link
                    href="/orderList"
                    className="flex items-center justify-around text-primary dark:text-primary-dark border border-gray-300 rounded-md px-2 py-1 dark:border-gray-600 hover:border-red-400"
                >
                    <FaClipboardList className="md:text-l text-xl" />
                    <label htmlFor="panier" className="hidden ml-1 md:flex cursor-pointer">
                        Panier
                    </label>
                </Link>
            </div>

            {/* Center Section (Search Bar) */}
            <div className="flex w-full my-3 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-1/3">
                <form className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full input-field text-md"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1"
                    >
                        <BiSearchAlt className="text-xl" />
                    </button>
                </form>
            </div>

            {/* Sidebar */}
            {isSideBarOpen && (
                <SideBar
                    isOpen={isSideBarOpen}
                    toggleSidebar={toggleSideBar}
                    menuItems={menuItems}
                />
            )}
        </div>
    );
}
