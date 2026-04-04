## PRAKTIKUM 1 – Image Optimization

A. Optimasi Gambar Lokal (Public Folder)
Mengganti tag <img> pada halaman 404 dengan next/image

![](https://github.com/user-attachments/assets/e446f39a-7f7c-400e-87a7-62c37096e979)

B. Optimasi Gambar Remote (External URL)

Modifikasi file index.tsx

![](https://github.com/user-attachments/assets/b056f3cb-eeab-49b8-92d3-ad83c32fd787)

Modifikasi file next.config.js

![](https://github.com/user-attachments/assets/681449ec-5c78-437e-a902-a656d04d5a08)

## PRAKTIKUM 2 – Font Optimization

Buka file index.tsx pada folder Appshell/index.tsx dan modifkasi

![](https://github.com/user-attachments/assets/60ab3ac9-7c87-4da3-993a-3b708965ed78)

Jalankan browser localhost:3000/produk maka font akan berubah menjadi roboto
untuk mengecek fontnya bisa menggunakan extension FontFinder

![](https://github.com/user-attachments/assets/0a547769-9277-41f8-83b6-fb80f3b297e1)

## PRAKTIKUM 3 – Script Optimization

B. Menggunakan next/script

Buka file index.tsx pada folder layouts/Navbar dan modifikasi

![](https://github.com/user-attachments/assets/7bb39fd1-42bf-4048-be0c-58cd50b6058f)

## PRAKTIKUM 4 – Optimasi Avatar dengan next/image

Buka file index.tsx pada folder layouts/navbar dan modifikasi

![](https://github.com/user-attachments/assets/8379b642-de54-43c0-903d-52b7e2485081)

Tambahkan hostname Google:

![](https://github.com/user-attachments/assets/d0caea7d-bece-4752-a9a7-9de095595bbe)

## Tugas Praktikum

1. Optimasi semua image di project menggunakan next/image

karena image hanya ada di 404 dan halaman produk maka semua sudah di optimasi menggunakan next/image
   
![](https://github.com/user-attachments/assets/e446f39a-7f7c-400e-87a7-62c37096e979)

![](https://github.com/user-attachments/assets/b056f3cb-eeab-49b8-92d3-ad83c32fd787)

2. Gunakan minimal 1 font dari next/font

   ![](https://github.com/user-attachments/assets/85235193-184b-4b68-a154-478de02fd43e)

3. Tambahkan script Google Analytics menggunakan next/script

   ![](https://github.com/user-attachments/assets/76208eda-7768-43e4-811b-38a99e3acbd2)

   google analytics berhasil diterapkan

   ![](https://github.com/user-attachments/assets/c233db0f-1dd6-4b81-bd32-c73b641e1727)

4. Terapkan dynamic import pada minimal 1 komponen

   ![](https://github.com/user-attachments/assets/72208aef-e95d-4f79-afdd-cee7f2309dde)
   
5. Dokumentasikan perubahan performa (screenshot Lighthouse)

   ![](https://github.com/user-attachments/assets/37088dbc-ece1-49bc-bad9-5ca6626638ac)

## Refleksi & Diskusi
1. Mengapa <img> biasa tidak optimal?
   
   Jawab: karena <img> mendownload gambar tapi melihat resolusi device user dan sering menyebabkan ukuran halaman yg tiba tiba berubah saat gambar sudah muncul
2. Apa perbedaan font CDN dan next/font?
   
   Jawab: di font CDN saat mau  membuka halaman server harus  melakukan request ke google font untuk menggecek font nya sedangkan next/font sudah menggunakan font lokal yg sudah didownload
   dulu oleh nextjs jadi bisa  mengurangi waktu loading
   
3. Mengapa script bisa membuat website lambat?

   Jawab: karena website harus berhenti dulu sebentar untuk menjalankan kode script itu
   
4. Kapan harus menggunakan dynamic import?

   Jawab: saat di website menggunakan komponen yg berukuran besar seperti lokasi di map ataupun diagram grafik, jadi digunakan dynamic agar saat kita membutuhkannya baru di download jika tidak dibuka
   maka tidak akan di download agar tidak memberi beban ke web
   
5. Apa dampak bundle size terhadap UX?

   Jawab: device user akan jadi lebih cepat panas jika bundle size besar dan jika size nya ringan maka website kita akan jadi terasa ringan dan cepat
