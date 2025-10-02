---
marp: true
theme: uncover
class: 
    - invert
---

# Git Branching Strategy
By: Marcel

---

## Apa yang akan kita bahas?
* Permasalahan
* Solusi
* Praktik / Uji Coba
* Pertanyaan

---

## Permasalahan
* Aplikasi sudah masuk prod
* Beberapa fitur/bug dikerjakan dan tidak semua sudah dites
* Tidak memisah branch membuat satu fitur yang sudah ✅ PASS membawa fitur yang masih FAIL ❌ ke prod
* Terkadang ada bug yang perlu dikerjakan segera yang perlu di-isolate dari fitur lain

---

## Solusi (1/2)
- Memisah tiap fitur/bug
main\
 ┣ dev \
 ┣ feature/nama-fitur (main branch)\
 ┃ ┗ nama-dev/nama-fitur\
 ┗ hotfix/apa-ini-disini

- Semua checkout dari `main`
- Testing development merge ke branch `dev`

---

## Solusi (2/2)
- Push/deploy prod bawa `main` branch fitur/hotfix ke `main`
- Branch dev ga boleh dibawa ke `main`
- Branch dev ga boleh dibawa ke `main` branch fitur/hotfix
- Kalo ada push ke `main` semua branch ngambil dari `main` (pull/merge dari `main`)

---

### Bagaimana kalau banyak branch masuk ke `main`?
* Bisa buat branch baru dari `main` juga yang akan menggabungkan semua branch yang diperlukan
* Contoh `rc/vx.y.z-a`
* Setelah itu buat PR (Pull Request) ke `main`

---

### Apa yang harus dilakukan jika saat PR terdapat conflict
* Branch asal dicoba pull dari `main`
* Jika conflict resolve di local dulu
* Jika PR masih conflict develop coba pull dari `main` (reviewer)
* Kalau conflict juga perlu resolve di local dulu
* Kalau masih conflict merge manual dari branch asal ke branch tujuan

---

### Yang perlu diperhatikan ketika merge conflict
* Konfirmasi dan diskusikan ke teman bagian kode yang perlu diambil
* Untuk mengurangi conflict yang banyak rajin pull dari `main`

---

## <!--fit--> Praktik / Uji Coba

---

## <!--fit--> Pertanyaan?

---

# <!--fit--> Terima kasih