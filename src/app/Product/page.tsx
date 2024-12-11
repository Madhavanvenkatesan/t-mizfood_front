import Image from "next/image"
import { IoIosAdd } from "react-icons/io";
export default function Product() {
    return (
        <div className="flex flex-col sm:flex-row h-[120vh] sm:h-[70vh] md:h-[80vh] w-full max-w-7xl p-5 gap-4">
            <div className="h-full w-full sm:w-1/2">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-md shadow-lg">
                    <Image src="/pizza.png" alt="Logo" width={100} height={100} className="h-4/5 w-auto object-contain" />
                </div>
            </div>
            <div className="h-full w-full sm:w-1/2">
                <div className="h-[50%] w-full bg-white mb-4 rounded-md shadow-lg p-2">Fresh organicFresh organic apples harvested from thFresh organic apples harvested from th apples harvested from the farm</div>
                <div className="flex justify-between items-center p-2 w-full bg-white rounded-md shadow-lg">
                <span className="text-l font-bold text-gray-800">85$</span>
                <button className="bg-red-500 rounded-full text-white"><IoIosAdd className="text-4xl" /></button>
                </div>
            </div>
        </div>
    )
}