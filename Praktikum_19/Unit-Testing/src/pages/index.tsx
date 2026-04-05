import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>

      <section className={styles.center}>
        <div className={styles.badge}>
          <span>New</span> Configure Budget for Each Project →
        </div>

        <h1>Praktikum Next.js Pages Router</h1>
        <p>Mahasiswa D4 Pengembangan Web</p>

        <div className={styles.buttonGroup}>
          <button className={styles.btnAbout}>About</button>
          <button className={styles.btnBlog}>Blog</button>
        </div>
      </section>

    </main>
  );
}