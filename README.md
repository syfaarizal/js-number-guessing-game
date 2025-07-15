# 🎮 JavaScript Challenge — Day 4: Tebak Angka Game

Bagian dari tantangan pribadi **Code Sprint 30 – 30 Hari JavaScript Konsisten**.  
Pada hari ke-4 ini, saya membangun game interaktif sederhana: **Tebak Angka**, dengan fitur yang berkembang dari versi dasar menjadi versi yang lebih interaktif, modular, dan ramah pengguna.

---

## 🎯 Tujuan Challenge

- Menggunakan `Math.random()` untuk membuat angka acak
- Menggunakan `while` loop dan kondisi `if/else`
- Menyusun logika program yang berinteraksi langsung dengan user
- Meningkatkan skill validasi input dan pengendalian alur
- Memahami jenis-jenis *expression* dan alur *user feedback*

---

## 💻 Deskripsi Program

Program ini meminta user untuk menebak angka rahasia yang telah di-generate secara acak:

1. User memilih mode: **normal (1–10)** atau **sulit (1–50)**
2. User menebak angka hingga benar
3. Program memberikan feedback: *“Terlalu kecil” / “Terlalu besar”*
4. Jika berhasil, program memberikan pesan selamat + jumlah percobaan
5. Menyertakan sistem skor berdasarkan performa user

---

## 🧠 Fitur yang Diterapkan

- Input user melalui `prompt()`
- Pilihan mode dengan `confirm()`
- Random number generation dengan `Math.floor(Math.random() * max) + 1`
- Validasi input angka menggunakan `isNaN()`
- Looping program menggunakan `while` sampai user menebak benar
- Penilaian performa berdasarkan jumlah percobaan
- Output user-friendly lengkap dengan emoji 😄
- Tipe data dan expression dijelaskan secara mendalam (ternary, function expression, complex expression)

---

## 🧪 Contoh Output

<pre><code>
Saya menyimpan angka antara 1 dan 10. Coba tebak!
Tebakan kamu: 4
Terlalu kecil 😅

Tebakan kamu: 8
Terlalu besar 😅

Tebakan kamu: 6
🎉 Selamat! Kamu menebak angka dengan benar dalam 3 percobaan.
🔥 Pro banget! Kamu cepat banget nebaknya.
</code></pre>

Jika input tidak valid:

<pre><code>Eh? Masukin angka ya 😄</code></pre>

---

## 🔧 Bonus Challenge yang Diimplementasikan

| Fitur Tambahan          | Status |
|-------------------------|--------|
| Validasi input angka     | ✅      |
| Mode sulit (angka 1–50)  | ✅      |
| Penilaian performa/skor | ✅      |
| Prompt dinamis (range)  | ✅      |
| Complex expression refactor | ✅  |

---

## 🔍 Insight Pribadi

Di awal, saya sempat salah menulis operator assignment (`:` bukannya `=`), salah urut logika, hingga fungsi yang tidak dipanggil. Namun dengan debugging bertahap, saya memahami:

- Perbedaan antara *function declaration* dan *function call*
- Penggunaan `confirm()` untuk pilihan user
- Cara membentuk *ternary* dan *complex expression*
- Kapan harus modularisasi kode, dan kapan cukup gunakan struktur sederhana

Game ini bukan hanya latihan logika, tapi juga pengingat bahwa **"kesalahan kecil bisa jadi pelajaran besar."**

---

## 📌 Author

Made with clarity & curiosity by  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> Challenge ini membuktikan bahwa logika, UX, dan interaksi bisa bersatu dalam baris-baris kode.  
> Let’s go to [Day 5 → Looping & Output Kreatif](https://github.com/syfaarizal/js-looping-name) 🔁
