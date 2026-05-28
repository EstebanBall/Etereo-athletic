'use client';
import React, { useState } from "react";
import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";   
import { SearchBar } from "./SearchBar"; 
import { CategoryFilters } from "./CategoryFilters";

interface ProductListProps {
    initialProducts : Product[]; // se exige que se reciba una lista
}

export const ProductList = ({initialProducts } : ProductListProps) => { // esta constante dice que vamos cumpli con el contrato
    //ademas llega la lista desde page.tsx, cumpliendo el contrato
    

    const [products, setProducts] = useState (initialProducts); // Products, por defecto es la lista en crudo sin procesar, al momento de que setProducts
    // se modifique, CAMBIA el valor de products por el cual fue enviado, se hace dentro de esta misma clase.
    const [activeCategory, setActiveCategory] = useState('Todos')//activeCategory es por defecto TODOS, lo cual en CategoryFilters (pagina de botones)
    // empieza por todos, esta pagina posteriormente cambia setActiveCateggory poor lo cual cambia a activeCategory haciendo que el filtro yy coloes cambien.


    const categories =['Todos', ...new Set (initialProducts.map (p => p.category))]; //Extracíon de las categorias unica de nuestros productos
// el .map solo saca las categorias (asi esten repetidas) 
// el "new Set" elimina todo lo repetido, 
// los tres puntos vuelven el resultado de "new set" una lista  
// y "todos" unicamente agrega "todos" dentro de la NUEVA lista.



    const handleFilter = (query : string, category : string) => { // A esta funcion le llegan  dos strings
        let filtered = initialProducts; // Crea una nueva lista igual a la inicial

        //Filtrar por la barra de busqueda. estas lineas unicamente funcionan su se realiza algo en SearchBar
        if (query) {
            filtered = filtered.filter((p) =>  //.filter filtra con la condicion que sigue, (p) es la variable temporal para nombrar a cada uno de los elementos
            p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) //.la condicion es que solamente van a "sobrevivir al filtro"
            // aquellos NOMBRES de los elementos que incluyan lo que query tiene adentro.
        );
        }

        //filtrar por categoría, estas lineas uncamente se activan si se realiza algun cambio dentro de CategoryFilters
        if( category !== 'Todos') {  // aca la condicion es unicamente SI lo que este en category es DIFERENTE a "Todos" si se cumple entonces:
            filtered = filtered.filter((p) => p.category === category); //Actualiza filtered y lo filtra con: Unicamente apareces las categorias 
            // que sean iguales a las categoria escogida desde los botones osea desde: CategoryFilters.
        }

        setProducts(filtered); //envia y modifica a traves de setProducts el contenido de Products a lo que equivalga filtered
        };
    

return(

    <section>
        {/*Buscador, le pasamos la categoría actual para que no se pierda el filtro*/}
        <SearchBar onSearch={(q) => handleFilter (q, activeCategory)}/> {/* se invoca la clase de searchbar esperando lo que el usuario escriba
        // cuando este lo haga e se procede a enviar a handlefilter junto a la categoria activa.*/}
        
        
        {/*Filtros por la categoria*/}
        <CategoryFilters
        categories={categories} // evnia la lista limpia hecha atras
        activeCategory={activeCategory} // envia predeterminadamente "Todos" hasta que el usuario escoga y setActiveCategory cambie el original
        onSelectCategory={(cat) =>{ //y esto significa que apenas el usuario escoga un boton:
            setActiveCategory (cat); //cambie la categoria activa
            handleFilter( '', cat); //Y Se reinicia la busqueda al cambiar la categoria
        }}
        />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
        </div>

    </section>
    );
};

