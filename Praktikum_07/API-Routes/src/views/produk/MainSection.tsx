import Link from "next/link";

// Sesuaikan typenya agar tidak error
type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

// Terima props 'products' di sini
const MainSection = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-semibold mb-6">Daftar Produk</h2>

      <ul className="space-y-3">
        {products.map((product: ProductType) => (
  <div key={product.id} className="p-4 border-b mb-4">
    <h2 className="text-xl font-bold">{product.name}</h2>

    <p className="text-sm text-blue-500 font-semibold uppercase">
      Kategori: {product.category}
    </p>
    
    <p>Harga: Rp {product.price?.toLocaleString('id-ID')}</p>
    <p>Ukuran: {product.size}</p>
  </div>
))}
      </ul>
    </section>
  );
};

export default MainSection;