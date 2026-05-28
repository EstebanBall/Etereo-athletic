import { Product } from '../types/product';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        <Image 
        src={product.url}
        alt={product.name}
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, (max-with: 1200px) 50vw, 33vw'
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-slate-900">{product.name}</h3>
          <span className="text-blue-600 font-bold">${product.price}</span>
        </div>
        <p className="text-slate-500 text-xs mb-4 line-clamp-2">{product.description}</p>
        
        <Button variant="secondary" className="w-full text-sm">
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};