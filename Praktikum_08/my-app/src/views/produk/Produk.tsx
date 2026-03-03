import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import useSWR from "swr";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: number;
  category: string;
  image: string;
};

const Produk = () => {
  const router = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);

  const fetchData = () => {
    setProducts([]);

    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setTimeout(() => {
          setProducts(responsedata.data); 
        }, 1000); 
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  };

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeroSection onRefresh={fetchData} />

      <MainSection products={products} />
    </>
  );
};

export default Produk;