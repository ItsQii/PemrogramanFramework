import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const Produk = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <>
    <HeroSection />
    <MainSection />
    </>
    
  );
};

export default Produk;