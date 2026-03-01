import { useRouter } from "next/router";

const HalamanProduk = () => {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Produk: {router.query.id}</p>
    </div>
  );
};

export default HalamanProduk;