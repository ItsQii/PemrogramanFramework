## BAGIAN 1 – Custom Login Page

![](https://github.com/user-attachments/assets/4ce82c93-a1e4-4c4e-9024-3e5764384092)

## BAGIAN 2 – Handle Login di Frontend

![](https://github.com/user-attachments/assets/e5a1b729-e2f0-4502-a32f-c9ee85289b1f)

![](https://github.com/user-attachments/assets/e1ac6335-9279-4111-92e9-2895d335f26d)

![](https://github.com/user-attachments/assets/1f96438b-d996-4117-b1c5-978e42fb1cd7)

![](https://github.com/user-attachments/assets/a7116965-36b3-4c5d-b2b5-9c0c99430d2f)

![](https://github.com/user-attachments/assets/b3b93730-6dc1-4a70-98ae-da5d6bf30581)

![](https://github.com/user-attachments/assets/c48c988f-3f93-4fae-8f39-45739c8d032d)

## BAGIAN 3 – Authorize di NextAuth (Database Login)

![](https://github.com/user-attachments/assets/43cd61ff-5253-430a-ba86-90398bde0720)

## BAGIAN 4 – Tambahkan Role ke Token

![](https://github.com/user-attachments/assets/a4b7dc92-ab33-4c4c-90e5-2fdf0ef7fdfc)

![](https://github.com/user-attachments/assets/ea1f27a8-abf6-45f3-8f5c-2a487382b1aa)

![](https://github.com/user-attachments/assets/44811048-706d-4358-8de8-90755cb254de)

## BAGIAN 5 – Callback URL Logic

![](https://github.com/user-attachments/assets/14853fe4-eb02-4eeb-a185-9dab36c2c091)

## BAGIAN 6 – Membuat halaman Admin dan authorize

![](https://github.com/user-attachments/assets/3b550787-1c52-4646-8df7-5c35035708a2)

![](https://github.com/user-attachments/assets/15f39e9c-c0f3-4c20-a9b4-acf5aebf1058)

Pengujian
Uji 1 - Login Valid

![](https://github.com/user-attachments/assets/210ea0c6-7871-4b5e-b51a-3b9568bb6cf0)

![](https://github.com/user-attachments/assets/cfe88173-12c0-4f55-8bf7-5354d4bf03bd)

Uji 2 – Password Salah

![](https://github.com/user-attachments/assets/0b42d62c-a658-4ad8-a20a-065bcf795219)

Uji 3 - Akses Admin sebagai User

<video src="https://github.com/user-attachments/assets/c2479e58-61c7-4355-847f-594311934fbc" width="100%" autoplay muted loop></video>

Uji 4 – Akses Admin sebagai Admin

![](https://github.com/user-attachments/assets/fe7ae048-f52d-47fa-bece-d8d6a5cc58bd)

<video src="https://github.com/user-attachments/assets/1bca8616-a6b4-4a99-8804-d5d95d055d39" width="100%" autoplay muted loop></video>

## Tugas Praktikum
1. Implementasikan login database

   ![](https://github.com/user-attachments/assets/9cec2d8e-bf23-4401-acd3-d06e6d777c9b)

2. Tambahkan role pada user

   ![](https://github.com/user-attachments/assets/2d12d74e-ba36-46c2-822e-a12af3fd6168)

3. Buat halaman

   Profile

   ![](https://github.com/user-attachments/assets/46433107-7afc-4bfa-bd7b-442aa42225ed)

   Admin

   ![](https://github.com/user-attachments/assets/c1248ab1-6696-4920-8cc5-c415b8e9d541)

4. Proteksi /admin hanya untuk admin

   ![](https://github.com/user-attachments/assets/513dda55-66ca-4801-8e23-e2f66354cf69)

5. Implementasikan callback URL

   ![](https://github.com/user-attachments/assets/cf024257-456e-4387-92ea-f5eedeb7f19f)

H. Pertanyaan Analisis
1. Mengapa password harus diverifikasi dengan bcrypt.compare?
   Jawab: karena di database password tidak bisa disimpan sebagai teks biasa tapi dalam bentuk hash
2. Mengapa role disimpan di token?
   Jawab: agar query nya tidak berulang setiap pindah halaman harus cek ke databse untuk verifikasi role
3. Apa fungsi callbackUrl?
   Jawab: untuk menavigasi user setelah login user akan diarahkan ke halaman yg dia tuju di awal
4. Mengapa middleware penting untuk security?
   Jawab: karena melalui middleware kita bisa memakai kode security untuk beberapa halaman sekaligus, dan juga karena middlewar itu berjalan sebelum halaman di render jadi jika user tidak
   punya akses maka akan langsung terlempar
5. Apa risiko jika role tidak dicek di middleware?
   Jawab: maka user yg role nya cuma member bisa mengakses admin atau role lain lewat alamat browser seperti localhost:3000/admin dan mencuri data dll



