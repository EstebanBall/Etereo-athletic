"use Client";
import React from "react";

interface SearchBarProps {
    onSearch: (query : string) => void;
}

export const SearchBar = ({onSearch} : SearchBarProps ) => {
    return (
        <div className="mb-8">
            <input 
                type="text"
                placeholder="Buscar suplementos (ej. Proteina, Creatina ...)"
                className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-blue-500 transition-all text-slate-700"
                onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}