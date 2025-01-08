import Image from "next/image";
import { IoIosAdd } from "react-icons/io";

// Define types for the props being passed to the ProductCard
interface ProductCardProps {
    category: string;
    brand: string;
    productName: string;
    description: string;
    price: number; // Ensure the price is a number
    onAddToList?: () => void; // Function to handle "Add to List" action (optional)
}

const ProductCard: React.FC<ProductCardProps> = ({
    category,
    brand,
    productName,
    description,
    price,
    onAddToList, // Add the onAddToList function as an optional prop
}) => {
    return (
        <div className="flex flex-row sm:flex-col bg-white rounded-lg shadow-lg p-3 w-full sm:w-64 h-90">
            <div className="w-1/2 sm:w-full">
                <div className="mb-2">
                    <span className="text-sm text-gray-500">{category}</span>
                    <span className="text-sm text-gray-500">{brand}</span>
                </div>
                <div>
                    <Image
                        src="/pizza.png"
                        alt="Product Image"
                        width={100}
                        height={100}
                        className="h-40 w-auto object-contain"
                    />
                </div>
            </div>
            <div className="w-1/2 sm:w-full flex flex-col justify-between">
                <div className="overflow-hidden h-28 sm:h-20">
                    <h2 className="text-l font-semibold text-gray-800 mb-2">{productName}</h2>
                    <p className="text-sm text-gray-600 mb-4">{description}</p>
                </div>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-l font-bold text-gray-800">${price.toFixed(2)}</span> {/* Format price with currency */}
                    {/* {onAddToList && ( */}
                        <button
                            onClick={onAddToList}
                            className="bg-red-500 rounded-full text-white"
                        >
                            <IoIosAdd className="text-4xl" />
                        </button>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
