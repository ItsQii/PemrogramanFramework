import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr"; 
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import fetcher from "@/utils/swr/fetcher";

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

  const { mutate } = useSWRConfig();

const { data, error, isLoading, isValidating } = useSWR("/api/produk", fetcher);

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <>
      <HeroSection onRefresh={() => mutate("/api/produk")} />

      <MainSection products={(isLoading || isValidating) ? [] : data?.data || []} />
    </>
  );
};

export default Produk;