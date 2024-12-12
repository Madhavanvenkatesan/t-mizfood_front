import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import productProbs from "../../types";

// Fetch product data
const fetchProduct = async (id: string): Promise<productProbs> => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    return response.json();
};

// Define the Product page component
export default async function ProductDetails({ params }:{params: Promise<{ id: string }>}) {
    const { id } = await params;
    try {
        const product = await fetchProduct(id);

        return (
            <div className="flex flex-col sm:flex-row h-[120vh] sm:h-[70vh] md:h-[80vh] w-full max-w-7xl p-5 gap-4">
                {/* Product Image */}
                <div className="h-full w-full sm:w-1/2">
                    <div className="flex justify-center items-center h-full w-full bg-white rounded-md shadow-lg">
                        <Image
                            src={"/pizza.png"} // Use dynamic image from API or fallback
                            alt={product.title || "Product Image"}
                            width={400}
                            height={400}
                            className="h-4/5 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="h-full w-full sm:w-1/2">
                    <div className="h-[50%] w-full bg-white mb-4 rounded-md shadow-lg p-4">
                        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                        <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    <div className="flex justify-between items-center p-4 w-full bg-white rounded-md shadow-lg">
                        <span className="text-l font-bold text-gray-800">${product.price.toFixed(2)}</span>
                        <button className="bg-red-500 rounded-full text-white">
                            <IoIosAdd className="text-4xl" />
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch {
        return (
            <div className="text-red-500 p-4">
                <p>Error fetching product:</p>
            </div>
        );
    }
};
