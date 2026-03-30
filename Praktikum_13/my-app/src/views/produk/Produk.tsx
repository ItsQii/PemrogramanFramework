import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import { ProductType } from "@/types/Product.type";

type Props = {
  products: ProductType[];
};

const Produk = ({ products }: Props) => {
  return (
    <>
      <HeroSection onRefresh={() => {}} />
      <MainSection products={products} />
    </>
  );
};

export default Produk;