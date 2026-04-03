## Langkah 1 Membuat Middleware
![](https://github.com/user-attachments/assets/cf20f720-ee7b-4528-8c3a-fbdf2a0b2d62)

## Langkah 2 Struktur dasar middleware
![](https://github.com/user-attachments/assets/2c7e63be-6445-440a-9b8e-3c2e9cfa6057)

## Langkah 3 Redirect Sederhana
![](https://github.com/user-attachments/assets/ec092161-28b3-474e-af81-6211804edc48)

## Langkah 4 Batasi route tertentu
![](https://github.com/user-attachments/assets/c5747cd6-2518-437b-b1a1-79c2873507a9)

## Langkah 5 Simulasi Login
![](https://github.com/user-attachments/assets/d83a8ba4-69b8-4969-a9c8-d3501d8f34c3)

## Pengujian

isLogin - False
<video src="https://github.com/user-attachments/assets/d91e247f-6cb6-4bb7-8a35-96ebf9e9b2f2" width="100%" controls>
</video>

isLogin - True
<video src="https://github.com/user-attachments/assets/135934dd-8ae8-453b-8c2e-c50337ce4be3" width="100%" controls>
</video>

Tambahkan Multiple route
![](https://github.com/user-attachments/assets/4b0c4bb5-f8fc-4e3b-87b9-75771a10b566)

<video src="https://github.com/user-attachments/assets/e2c6a5b2-ae60-4afa-9128-cb50042eb423" width="100%" muted autoplay loop>
</video>

## Tugas praktikum
Tugas Individu
1. Buat halaman:
/products
![](https://github.com/user-attachments/assets/1849f6b7-a443-46fc-ba00-ed68ca79a5b3)

/about
![](https://github.com/user-attachments/assets/24040469-70e0-45ab-9f2c-ee00ffbdf9e3)

/login
![](https://github.com/user-attachments/assets/fc789e92-187d-4cae-9325-18c3cbd6aadf)

2. Implementasikan Middleware:
Redirect ke /login jika belum login.
Izinkan akses jika login true.
![](https://github.com/user-attachments/assets/b3976179-73ef-4e31-8aa8-355af5e86f6e)

3. Tambahkan proteksi hanya untuk route tertentu.
   ![](https://github.com/user-attachments/assets/242cd4e9-ca9c-4f1a-aac2-b26e79119f5d)


## Pertanyaan Analisis
1. Mengapa middleware lebih aman dibanding useEffect?
   Jawab: Middleware lebih aman karena berjalan di server sebelum halaman dikirim ke browser, sedangkan useEffect berjalan setelah halaman tampil di client, sehingga konten sempat terlihat sebelum redirect
2. Mengapa middleware tidak menimbulkan glitch?
   Jawab: karena halaman yang tidak valid tidak pernah dirender dan redirect dilakukan dulu, sedangkan useEffect membuat halaman muncul dulu lalu berpindah, sehingga terlihat glitch
3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?
   Jawab: halaman seperti login atau register ikut terblokir dan bisa menyebabkan redirect loop
4. Kapan middleware tidak diperlukan?
   Jawab: saat aplikasi hanya berisi halaman publik tanpa autentikasi atau data penting
5. Apa perbedaan middleware dan API route?
   Jawab: Middleware digunakan untuk mengontrol alur request seperti validasi auth atau redirect sebelum masuk ke halaman atau API,
   Sedangkan API route digunakan untuk memproses data, seperti mengambil data dari database atau menangani operasi CRUD dan mengembalikan response ke client
