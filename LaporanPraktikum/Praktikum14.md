## Bagian 1 – Install NextAuth
![](https://github.com/user-attachments/assets/4f5101ad-62de-4a85-aae9-95e14728acb2)

## Bagian 2 – Konfigurasi API Auth
![](https://github.com/user-attachments/assets/a0514fee-0b7b-4249-a04b-b43c407a990f)

## Bagian 3 – Tambahkan Secret
![](https://github.com/user-attachments/assets/57b5da40-2f1a-4b46-894e-d38961666620)

## Bagian 4 – Tambahkan SessionProvider
![](https://github.com/user-attachments/assets/7dade159-cd79-4fe4-b56e-eb2939a13fe5)

## Bagian 5 – Tambahkan Tombol Login & Logout
![](https://github.com/user-attachments/assets/a8e5e2cb-fba4-4f08-856e-d6c95b9761cc)

buka localhost:3000 dan sign in
![](https://github.com/user-attachments/assets/cdcf7a59-1476-4469-9767-ff1b966f5d8f)

Setelah berhasil login maka akan muncul session
![](https://github.com/user-attachments/assets/28c6fc29-7645-4408-95ef-aaa17b6bb22c)

Untuk dapat menangkap data pada session maka tambahkan code sebagai berikut
![](https://github.com/user-attachments/assets/a3f12071-f97d-4758-90a7-da4136a00e79)

Uji coba sign in dan sign out
![](https://github.com/user-attachments/assets/c1ae7464-d375-4584-a117-d02b412510f6)

![](https://github.com/user-attachments/assets/2751921e-012c-4147-8e6f-b4c66d7bd883)

![](https://github.com/user-attachments/assets/31ca462e-b134-46f4-bad3-cbe43cb75c93)

![](https://github.com/user-attachments/assets/c1ae7464-d375-4584-a117-d02b412510f6)

D. Menambahkan Data Tambahan (Full Name)
![](https://github.com/user-attachments/assets/adf974b4-46ca-4770-99df-8ca0bd42d9ad)

modifikasi navbar.module.scss
![](https://github.com/user-attachments/assets/687d806a-8111-4bd7-b709-4dc40dfa8039)

Modifikasi index.tsx pada folder components/layouts/navbar
![](https://github.com/user-attachments/assets/53f7790c-3ca9-4461-9eb9-a96fde95f944)

uji coba sign in dan sign out
![](https://github.com/user-attachments/assets/9440e57b-ae41-46ac-b080-6141aae4f5a0)

![](https://github.com/user-attachments/assets/c468270d-3f86-49c0-9f36-a81310e5484e)

![](https://github.com/user-attachments/assets/a5acedbe-5035-4015-9e8c-17b848bbe8f0)

E. Proteksi Halaman Profile

Buat Halaman Profile

![](https://github.com/user-attachments/assets/fa759590-a535-45e2-b5a8-d0eded016a8b)

![](https://github.com/user-attachments/assets/67829a10-9674-4b4a-b080-2a5e793cf6a7)

Buat Middleware Authorization
![](https://github.com/user-attachments/assets/19eaf86b-f0f1-4c26-bdb1-f8d3d22425ad)


Pengujian
Uji 1 - Belum Login
<video src="https://github.com/user-attachments/assets/e52d1bd7-4170-4df4-a614-7a094cf7fb77" width="100%" autoplay muted loop></video>

Uji 2 - Sudah Login
<video src="https://github.com/user-attachments/assets/5b6e246c-acc4-4b7e-a389-3cd6f6eeaa76" width="100%" autoplay muted loop></video>

Uji 3 - Logout
<video src="https://github.com/user-attachments/assets/5ac354c0-3320-474b-8f4c-550104a63a71" width="100%" autoplay muted loop></video>

## Tugas Praktikum
1. Implementasikan login menggunakan Credentials Provider

   ![](https://github.com/user-attachments/assets/55c1c530-6d14-49fb-812f-b9b439159565)
   
2. Tambahkan field full name

   ![](https://github.com/user-attachments/assets/a2ec1ee1-76a4-45ef-8458-f763e2079e15)

3. Tampilkan full name setelah login

   ![](https://github.com/user-attachments/assets/a449c930-2651-4f56-bdf0-fe864c433df4)

4. Buat halaman profile

   ![](https://github.com/user-attachments/assets/f22d706f-b54c-4748-8ff5-b414ae51f9f4)

5. Lindungi halaman profile dengan middleware

   ![](https://github.com/user-attachments/assets/8fb0566f-36a6-4065-a9c9-c05ca3a162d4)

## Pertanyaan Analisis
1. Mengapa session menggunakan JWT?
   Jawab: agar data sesi kita masih tetap tersimpan di di cookies browwser jadi tidak ada beban menyimpan data login di database
2. Apa perbedaan authorize() dan callback jwt()?
   Jawab: authorize berfungsi untuk validasi apa email atau password yg kita isi sesuai dengan database sedangkan callback jwt berfungsi sebagai bungkus data user yg dimasukkan tadi
   di authorize jika berhasil maka akan diubah menjadi jwt
3. Mengapa middleware perlu getToken()?
   Jawab: agar middleware bisa membaca cookies yg berisi jwt dari request user dan membaca status user sudah login atau tidak dan menentukan izin akses halamannya
4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?
   Jawab: maka JWT tadi bisa diganti dan orang lain bisa mengakses web kita, karena dengan aadanya NEXTAUTH_SECRET yg mengenkripsi jwt maka walaupun diubah masih tetap aman
5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?
   Jawab: autentikasi adalah proses verifikasi awal saat kita mengisi email dan password untuk menentuukan apakah ini benar benar user atau bukan, sedangkan otorisasi adalah proses
   menentukan akses ke halaman tergantung role yg kamu pakai saat login













