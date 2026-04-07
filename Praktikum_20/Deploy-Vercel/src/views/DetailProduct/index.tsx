import { ProductType } from "@/types/Product.type";
import styles from "./detailProduct.module.scss";

const DetailProduk = ({ product }: { product: ProductType }) => {
  if (!product) {
    return (
      <div className={styles.produkdetail}>
        Produk tidak ditemukan atau sedang dimuat...
      </div>
    );
  }

  const defaultDescription = `${product?.name || "Produk ini"} hadir dengan kualitas terbaik. Cocok untuk aktivitas sehari hari. Desain modern dan nyaman digunakan.`;

  return (
    <div className={styles.produkdetail}>
      <div className={styles.produkdetail__container}>
        <h1 className={styles.produkdetail__title}>Detail Produk</h1>

        <div className={styles.produkdetail__main}>
          {/* Gambar */}
          <div className={styles.produkdetail__main__left}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.produkdetail__main__left__image}
            />
          </div>

          <div className={styles.produkdetail__main__right}>
            <h1 className={styles.produkdetail__main__right__name}>
              {product.name}
            </h1>

            <p className={styles.produkdetail__main__right__category}>
              {product.category}
            </p>

            <p className={styles.produkdetail__main__right__price}>
              Rp {product.price?.toLocaleString("id-ID")}
            </p>

            <p className={styles.produkdetail__main__right__description}>
              {defaultDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
