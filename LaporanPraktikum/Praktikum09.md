## Langkah 1 SETUP SSR

![code](https://github.com/user-attachments/assets/59d6d0e6-44ea-4979-b05f-cefaf4743835)

## Langkah 2 Implementasi getServerSideProps

![code](https://github.com/user-attachments/assets/89671cd1-f75b-4cac-acf1-95312b0f8200)

![pic](https://github.com/user-attachments/assets/1e23b58f-93b9-4070-83f2-73931490b8a1)

## Langkah 3 refactor Type

![nambahkan product.type.ts](https://github.com/user-attachments/assets/da23d42d-9147-434b-a498-6a0050e42829)

![modifikasi server.tsx](https://github.com/user-attachments/assets/4dbee0c4-7ef4-47e0-a0a5-94262ce7d194)

## Uji Perbedaan CSR vs SSR

1. Uji Skeleton

   A. CSR
      
   ![skeletonCSR](https://github.com/user-attachments/assets/33f636cc-220e-47e6-8143-c044dbd1510f)

   B. SSR

   ![skeletonSSR](https://github.com/user-attachments/assets/bcb580d3-9318-499d-a817-88f1c74596bf)

2. Uji Network Tab

   A. CSR

   ![requestAPICSR](https://github.com/user-attachments/assets/24b99b18-f82b-4d77-8766-8893aa31c2f1)

   B. SSR

   ![RequestAPI](https://github.com/user-attachments/assets/011ab460-e781-4cd3-975c-ddf83e7f1c5e)

   View Source

   A. CSR

   ![vwscCSR](https://github.com/user-attachments/assets/321897ad-185d-43ed-b9de-cabfec6ec5d6)

   B. SSR

   ![vwscSSR](https://github.com/user-attachments/assets/ed9c9231-c9db-48c2-b4ba-6e2324ac8456)

## Studi Analisis
1. Mengapa SSR lebih baik untuk SEO?
   Jawab: di ssr, server mmeberi html yg sudah ada isinya seperti judul dan harga, jadi saat dibaca keywordnya sudah ada disana semua
   sedangkan di csr kita harus menunggu JS nya Fetch data dulu baru kontennya akan muncul

2. Kapan sebaiknya menggunakan SSR?
   Jawab: Saat kita ingin membuat aplikasi web seperti Marketplace karena harga produk bisa berubah tiap beberapa saat SSR sangat cocok untuk dipakai\
    dan juga untuk para user melihat image produk tanpa menunggu loading lama

3. Apa kekurangan SSR dibanding CSR?
   Jawab: Server bisa down karena render dilakukan server jika ada jutaan client membuka maka bisa down, dan
   Browser akan menunggu sedikit lebih lama untuk nerima data pertama karena server harus memanggil API

4. Mengapa skeleton tidak muncul pada SSR?
   Jawab: Skeleton tidak muncul karena pada SSR, fungsi getServerSideProps melakukan proses pengambilan data dari API diselesaikan terlebih dahulu di sisi server
   sebelum dokumen HTML dikirim ke browser






