import Link from "next/link";

const MainSection = () => {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-semibold mb-6">
        Daftar Produk
      </h2>

      <ul className="space-y-3">
        <li>
          <Link href="/produk/1" className="text-blue-500 underline">
            Laptop
          </Link>
        </li>
        <li>
          <Link href="/produk/2" className="text-blue-500 underline">
            Mouse
          </Link>
        </li>
        <li>
          <Link href="/produk/3" className="text-blue-500 underline">
            Keyboard
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MainSection;