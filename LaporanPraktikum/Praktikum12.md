## Implementasi ISR otomatis

1. tambahkan revalidate
   ![pic](https://github.com/user-attachments/assets/e57742e6-5b31-44d3-86db-31f658127d3b)

2. Uji ISR
   Sebelum 10dtk
   ![sebelum](https://github.com/user-attachments/assets/f738d4de-4c12-4f6f-a80c-451b9967718e)
   
   setelah 10dtk
   ![sesudah](https://github.com/user-attachments/assets/9f034a29-5091-4c91-84a3-d6459b9765fe)

## On Demand Revalidation

1. Buat API revalidation
   ![](https://github.com/user-attachments/assets/4635deca-4c24-466b-9cc4-678a2ad2484b)

2. Tambah Parameter
   ![](https://github.com/user-attachments/assets/4635deca-4c24-466b-9cc4-678a2ad2484b)
   
   Uji Coba
   ![](https://github.com/user-attachments/assets/7054ba61-041b-4479-87bc-904f9a493a44)

4. Tambah token security
   ![](https://github.com/user-attachments/assets/d21bec10-04fc-4e6b-92ad-3d47bbbb1555)

## Pengujian Manual Revalidation
token benar

![](https://github.com/user-attachments/assets/de32a03b-d552-46e7-837d-101cc6c03390)

token salah

![](https://github.com/user-attachments/assets/78afc879-03c5-4225-b3e6-c7686dcf676f)

## Tugas Praktikum
1. Tambahkan lagi produk di firebase
   ![](https://github.com/user-attachments/assets/9f034a29-5091-4c91-84a3-d6459b9765fe)

2. implementasikan isr dengan revalidate 10
   ![pic](https://github.com/user-attachments/assets/e57742e6-5b31-44d3-86db-31f658127d3b)

3. Tambahkan endpoint On-Demand Revalidation.
   ![](https://github.com/user-attachments/assets/d21bec10-04fc-4e6b-92ad-3d47bbbb1555)

4. Tambahkan validasi token.
   ![](https://github.com/user-attachments/assets/d21bec10-04fc-4e6b-92ad-3d47bbbb1555)

## H. Pertanyaan Analisis
1. Mengapa ISR lebih fleksibel dibanding SSG?
   Jawab: Karena ISR bisa refresh atau update halaman setelah di deploy tanpa perlu di deploy lagi sedangkan SSG baru bisa update setelah di build ulang
2. Apa perbedaan revalidate waktu dan on-demand?
   Jawab: revalidate menggunakan countdown waktu , jadi data akan diperbarui setelah lewat waktu yg ditentukan sedangkan on demand itu updatenya manual dipicu dengan API jadi halamannya bisa diperbarui
   langsung saat itu juga
4. Mengapa endpoint revalidation harus diamankan?
5. Apa risiko jika token tidak digunakan?
6. Kapan ISR lebih cocok dibanding SSR?
