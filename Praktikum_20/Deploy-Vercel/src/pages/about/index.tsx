import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function About() {
  return (
    <main className={styles.main}>
      <Head>
        <title>About Me - Ahmad Rifqi</title>
      </Head>

      <section className={styles.center}>
        <h1>About Page</h1>
        <p>Informasi Profil Pengembang</p>
      </section>

      <div className={styles.aboutCardLarge}>
        <h2>About me</h2>
        <ul className={styles.infoList}>
          <li>
            <strong>Nama</strong>: Ahmad Rifqi Hendriansyah
          </li>
          <li>
            <strong>Kelas</strong>: TI-3D
          </li>
          <li>
            <strong>NIM</strong>: 2341720134
          </li>
          <li>
            <strong>Jurusan</strong>: D-IV Teknik Informatika
          </li>
        </ul>
      </div>
    </main>
  );
}