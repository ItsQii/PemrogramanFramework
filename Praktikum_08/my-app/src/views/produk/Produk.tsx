import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr"; 
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: number;
  category: string;
  image: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Produk = () => {
  const router = useRouter();

  const { mutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <>
      <HeroSection onRefresh={() => mutate("/api/produk")} />

      <MainSection products={isLoading ? [] : data?.data || []} />
    </>
  );
};

export default Produk;