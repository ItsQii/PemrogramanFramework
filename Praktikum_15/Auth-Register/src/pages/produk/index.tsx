import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import TampilanProduk from "../../views/produk/Produk";
import fetcher from "../../utils/swr/fetcher";

const ProdukPage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // login check
  useEffect(() => {
    const isLogin = sessionStorage.getItem("login");
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data || []} />
    </div>
  );
};

export default ProdukPage;