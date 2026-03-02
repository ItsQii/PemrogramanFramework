import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const Produk = () => {
  const router = useRouter();
  
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  return (
    <>
      <HeroSection />
      
      <MainSection />

      <div style={{ padding: '20px' }}>
        <h1>Daftar Produk</h1>
        {products.map((product: ProductType) => (
          <div key={product.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <h2>{product.name}</h2>
            <p>Harga: {product.price}</p>
            <p>Ukuran: {product.size}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Produk;