import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum Next.js</title>
      </Head>

      <div>
        <h1>Praktikum Next.js Pages Router</h1>
        <br />
        <p>Mahasiswa D4 Pengembangan Web</p>

        <Link
          href="/about"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Tentang Saya
        </Link>
      </div>
    </>
  );
}
