import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>Produk User Page</div>
  );
};

export default produk;