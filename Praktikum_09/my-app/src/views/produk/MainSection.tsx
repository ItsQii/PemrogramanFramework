import Link from "next/link";
import styles from "./produk.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: number;
  category: string;
  image: string;
};

const MainSection = ({ products }: { products: ProductType[] }) => {
  return (
    <section className={styles.produk}>
      <h2 className={styles.produk__title}>Daftar Produk</h2>

      <div className={styles.produk__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <div key={product.id} className={styles.produk__item}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.produk__item__image}
                />
                <h2 className={styles.produk__item__name}>{product.name}</h2>
                <p className={styles.produk__item__category}>{product.category}</p>
                <p className={styles.produk__item__price}>
                  Rp {product.price?.toLocaleString("id-ID")}
                </p>
                <Link
                  href={`/produk/${product.id}`}
                  className={styles.produk__item__link}
                >
                  Lihat Detail
                </Link>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;