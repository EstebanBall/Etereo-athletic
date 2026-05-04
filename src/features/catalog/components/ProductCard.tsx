import { Product } from '../types/product';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Espacio para la imagen */}
      <div className="h-48 bg-slate-100 flex items-center justify-center">
        <span className="text-slate-400 text-sm">Imagen: {product.name}</span>
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