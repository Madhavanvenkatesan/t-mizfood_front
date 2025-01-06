import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Product from "./types";
import Hero from "./components/Hero";



// This function will fetch products when the component is rendered on the server
async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products?limit=12");
  const data = await response.json();
  return data.products; // Return the array of products
}

// Define the Home page component that renders a list of products
const Home = async () => {
  const products = await getProducts();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 m-10">Les produits du quotidien </h1>
      <div className="flex justify-center items-center flex-wrap gap-4 p-1 sm:p-8 max-w-7xl">
        {products.length > 0 ? (
          products.map((product) => (
            <Link href={`/Product/${product.category}/${product.id}`} key={product.id}>
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

export default Home;
