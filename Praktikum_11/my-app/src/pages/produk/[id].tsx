import DetailProduk from "@/views/DetailProduct"; 

const ProdukDetailPage = ({ product }: { product: any }) => {
  return (
    <div>
      <DetailProduk product={product} />
    </div>
  );
};

export default ProdukDetailPage;

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const res = await fetch(`http://127.0.0.1:3000/api/produk/${params.id}`);
  const response = await res.json();

  return {
    props: {
      product: response.data || null,
    },
  };
}