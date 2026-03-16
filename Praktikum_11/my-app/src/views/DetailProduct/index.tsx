// src/views/DetailProduct/index.tsx
import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";

const DetailProduk = ({ product }: { product: ProductType }) => {
  // Tambahkan pengecekan ini
  if (!product) {
    return <div className={styles.produkdetail}>Produk tidak ditemukan atau sedang dimuat...</div>;
  }

  return (
    <div className={styles.produkdetail}>
      <h1 className={styles.produkdetail__title}>Detail Produk</h1>
      <div className={styles.produkdetail__main}>
        {/* Bagian Gambar */}
        <div className={styles.produkdetail__main__left}>
          <img 
            src={product.image} 
            alt={product.name} 
            className={styles.produkdetail__main__left__image} 
          />
        </div>

        {/* Bagian Deskripsi/Info */}
        <div className={styles.produkdetail__main__right}>
          <h1 className={styles.produkdetail__main__right__name}>
            {product.name}
          </h1>
          <p className={styles.produkdetail__main__right__category}>
            {product.category}
          </p>
          <p className={styles.produkdetail__main__right__price}>
            {/* Menggunakan opsional chaining (?) berjaga-jaga jika price undefined */}
            Rp {product.price?.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;