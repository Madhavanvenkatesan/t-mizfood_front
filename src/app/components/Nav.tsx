"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import SideBar from "./SideBar";


export default function Nav() {
    
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const toggleSideBar = () => {
        setSideBarOpen(!isSideBarOpen);
    };
    return (
        <div className="fixed flex flex-wrap justify-between items-center w-full px-4 py-2 bg-inherit shadow-md dark:bg-gray-800 z-10">
            {/* Left Section */}
            <div className="flex items-center space-x-5">
                <Link href="/" className="text-primary dark:text-primary-dark">
                    <Image src="/Logo.png" alt="Logo" width={152} height={691}/>
                </Link>
                <button
                    onClick={toggleSideBar}
                    className="flex items-center justify-around text-primary dark:text-primary-dark  border border-gray-300  rounded-md px-2 py-1 dark:border-gray-600 hover:border-red-400"
                >
                    <IoMenu className="md:text-l text-xl" />
                    <label htmlFor="rayon" className="hidden ml-1 md:flex cursor-pointer ">Rayons</label>
                </button>

            </div>
            {/* Right Section */}
            <div className="flex items-center space-x-10">
                <Link
                    href="/Login"
                    className="flex items-center justify-around text-primary dark:text-primary-dark ">
                    <MdAccountCircle className="md:text-xl text-2xl" />

                    <label htmlFor="panier" className="hidden ml-1 md:flex cursor-pointer font-bold">Compte</label>
                </Link>
                <Link
                    href="/orderList"
                    className="flex items-center justify-around text-primary dark:text-primary-dark  border border-gray-300 rounded-md px-2 py-1 dark:border-gray-600  hover:border-red-400"
                >
                    <FaClipboardList className="md:text-l text-xl" />
                    <label htmlFor="panier" className="hidden ml-1 md:flex cursor-pointer ">Panier</label>
                </Link>
            </div>
            {/* Center Section (Search Bar) */}
            <div className="flex w-full my-3 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-1/3">
                <form className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full input-field text-sm"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 "
                    >
                        <BiSearchAlt className="text-xl" />
                    </button>
                </form>
            </div>
            {/* Sidebar */}
            {isSideBarOpen && (
                <SideBar isOpen={isSideBarOpen} toggleSidebar={toggleSideBar} />
            )}
        </div>

    )
}