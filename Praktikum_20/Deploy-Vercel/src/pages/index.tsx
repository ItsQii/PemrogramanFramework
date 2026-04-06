import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Link from "next/link"
import { Info, Package, BookText, UserCircle, Settings, Store } from "lucide-react"; 

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>

      <section className={styles.center}>
        <h1>Praktikum Next.js Pages Router</h1>
        <p>Mahasiswa D4 Pengembangan Web</p>
      </section>

      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2>
            <Info className={styles.icon} size={42} />
            About
          </h2>
          <p>Tentang aplikasi dan profil pengembang</p>
        </Link>

        <Link href="/produk" className={styles.card}>
          <h2>
            <Package className={styles.icon} size={42} />
            Products
          </h2>
          <p>Daftar produk lengkap dan detail</p>
        </Link>

        <Link href="/blog" className={styles.card}>
          <h2>
            <BookText className={styles.icon} size={42} />
            Blog
          </h2>
          <p>Artikel, tutorial, dan update terbaru.</p>
        </Link>

        <Link href="/profile" className={styles.card}>
          <h2>
            <UserCircle className={styles.icon} size={42} />
            Profile
          </h2>
          <p>Kelola profil dan informasi akun pengguna</p>
        </Link>

        <Link href="/setting" className={styles.card}>
          <h2>
            <Settings className={styles.icon} size={42} />
            Settings
          </h2>
          <p>Konfigurasi dan atur preferensi</p>
        </Link>

        <Link href="/shop" className={styles.card}>
          <h2>
            <Store className={styles.icon} size={42} />
            Shop
          </h2>
          <p>Akses halaman belanja</p>
        </Link>

      </div>
    </main>
  );
}