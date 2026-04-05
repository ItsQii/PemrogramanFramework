## PRAKTIKUM 1 – Setup Jest di Next.js

1. Install Dependencies

![](https://github.com/user-attachments/assets/0a79c210-9d08-4530-9e71-c42ea91e0153)

2. Buat File Konfigurasi

![](https://github.com/user-attachments/assets/787fff6d-e62d-4f14-8977-d430c1b3be24)

Isi dengan:

![](https://github.com/user-attachments/assets/46fcad7c-4167-40d7-bd06-7a5e5d42ca00)

3. Tambahkan Script di package.json

![](https://github.com/user-attachments/assets/21f24826-415c-4ffa-b48d-bd756b71b02c)

## PRAKTIKUM 2 – Struktur Folder Testing

buat folder src/_test_

![](https://github.com/user-attachments/assets/b4b7b8e2-9268-4d03-827b-dc088e4acd27)

## PRAKTIKUM 3 – Testing Halaman About

1. Buat File Testing

![](https://github.com/user-attachments/assets/7d7bfdb7-aa4a-48ac-a60a-3c3ce68e37fe)

2. Contoh Testing Snapshot. Pada about.spec.tsx tambahkan code berikut :

![](https://github.com/user-attachments/assets/335fd8c3-9093-4d22-b3c8-9fccc0f429ec)

3. Jalankan Testing

![](https://github.com/user-attachments/assets/230219e3-330e-425c-b272-4d83408f5160)

## PRAKTIKUM 4 – Coverage Report

1. Jalankan npm run test:coverage

![](https://github.com/user-attachments/assets/f027c956-b411-40dd-9dc6-7c6c181c7850)

2. Akan muncul folder coverage/ lalu buka lewat file explorer

![](https://github.com/user-attachments/assets/7b249653-3270-4b14-ad15-572135f1c371)

## PRAKTIKUM 5 – Konfigurasi Coverage Lengkap

1. Update jest.config.mjs:

![](https://github.com/user-attachments/assets/675a08bf-dda1-4a11-8e9f-411de8056b65)

2. Jalankan npm run test:coverage

![](https://github.com/user-attachments/assets/420c498e-58d6-49c2-b18e-db9f0c910ee6)

3. Jika dilihat di index.htmlnya

![](https://github.com/user-attachments/assets/e1e02958-8ad1-42f4-9b57-c25a77076adb)

## PRAKTIKUM 6 – Testing dengan getByTestId

Tambahkan pada About Page

![](https://github.com/user-attachments/assets/403e7273-045f-472e-a19d-2fb606f82246)

Update Testing pada about.spec.tsx

![](https://github.com/user-attachments/assets/4a701449-ec3d-440b-9616-f7e9ae8f5eb9)

![](https://github.com/user-attachments/assets/af1d84bd-450f-45cb-ad31-cd22f7d97a8c)

Coba Jika dibuat Salah:
- Rubah menjadi toBe("About")

![](https://github.com/user-attachments/assets/da517ade-3c8d-4932-ac60-ad3b870a6ffa)

Jalan kan dan Hasil:FAIL
Expected: "About"
Received: "About Page"

![](https://github.com/user-attachments/assets/6d362352-a893-4aaa-8d87-4fb5415d9de2)

## PRAKTIKUM 7 – Testing Page dengan Router (Mocking)

Buat file product.spec.tsx

![](https://github.com/user-attachments/assets/7663c7ac-3628-43ff-b9cd-fcbd8acb9a1b)

Tambahkan kode berikut

![](https://github.com/user-attachments/assets/816911d3-d629-44b6-80e1-c982e530f992)

Ketika testing halaman Product, sering muncul error:
NextRouter was not mounted

![](https://github.com/user-attachments/assets/7d46e263-2895-44ac-af15-66f6547b2bda)

Solusi: Mock Next Router
Tambahkan di file product.spec.tsx

![](https://github.com/user-attachments/assets/a355d997-3d21-48ae-8196-229a2ca823e7)

## PRAKTIKUM 8 – Menangani Undefined Data

Jalankan npm run test:coverage maka akan muncul error

![](https://github.com/user-attachments/assets/afbcc443-d854-47e4-b3d3-20d29ca09b0f)

Jika muncul error:
Cannot read properties of undefined
Perbaiki di komponen:

Pada file index.tsx pada folder pages/produk

![](https://github.com/user-attachments/assets/38643016-1c76-4124-8cce-55366abea255)

Jalankan npm run test:coverage maka akan muncul error

![](https://github.com/user-attachments/assets/afbcc443-d854-47e4-b3d3-20d29ca09b0f)

Maka Solusinya perbaiki code pada file

![](https://github.com/user-attachments/assets/22bbe91c-fa5a-4db6-877f-b266bed429d4)

Note pastikan : comment pada code berikut pada 2 code testing

![](https://github.com/user-attachments/assets/ee90b6c5-e657-41d2-8bee-3ccba2c2672f)

![](https://github.com/user-attachments/assets/f835d3f2-0021-4e46-8fdf-905f010245e5)

## Tugas Praktikum

1. Buat unit test untuk:
   
Halaman Product

![](https://github.com/user-attachments/assets/4b3a2d5c-a856-4032-8796-0161e108c513)

1 Komponen

![](https://github.com/user-attachments/assets/613f5f91-2b2c-43d4-ab81-d7a8dad4c9f6)

2. Gunakan minimal:

1 Snapshot test
1 toBe()
1 getByTestId()

![](https://github.com/user-attachments/assets/1f510740-1496-43ee-8aa6-bc33cb2ebe2b)

3. Buat coverage minimal 50%

![](https://github.com/user-attachments/assets/5d2e1a24-a585-44e7-8189-9c60606c7f69)

4. Lakukan mocking untuk router

![](https://github.com/user-attachments/assets/07486fcc-6b25-44be-8d79-cf1f8954ac81)

5. Dokumentasi hasil coverage

![](https://github.com/user-attachments/assets/b6ccfceb-0b80-4f5d-a637-98c06e86940a)

![](https://github.com/user-attachments/assets/076fffef-05c6-4e01-9ad0-a8341ff8ecdd)

## Diskusi & Refleksi
1. Mengapa unit testing penting sebelum production?

   Jawab: untuk mendeteksi eror ataupun bug sebelum di produksi dan juga untuk memastikan keamanan kode
   
2. Mengapa branch coverage sulit mencapai 100%?

   Jawab: karena beberapa kode memiliki logika bercabang ataupun double dan juga Kadang ada kondisi yang sangat jarang terjadi
   (seperti error 500 dari server) yang sering kelewat untuk dibuatkan skenario tesnya
3. Apa itu mocking?

   Jawab: memalsukan objek atau fungsi luar yang dibutuhkan komponen, jadi sepertimocking UseRouter jadi kita tidak butuh kooneksi internet asli agar bisa berjalan
   
4. Kapan snapshot test digunakan?

   Jawab: saat ingin tes kalo UI nya tidak berubah tiba tiba atau tidak sengaja

5. Apakah semua file harus dites?

   Jawab: menurut saya file yang di tes hanya file yang penting seperti login dan register
