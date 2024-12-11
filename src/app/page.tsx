"use client"

import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  // Sample data for products
  const array = [
    { category: 'Fresh', brand: 'Brand A', productName: 'Organic Apple', description: 'Fresh organic apples harvested from the farm.', price: '$3.99' },
    { category: 'Freezer', brand: 'Brand B', productName: 'Frozen Salmon', description: 'Frozen wild-caught salmon fillets.', price: '$15.99' },
    { category: 'Fresh', brand: 'Brand C', productName: 'Fresh Strawberries', description: 'Juicy fresh strawberries packed for your convenience.', price: '$5.99' },
    { category: 'Fresh', brand: 'Brand A', productName: 'Organic Apple', description: 'Fresh organic apples harvested from the farm.', price: '$3.99' },
    { category: 'Freezer', brand: 'Brand B', productName: 'Frozen Salmon', description: 'Frozen wild-caught salmon fillets.', price: '$15.99' },
    { category: 'Fresh', brand: 'Brand C', productName: 'Fresh Strawberries', description: 'Juicy fresh strawberries packed for your convenience.', price: '$5.99' },
    { category: 'Fresh', brand: 'Brand A', productName: 'Organic Apple', description: 'Fresh organicFresh organic apples harvested from thFresh organic apples harvested from th apples harvested from the farm.', price: '$3.99' },
    { category: 'Freezer', brand: 'Brand B', productName: 'Frozen Salmon', description: 'Frozen wild-caught salmon fillets.', price: '$15.99' },
    { category: 'Fresh', brand: 'Brand C', productName: 'Fresh Strawberries', description: 'Juicy fresh strawberries packed for your convenience.', price: '$5.99' },

  ];

  // const handleAddToList = (productName: string) => {
  //   console.log(`${productName} added to the list!`);
  // };


  return (
    <div className="flex justify-center items-center flex-wrap gap-4 p-1 sm:p-8 max-w-7xl">
      {array.map((product, idx) => (
        <Link href="/Product"
            // Important to add a unique key for each item
          key={idx}>
          <ProductCard
            category="Fresh"
            brand={product.brand}
            productName={product.productName}
            description={product.description}
            price={product.price}
          // onAddToList={() => handleAddToList(product.productName)} // Passing the specific product name
          />
        </Link>
      ))}
    </div>
  );
}
