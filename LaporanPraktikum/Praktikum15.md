## Bagian 1 – Membuat Register View

![](https://github.com/user-attachments/assets/0077d076-aa2e-4868-bc60-68f80f535f29)

![](https://github.com/user-attachments/assets/5521d8ef-723b-4667-8d20-c4942009e85b)

![](https://github.com/user-attachments/assets/336cce95-3479-45e7-87f4-094a391aa8cc)

![](https://github.com/user-attachments/assets/d957dc13-0358-4cb0-a3d8-39abe8ea10f9)

![](https://github.com/user-attachments/assets/822476fc-eabb-461a-ae7e-58c93654236d)

## Bagian 2 – Membuat API Register

![](https://github.com/user-attachments/assets/4bf66ea9-e176-4da8-bbf1-ca9945bfb61f)

![](https://github.com/user-attachments/assets/62a944c4-ba07-4b76-971d-fc9f26e1c7c0)

![](https://github.com/user-attachments/assets/35eafcd2-703b-43fb-981e-b359dc1f2e3b)

![](https://github.com/user-attachments/assets/130b656f-1d9b-465e-811d-86f318a3a13c)

## Bagian 3 – Install bcrypt

![](https://github.com/user-attachments/assets/b7087dbd-e088-4024-8822-6d614b56e9e1)

![](https://github.com/user-attachments/assets/b986806a-7b6b-4ddb-a68c-7952ee15f51f)

![](https://github.com/user-attachments/assets/de85667f-ebd6-4609-97f9-f5c756448db8)

![](https://github.com/user-attachments/assets/8d976da1-06f4-4df8-8678-50f360fa98f4)

Uji Coba
Register baru

![](https://github.com/user-attachments/assets/7661971c-00be-44eb-aa1a-8d01bde535ff)

![](https://github.com/user-attachments/assets/89f13609-017f-432a-a344-8aabb507dba0)

Email sudah ada

![](https://github.com/user-attachments/assets/d3340acb-7190-40e3-ad43-08a350d738ee)

![](https://github.com/user-attachments/assets/fc40f60e-d51e-468a-bd67-dc0e9877d056)

methode GET
![](https://github.com/user-attachments/assets/f08f6777-a03f-438f-a8f0-bf486daec726)

## Tugas Praktikum

1. Implementasikan register terhubung ke database
   
   ![](https://github.com/user-attachments/assets/6ecc0e82-041e-41c8-988a-cf48d7e76320)

3. tambahkan validasi
   email wajib
   password minimal 6 karakter

   ![](https://github.com/user-attachments/assets/57addd36-31ce-4521-a237-61645d8afff1)

   ![](https://github.com/user-attachments/assets/65e41b90-c6fc-4dda-92b6-c16a571c10a2)

4. tambahkan role default member
   
   ![](https://github.com/user-attachments/assets/01e8610e-0908-480c-8ff7-5733987ec54d)

5. tampilkan pesan error di UI
   
   ![](https://github.com/user-attachments/assets/8d976da1-06f4-4df8-8678-50f360fa98f4)

## Pertanyaan analisis
1. Mengapa password harus di-hash?
   Jawab: agar terhindar dari kebocoran data
2. Apa perbedaan addDoc dan setDoc?
   Jawab: addDoc digunakan untuk data yang tidak mementingkan urutan sedangkan setDoc digunakan untuk data yang bersifat unik seperti userId
3. Mengapa perlu validasi method POST?
   Jawab: untuk mencegah aksesnya salah alamat seperti dibuka oleh orang melalui browser (GET)
4. Apa risiko jika email tidak dicek unik?
   Jawab: email akan terdaftar berkali kali dan berakibat crash karena akun login bersamaan tapi password beda dan data yg disimpan akan konflik karena tercampur dengan email yg lain
5. Apa fungsi role pada user?
   Jawab: untuk menentukan hak ases mereka diizinkan mengakses halaman yg mana saja
