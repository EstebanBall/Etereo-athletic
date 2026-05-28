
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/features/catalog/components/ProductCard';
import { ProductList } from '@/features/catalog/components/ProductList';
import { Product } from '@/features/catalog/types/product';



const MOCK_PRODUCTS : Product [] = [
  { id: '1', name: 'Proteína Whey ISO', price: 55.99, category: 'Proteínas', url: '/images/products/prote.jpg', description: 'Aislado de proteína de suero de alta pureza.' },
  { id: '2', name: 'Creatina Monohidratada', price: 29.99, category: 'Aminoácidos', url: '/images/products/creatina.jpg', description: 'Mejora tu fuerza y recuperación muscular.' },
  { id: '3', name: 'Pre-Entreno Explosivo', price: 34.99, category: 'Energía', url: '/images/products/pre.jpg', description: 'Enfoque máximo para tus entrenamientos intensos.' },
  { id: '4', name: 'Multivitamínico Pro', price: 19.99, category: 'Salud', url: '/images/products/vulti.jpg', description: 'Todas las vitaminas y minerales esenciales.' },
  { id: '5', name: 'BCAA 2:1:1 Recovery', price: 24.99, category: 'Aminoácidos', url: '/images/products/creatina.jpg', description: 'Aminoácidos ramificados para proteger la masa muscular.' },
  { id: '6', name: 'Proteína Vegana Organics', price: 42.50, category: 'Proteínas', url: '/images/products/prote.jpg', description: 'Mezcla premium de guisante y arroz de origen orgánico.' },
  { id: '7', name: 'Omega 3 Ultra Pure', price: 15.99, category: 'Salud', url: '/images/products/vulti.jpg', description: 'Ácidos grasos esenciales para la salud cardiovascular.' },
  { id: '8', name: 'Bebida Isotónica Flash', price: 12.99, category: 'Energía', url: '/images/products/pre.jpg', description: 'Reposición inmediata de electrolitos y energía.' },
  { id: '9', name: 'L-Glutamina Micronizada', price: 22.00, category: 'Aminoácidos', url: '/images/products/creatina.jpg', description: 'Apoyo fundamental para la recuperación y el sistema inmune.' },
  { id: '10', name: 'Caseina Micelar Nocturna', price: 48.99, category: 'Proteínas', url: '/images/products/prote.jpg', description: 'Proteína de liberación lenta ideal para antes de dormir.' }
];


export default function Home() {
  return (
   <main className="min-h-screen bg-slate-50">
    {/*Hero Section*/}
    <section className="py-20 px-6 text-center bg-white border-b border-slate-200">
      <h1 className='text-5xl font-bold text-slate-900 mb-4'>
      Potencia tu cuerpo con <span className="text-blue-600">Etereo Athletic</span>
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        La mejor calidad para llevar tus limites al siguiente nivel.
      </p>
      <Button variant='primary'>Ver catalogo completo</Button>
    </section>

       {/*Grid de productos*/}
       <section className='max-w-6xl mx-auto py-18 px-6'>
        <h2 className='text-2xl font-bold text-slate-800 mb-8'>Productos destacados</h2>
        
          <ProductList initialProducts ={MOCK_PRODUCTS} />
        
       </section>
       </main>
  );
}