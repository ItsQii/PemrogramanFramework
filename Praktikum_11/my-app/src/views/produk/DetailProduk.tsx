import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
// Import tampilan dari folder views/DetailProduct
import DetailProduk from "@/views/DetailProduct"; 

const HalamanDetailProduk = ({ product }: { product: any }) => {

  // digunakan client-side rendering
  // const { query } = useRouter();

  // const { data, error, isLoading } = useSWR(
  //   query.id ? `/api/produk/${query.id}` : null,
  //   fetcher
  // );

  // return (
  //   <div>
  //     <DetailProduk product={isLoading ? {} : data?.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default HalamanDetailProduk;


// Fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses
// dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps({ params }: { params: { id: string } }) {

  const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}