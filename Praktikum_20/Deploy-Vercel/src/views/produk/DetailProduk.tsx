import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
// Import tampilan dari folder views/DetailProduct
import DetailProduk from "@/views/DetailProduct"; 

const HalamanDetailProduk = ({ product }: { product: any }) => {
  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default HalamanDetailProduk;

// --- STATIC SITE GENERATION (SSG) ---

/*
export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/products');
  const response = await res.json();

  const paths = response.data.map((product: any) => ({
    params: { id: product.id.toString() }
  }));

  return {
    paths,
    fallback: false 
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
*/

// --- SERVER SIDE RENDERING (SSR) ---
export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}