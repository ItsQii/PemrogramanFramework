## B. Konfigurasi Google OAuth

![](https://github.com/user-attachments/assets/4ab90252-94cf-4969-b9da-0436d945652c)

![](https://github.com/user-attachments/assets/68300039-c181-4a43-b4cc-225e93b0d024)

![](https://github.com/user-attachments/assets/5b1a723e-9485-4b7c-a028-3d85e780e3b1)

![](https://github.com/user-attachments/assets/86eedb4e-070f-409e-8dad-680db9496be1)

![](https://github.com/user-attachments/assets/e41fff0d-e915-4ac7-84c1-39052ce0bd78)

![](https://github.com/user-attachments/assets/d7693ea1-8a58-486c-ae7a-6288eb9d735f)

## D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
![](https://github.com/user-attachments/assets/99dcd4a1-3abf-4006-832d-93a3de5ecf6d)

## E. Tambahkan Button Login Google
![](https://github.com/user-attachments/assets/fd8eb64f-3965-4afd-9da5-f3e9dedb1a43)

![](https://github.com/user-attachments/assets/8b6a6878-22a9-45a5-b315-b6f7537959f60)

![](https://github.com/user-attachments/assets/36cadb8e-6c22-4bac-b5f8-d69d44e2de07)

![](https://github.com/user-attachments/assets/7d4439b0-c4ed-4e01-8d9d-e3d682e97c89)

![](https://github.com/user-attachments/assets/898ba9a9-71cd-4b42-a4ec-5e0411c21917)

![](https://github.com/user-attachments/assets/4f2f1782-f556-4ae3-b4c9-547f5b7cf03a)

G. Simpan Data Google ke Database
![](https://github.com/user-attachments/assets/6fb27a8d-1a4b-4290-aa43-f15dd578c546)

![](https://github.com/user-attachments/assets/0cc93baa-de70-4629-a55c-aa50a5a5fe47)

## Tugas Mandiri
1. Tambahkan role editor
   ![](https://github.com/user-attachments/assets/88c2ac79-55d1-4c50-bef0-70681bdf70c8)

2. Buat halaman khusus editor
   ![](https://github.com/user-attachments/assets/d800916d-ffa4-4287-adbd-c227d587f68f)

3. Tambahkan provider GitHub
   ![](https://github.com/user-attachments/assets/e6054067-16b2-4d79-a99f-7b618ab4cc00)
   
   ![](https://github.com/user-attachments/assets/834ffb80-b423-4f69-8957-6f4d3f8e0c8d)

   ![](https://github.com/user-attachments/assets/8f2a23c3-c033-4bf0-b711-c16014befa33)

   ![](https://github.com/user-attachments/assets/0ea987dc-6cb6-4608-ae2e-6131cfa1ed78)

   ![](https://github.com/user-attachments/assets/01d43237-2582-42fa-aae2-6dd36fa84f82)
   
4. Refactor service agar reusable
   ![](https://github.com/user-attachments/assets/6be21d75-5e08-424a-a56a-11386928aa6d)

   ![](https://github.com/user-attachments/assets/6799be47-8055-463d-b331-18b301729b51)

   ![](https://github.com/user-attachments/assets/8127d5b9-94a7-4b42-943a-e8f0db723ddb)

5. Gunakan next/image untuk optimasi avatar
   ![](https://github.com/user-attachments/assets/7fdbd0f1-12a9-44bb-9d7f-74594e038d2d)

## Analisis & Diskusi
1. Apa perbedaan login credential dan login Google?
   Jawab: di login credential data login kita disimpan di database kita sendiri sedangkan login google datanya dikelola oleh google, untuk keamanan nya password harus kita hash sendiri untuk login credential
   dan untuk credential juga kita perlu mengirim email verifikasi manual sedangkan google sudah diverifikasi langsung
2. Mengapa data Google tetap perlu disimpan ke database?
   Jawab: karena google tidak tahu role email yg di login di web kita jadi harus disimpan di database untuk menentukan role
3. Apa fungsi JWT callback?
   untuk memodifikasi token sebelum token di enkripsi seperti menambah role atau yg lain
4. Mengapa perlu multi-role?
   Jawab: agar kita bisa mengatur hak akses halaman web apa saja
5. Apa risiko jika tidak menyimpan user ke database?
   Jawab: role nya akan kembali ke role awal dianggap user baru


