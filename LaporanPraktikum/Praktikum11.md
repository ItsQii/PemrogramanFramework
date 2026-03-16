## langkah 1 membuat dynamic route

![](https://github.com/user-attachments/assets/a2a19bd7-e721-4fe6-be28-622d2d4e76c6)

![](https://github.com/user-attachments/assets/b43790f9-f885-459a-a975-afdbd260f66d)

## Langkah 2 Implementasi CSR

![](https://github.com/user-attachments/assets/9089bac4-64f1-4d77-886d-43219e91c465)

![](https://github.com/user-attachments/assets/5b127a07-c8f0-45c3-817e-878e29736272)

![](https://github.com/user-attachments/assets/64cf079d-fda7-449b-b323-5b617eaac513)

![](https://github.com/user-attachments/assets/64cf079d-fda7-449b-b323-5b617eaac513)

![](https://github.com/user-attachments/assets/a70aff7b-b661-45e3-8c93-254910e2f9a3)

![](https://github.com/user-attachments/assets/346a1881-48d3-49cc-9d5b-3b2d85abde22)

![](https://github.com/user-attachments/assets/9b8e8e57-ff33-481f-b7a8-77d4ac8900f5)

![](https://github.com/user-attachments/assets/8ecf7857-b207-42b8-a7cc-a5683c8f5219)

## langkah 3 IMplementasi SSR

![](https://github.com/user-attachments/assets/7ce7a2b4-1c69-4399-a529-6126a86b4061)

![](https://github.com/user-attachments/assets/a66e1f9a-03eb-4cb9-aff4-50615551457c)

## langkah 4 SSG

![](https://github.com/user-attachments/assets/e26257df-ffd8-45df-85c9-80f55e567236)


## pengujian

1. CSR
![](https://github.com/user-attachments/assets/0071a908-7fad-4bd0-b2a9-52e08f4cdd3a)

2. SSR
![](https://github.com/user-attachments/assets/d78a015b-ac19-4d2d-be77-24b14da3dc29)

3. SSG
![](https://github.com/user-attachments/assets/6dd19947-fcdb-433c-8db1-a87114aaa05b)

![](https://github.com/user-attachments/assets/ebc3fe37-e43b-493f-aba6-efec56ac465d)

## Tugas
1. Implementasikan halaman detail dengan CSR, SSR, SSG
   Jawab: sudah dilakukan di praktikum diatas

2. buat tabel perbandingan
| Aspek | CSR | SSR | SSG |
| :--- | :--- | :--- | :--- |
| **Loading** | Ada (terlihat saat fetch data di klien) | Tidak ada (halaman langsung tampil dengan data) | Tidak ada (paling cepat karena halaman sudah statis) |
| **Build Required** | Tidak | Tidak | Ya |
| **SEO** | Kurang | Baik | Sangat Baik |
| **Perubahan Data** | Langsung tampil (Real-time) | Langsung tampil (Real-time) | Harus *Build* ulang agar data baru muncul |

3. Dokumentasi sudah ada diatas

## Pertanyaan Analisis
1. mengapa getStathicPaths wajib pada dynamic SSG
Jawab: Memberi tahu next.js daftar url produk yg harus dibuat halaman nya saat di build

2. Mengapa CSR membutuhkan loading state\
   Jawab: Mencegah UI blank atau error saat browser sedang menunggu balasan data (sedang fetching) dari API

3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang
   Jawab: Karena halaman html nya hanya dibuat sekali saat di awal menggunakan npm run build,jadi halaman yg sudah dibuat disimpan dan akan ditampilkan berulang
   jadi kalau ada data baru yang ditambahkan next.js nya tidak akan tahu sampai di build lagi

4. mana metode terbaik untuk halaman detail e-commerce
   Jawab: SSR karena e commerce membutuhkan data real time dan akurat setiap saat

5. apa risiko menggunakan SSG untuk produk yg sering berubah
   Jawab: data yang ditampilkan bisa tidak sesuai dengan aslinya, seperti saat stock barang sudah habis tapi karena belum di build lagi di web nya masih tampil
   stock barang nya masih ada, selain itu kita perlu membuild ulang tiap harga/stok produk berubah
