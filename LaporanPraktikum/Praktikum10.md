## Langkah 1 Setup Halaman Static
![code](https://github.com/user-attachments/assets/857dacd0-da60-41ea-8039-5a1a8b17fd0a)

## Langkah 3 Build Production

![code](https://github.com/user-attachments/assets/80fceed6-56ab-4fbf-b0b4-6886fa40c434)

![pict](https://github.com/user-attachments/assets/102c8488-d4e4-4bd0-83cc-aa978eb1d936)

![npm](https://github.com/user-attachments/assets/fc614952-70c1-4a52-927f-9dc1f2007e6d)

## Langkah 4 Pengujian Data
1. Tambah data di database
   A. CSR bertambah

   ![CSR](https://github.com/user-attachments/assets/47140650-34e0-4105-aa67-4ce267c63b33)

   B. SSR bertambah

   ![SSR](https://github.com/user-attachments/assets/24aebc2c-d5b9-45a0-8329-f5b8d160988b)

   C. SSG Tidak bertambah

   ![SSG](https://github.com/user-attachments/assets/c60359f5-d296-46a7-af6b-d118af880629)

2. Build Ulang
   ![SSG](https://github.com/user-attachments/assets/bae482a5-4088-4696-a035-bb812aaff980)

## Tugas Praktikum

1. Buat halaman CSR, SSR, SSG
   Jawab: Sudah ada sejak di praktikum sebelumnya dan untuk screenshotnya ada di step pengujian data yang membandingkan CSR SSR dan SSG

2. Lakukan pengujian tambah data, hapus data, dan bandingkan hasil
   Jawab: untuk penambahan data sudah dilakukan di langkah sebelumnya

   Pengujian hapus data(data kembali menjadi 3 dari 4 data)
   ![hapusdata](https://github.com/user-attachments/assets/2c4008e5-b617-42cd-8597-906b1615230d)

   di /produk(CSR) data langsung terupdate setelah refresh
   ![CSR](https://github.com/user-attachments/assets/b2db69cf-ebeb-4ec9-9840-148328ffa34b)

   di /produk/server(SSR) data juga langsung terupdate
   ![SSR](https://github.com/user-attachments/assets/78fb2ae7-9491-4457-9882-0f4e14406256)

   di /produk/static(SSG) tidak terhapus/terupdate datanya, kita perlu membuild ulang dan npm run start lagi agar datanya terupdate
   ![SSG](https://github.com/user-attachments/assets/a7fbb8de-92e7-4a98-8c16-c79dac154ede)

   disini setelah saya build ulang dan npm run start lagi data sudah terupdate
   ![SSG](https://github.com/user-attachments/assets/a2b257fa-28a5-495e-ae6b-fe0b0e193192)

3. Analisis
   Berdasarkan pengujian penambahan dan penghapusan data yang telah dilakukan, terlihat perbedaan yang sangat kontras pada cara masing-masing metode rendering
   menangani pembaruan data, Pada metode Client-Side Rendering (CSR) dan Server-Side Rendering (SSR), data pada halaman web selalu sinkron dengan database
   setiap kali halaman di-refresh, Hal ini terjadi karena CSR melakukan pengambilan data melalui API di sisi browser setelah halaman dimuat,
   sementara SSR menjalankan fungsi getServerSideProps untuk menarik data terbaru langsung dari server sebelum HTML dikirimkan ke pengguna

   Sebaliknya, halaman Static Site Generation (SSG) tidak menunjukkan perubahan apa pun meskipun data di database telah ditambah atau dihapus
   Hal ini disebabkan karena pada SSG, dokumen HTML beserta datanya sudah bersifat statis dan "terkunci" sejak proses build (npm run build) dilakukan,
   Satu-satunya cara agar halaman SSG dapat menampilkan data terbaru adalah dengan melakukan proses build ulang dan menjalankan kembali server produksi,
   sehingga file HTML statis yang baru dapat dihasilkan berdasarkan kondisi database saat itu juga

   Analisis ini membuktikan bahwa meskipun SSG menawarkan kecepatan akses yang paling tinggi karena tidak ada proses pengambilan data berulang,
   metode ini kurang efektif untuk halaman yang datanya bersifat sangat dinamis. SSR dan CSR lebih unggul dalam hal akurasi data real-time,
   namun dengan konsekuensi adanya beban komputasi tambahan pada server atau browser setiap kali akses dilakukan
   Khusus untuk SSR, keunggulan utamanya terletak pada kombinasi antara data yang selalu segar dan optimasi SEO yang baik
   karena konten produk sudah tertulis langsung di dalam kode sumber, berbeda dengan CSR yang kontennya baru muncul setelah
   skrip JavaScript selesai dieksekusi di sisi klien


## Studi Analisis
1. Mengapa SSG tidak menampilkan data terbaru?
   Jawab: Karena proses fetching data cuma jalan sekali saat fase build time (npm run build)\
   Hasilnya jadi file HTML statis, jadi kalau ada perubahan di database setelah itu, datanya tidak akan ter-update sampai kita build ulang proyeknya
2. Mengapa SSG lebih cepat
   Jawab: Soalnya karena server tidak perlu berpiikir lagi untuk render atau menarik data dari API saat ada request masuk
   Browser langsung dapat file HTML yang sudah jadi, jadi response time-nya jauh lebih kencang dibanding CSR atau SSR
3. Kapan SSG tidak cocok digunakan?
   Jawab: SSG tidak cocok buat halaman yang update datanya harus real-time, contohnya seperti dashboard saham, skor bola, atau aplikasi chat
4. Mengapa e-commerce tidak cocok menggunakan SSG murni?
   Jawab: karena data harga dan stok yg harus terus terupdate jika menggunakan SSSG murni jika barang sudah tidak ada dan blm di build ulang maka
   konsumen akan salah beli kaarena di halaman nya masih ada stoknya gara gara belum di build ulang sedangkan stoknya sudah habis
5. Apa perbedaan build mode dan development mode?
   Jawab: dev mode untuk developer yg ingin mengoding appikasinya karena masih ada masih ada auto hot reload nya sedangkan build mode digunakan untuk produksi
   Di mode ini, fitur debugging dan hot reload dimatikan total demi mengejar performa maksimal dan keamanan aplikasi



   





   




