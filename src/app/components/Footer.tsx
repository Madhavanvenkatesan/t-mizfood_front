import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";
export default function Footer() {
    return (
        <div>
            <footer className="flex flex-col sticky bottom-0 w-full text-sm text-white">
                <div className="flex flex-col justify-between items-center bg-slate-50 rounded-tl-md rounded-tr-md shadow-sm">
                    <div>
                        <Image src="/Logo1.svg" alt="logo" width={152} height={691} className="h-10 w-auto m-10" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 justify-center w-full mb-10">
                        <div className="flex justify-center items-center gap-2 mx-10 bg-red-600 rounded-md px-4 py-2">
                            <GrDeliver />
                            <div>Livraison Express</div>
                        </div>
                        <div className="flex justify-center items-center gap-2 mx-10 bg-red-600 rounded-md px-4 py-2">
                            <AiOutlineShop />
                            <div>Marchands Garantis</div>
                        </div>
                        <div className="flex justify-center items-center gap-2 mx-10 bg-red-600 rounded-md px-4 py-2">
                            <FaRegThumbsUp />
                            <div>Meilleure Qualité</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-start p-10 bg-gray-900 rounded-tl-md rounded-tr-md gap-10">
                    <div className="flex flex-col ">
                        <Image src="/Logo_simple.svg" alt="logo" width={63} height={35} className="h-6 w-auto"/>
                        <h2 className="text-white font-bold text-xl mt-4">T-Mizfood</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold pb-4">Contacts</h3>
                        <div className="flex gap-3"><IoCallOutline /><span className=" hover:text-red-300">07 88 22 55 19</span></div>
                        <div className="flex gap-3"><IoMailOutline /><span className=" hover:text-red-300">t-mizfood@gmail.com</span></div>
                        <div className="flex gap-3"><IoLocationOutline /><span className=" hover:text-red-300">36 Rue Pierre Jacoby<br/>60000 Beauvais</span></div>
                        <div className="flex gap-3"><IoGlobeOutline /><span className=" hover:text-red-300">www.t-mizfood.com</span></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold pb-4">Accés Direct</h3>
                        <Link href="/" className=" hover:text-red-300">Contacter nous</Link>
                        <Link href="/" className=" hover:text-red-300">Livraison</Link>
                        <Link href="/" className=" hover:text-red-300">Qui sommes-nous?</Link>
                        <Link href="/" className=" hover:text-red-300">Mentions Légales</Link>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold pb-4">Suivez-nous</h3>
                        <div className="flex gap-2">
                        <FaFacebookSquare className="text-3xl  hover:text-red-300" />
                        <FaSquareInstagram className="text-3xl  hover:text-red-300"/>
                        <FaSquareWhatsapp className="text-3xl  hover:text-red-300"/>
                        <IoLogoLinkedin className="text-3xl  hover:text-red-300"/>
                        </div>
                        
                    </div>
                </div>
                <div className="flex gap-2 p-1 text-xs justify-center items-center bg-gray-800"><FaRegCopyright /><p>Tous droits réservés T-MIZFOOD</p></div>
            </footer>
        </div>
    )
}