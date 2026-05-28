"use client";
import React from "react";

interface CategoryFiltersProps {
    categories : string[];
    activeCategory : string;
    onSelectCategory : (category: string) => void;
}

export const CategoryFilters = ({
    categories,
    activeCategory,
    onSelectCategory
}: CategoryFiltersProps) => {
    {console.log(categories)} 
    return(
        <div className="flex flex-wrap gap-2 mb-8">
            
            {categories.map((category) =>(
                <button 
                key={category}
                    onClick={()=> onSelectCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeCategory === category
                        ? 'bg-blue-600 text-while' // estilo seleccionado
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'//Estilo normal que tiene por defecto
                    }`}
                    >
                    {category}
                    </button>
            ))}
        </div>
    );
};