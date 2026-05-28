import { Url } from "next/dist/shared/lib/router/router";

export interface Product {

    id: string;
    name: string;
    description: string;
    price: number;
    url: string;
    category: string;
 
}