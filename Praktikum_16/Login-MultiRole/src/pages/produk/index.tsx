import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import TampilanProduk from "../../views/produk/Produk";
import fetcher from "../../utils/swr/fetcher";

const ProdukPage = () => {
  const router = useRouter();
  
  // HAPUS BAGIAN INI:
  // useEffect(() => {
  //   const isLogin = sessionStorage.getItem("login");
  //   if (!isLogin) {
  //     router.push("/auth/login");
  //   }
  // }, [router]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default ProdukPage;