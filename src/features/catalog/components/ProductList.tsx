'use client';
import React, { useState } from "react";
import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";   
import { SearchBar } from "./SearchBar"; 

interface ProductListProps {
    initialProducts : Product[];
}

export const ProductList = ({initialProducts } : ProductListProps) => {
    
    const [product, setProducts] = useState (initialProducts);


    const handleSearch = (query : string) => {
        const filtered = initialProducts.filter ((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filtered);
        };
    

return(

    <section>
        <SearchBar onSearch={handleSearch}/>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map ((product) =>(
            <ProductCard key = {product.id} product={product} />
        ))}
    </div>

    {product.length === 0 && (
        <p className="text-center text-slate-500 mt-10">No encontramos productos</p>
    )}
    </section>
);
};

