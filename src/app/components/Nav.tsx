import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
// import Image from "next/image";
export default function Nav() {
    return (
        <div className="relative flex flex-wrap justify-between items-center w-full px-4 py-2 bg-gray-0 shadow-md dark:bg-gray-800">
            {/* Left Section */}
            <div className="flex items-center space-x-10">
                <Link href="/" className="text-primary dark:text-primary-dark">
                    <Image src="/Logo-T-MIZFOOD-2.png" alt="Logo" width={150} height={50} className="h-10 w-auto"/>
                </Link>
                <Link
                    href="/Rayons"
                    className="flex items-center justify-around text-primary dark:text-primary-dark  border border-gray-300  rounded-md px-2 py-1 dark:border-gray-600"
                >
                    <IoMenu className="text-l"/>
                    <label htmlFor="rayon" className="hidden ml-1 md:flex cursor-pointer">Rayons</label>
                </Link>
            </div>



            {/* Right Section */}
            <div className="flex items-center space-x-10">
                <Link
                    href="/Login"
                    className="flex items-center justify-around text-primary dark:text-primary-dark ">
                    <MdAccountCircle className="text-xl" />

                    <label htmlFor="panier" className="hidden ml-1 md:flex cursor-pointer">Compte</label>
                </Link>
                <Link
                    href="/orderList"
                    className="flex items-center justify-around text-primary dark:text-primary-dark  border border-gray-300 rounded-md px-2 py-1 dark:border-gray-600"
                >
                    <FaClipboardList className="text-l"/>
                    <label htmlFor="panier" className="hidden ml-1 md:flex cursor-pointer">Panier</label>
                </Link>

            </div>

            {/* Center Section (Search Bar) */}
            <div className="flex w-full my-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-1/3">
                <form className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full input-field"
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 "
                    >
                        <BiSearchAlt className="text-xl"/>
                    </button>
                </form>
            </div>
        </div>

    )
}