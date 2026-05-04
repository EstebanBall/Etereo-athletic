import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/features/catalog/components/ProductCard';
import { Product } from '@/features/catalog/types/product';


// Igreso de datos de prueba con array:
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Proteína Whey ISO', price: 55.99, category: 'Proteínas', image: '', description: 'Aislado de proteína de suero de alta pureza.' },
  { id: '2', name: 'Creatina Monohidratada', price: 29.99, category: 'Aminoácidos', image: '', description: 'Mejora tu fuerza y recuperación muscular.' },
  { id: '3', name: 'Pre-Entreno Explosivo', price: 34.99, category: 'Energía', image: '', description: 'Enfoque máximo para tus entrenamientos intensos.' },
  { id: '4', name: 'Multivitamínico Pro', price: 19.99, category: 'Salud', image: '', description: 'Todas las vitaminas y minerales esenciales.' }
];

export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50">
    {/*Hero Section*/}
    <section className="py-20 px-6 text-center bg-white border-b border-slate-200">
      <h1 className='text-5xl font-bold text-slate-900 mb-4'>
      Potencia tu cuerpo con <span className="text-blue-600">Suplementos Athletic</span>
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        La mejor calidad para llevar tus limites al siguiente nivel.
      </p>
      <Button variant='primary'>Ver catalogo completo</Button>
    </section>

       {/*Grid de productos*/}
       <section className='max-w-6xl mx-auto py-18 px-6'>
        <h2 className='text-2xl font-bold text-slate-800 mb-8'>Productos destacados</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
          ))}
        </div>
       </section>
       </main>
  );
}