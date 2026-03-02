import Link from "next/link";

// Sesuaikan typenya agar tidak error
type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

// Terima props 'products' di sini
const MainSection = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-semibold mb-6">Daftar Produk</h2>

      <ul className="space-y-3">
        {products.map((product) => (
          <li key={product.id} className="border-b pb-4">
            <Link href={`/produk/${product.id}`} className="text-blue-500 underline font-bold text-xl">
              {product.name}
            </Link>
            <p className="text-gray-600">Harga: Rp {product.price.toLocaleString()}</p>
            <p className="text-gray-600">Ukuran: {product.size}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainSection;