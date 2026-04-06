## PRAKTIKUM 1 – Membuat Repository GitHub

saya menggunakan repo yang sudah ada

## PRAKTIKUM 2 – Deployment ke Vercel

Import Project

![](https://github.com/user-attachments/assets/8ea4a9fc-8b27-48f5-86e1-299fbbb440e0)

sebelum diimport lakukan konfigurasi terlebih dahulu

C. Mengatasi Error Saat Deployment
Dikarenakan pada code masih terdapat code static-site 

![](https://github.com/user-attachments/assets/15e9c63c-8cfc-4222-b7c4-1c571890ddd5)

Gunakan Environment Variable

Buat di .env.local:
NEXT_PUBLIC_API_URL=http://localhost:3000

![](https://github.com/user-attachments/assets/f22d80cc-c06b-432e-bb0b-138dda72ac31)

Ganti semua hardcoded URL:
process.env.NEXT_PUBLIC_API_URL

Contoh: fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`)

![](https://github.com/user-attachments/assets/acd1c141-3bf3-44e7-b90a-ca022eb416e6)

Selanjutnya import lakukan pengaturannya sbb

![](https://github.com/user-attachments/assets/4ec6784b-56c6-40d0-a7a4-fa46b69c2712)

![](https://github.com/user-attachments/assets/912ca30a-b208-4735-9c88-45f2f2845357)

## PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel

Import dari .env.local

![](https://github.com/user-attachments/assets/852f0e6c-5d05-4be0-9d8d-a2d64267f409)

## PRAKTIKUM 4 – Konfigurasi Google OAuth Production

Tambahkan Authorized Origins

![](https://github.com/user-attachments/assets/a98352d2-683a-4ec2-bbbc-ba86ea5c437f)

## PRAKTIKUM 5 – Pengujian Setelah 

coba akses /

![](https://github.com/user-attachments/assets/3d357fd2-044a-410a-b919-2e563c1ff76e)

akses /about

![](https://github.com/user-attachments/assets/aee3724d-b2b1-4260-a5d3-233a9d95bc3d)

akses /produk

![](https://github.com/user-attachments/assets/aba1b158-8a4c-40d9-b33e-456f46203356)

akses /profile

![](https://github.com/user-attachments/assets/617aaf68-b197-4bb8-9718-13b41d2396c)

login google

![](https://github.com/user-attachments/assets/9d14283a-27d5-4bba-9e6c-8a487371e8e7)

![](https://github.com/user-attachments/assets/c22039f0-d564-47fb-b98c-32e3cccc4240)

Login credential biasa

![](https://github.com/user-attachments/assets/13b7a84a-9a84-44a2-95c5-a6c22b55d192)

![](https://github.com/user-attachments/assets/7b81f424-30d2-4af3-a8aa-490cf2b1e180)

## Tugas Praktikum

1. Deploy project Next.js ke Vercel
Sudah di lakukan di praktikum sebelumnya

2. Pastikan API tidak menggunakan localhost

![](https://github.com/user-attachments/assets/03317a67-dfdd-4d11-afda-f52c09073d04)

3. Konfigurasikan Google OAuth production

![](https://github.com/user-attachments/assets/a98352d2-683a-4ec2-bbbc-ba86ea5c437f)

4. lakukan minimal 1 redeploy

![](https://github.com/user-attachments/assets/912ca30a-b208-4735-9c88-45f2f2845357)


