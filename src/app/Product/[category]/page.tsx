import productCategoryProbs from "../../types";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";

// Fetch product data
const fetchProduct = async (category: string): Promise<productCategoryProbs[]> => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    console.log(response);
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    const data: productCategoryProbs = await response.json()
    return data.products
};

// Define the Product page component
export default async function ProductDetails({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const products = await fetchProduct(category);
    console.log(products);
    if (products) {
        return (
            <div className="w-full flex justify-center items-center">
                <div className="flex justify-center items-center flex-wrap gap-4 p-1 sm:p-8 max-w-7xl">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Link href={`/product/${category}/${product.id}`} key={product.id}>
                                <ProductCard
                                    category={product.category}
                                    brand={product.brand}
                                    productName={product.title}
                                    description={product.description}
                                    price={product.price}
                                />
                            </Link>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </div>
        );
    };
}