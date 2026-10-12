# PT Indo Kreasi — Corporate Supplier & B2B Sourcing Partner

Website resmi company profile dan katalog produk B2B untuk **PT Indo Kreasi**. Dibangun menggunakan React, Vite, Tailwind CSS, dan Lucide Icons dengan konsep arsitektur **Modern Industrial Corporate** yang dirancang khusus untuk kebutuhan pengadaan bisnis (procurement purchasing).

---

## 🏢 Gambaran Proyek

Website ini berfungsi sebagai media profil korporat dan katalog produk supplier tanpa kompleksitas sistem backend atau keranjang belanja e-commerce konsumen biasa. Seluruh alur transaksi dan penawaran harga diarahkan langsung ke tim pengadaan melalui kanal resmi **WhatsApp** dan **Email Quotation**.

### Karakteristik Desain: Modern Industrial Corporate
- **Palet Warna:**
  - Primary (Deep Navy): `#1F3040`
  - Background (Warm Ivory): `#F7F5F0`
  - Accent (Muted Copper): `#A36E53`
  - Secondary (Sage Gray): `#76847B`
  - Main Text (Charcoal): `#24303A`
  - Border (Light Gray): `#E2E4E0`
  - Surface (White): `#FFFFFF`
- **Tipografi:** Plus Jakarta Sans (Heading) & Inter (Body).
- **Zero-Pill Discipline:** Menghindari pill badge/chips berwarna neon berlebihan; menyajikan metadata secara editorial dan bersih.
- **Top Bar Contract:** Header 1-baris 3-zona yang bersih dan responsif.

---

## 📁 Struktur Folder Proyek

```
src/
├── assets/
│   └── images/                # Asset foto industrial resolusi tinggi
├── components/
│   ├── common/
│   │   ├── Breadcrumb.tsx     # Navigasi remah roti aksesibel
│   │   ├── Button.tsx         # Tombol varian (primary, copper, outline, ghost)
│   │   └── SectionHeading.tsx # Heading editorial terstandar
│   ├── layout/
│   │   ├── Footer.tsx         # Footer korporat dengan kontak & disclaimer
│   │   └── Navbar.tsx         # Navigasi sticky desktop & mobile drawer
│   └── products/
│       ├── ProductCard.tsx    # Kartu produk dengan zero-broken-image fallback
│       ├── ProductFilter.tsx  # Filter kategori, live search, & sort dropdown
│       └── ProductGrid.tsx    # Grid responsif & status pencarian kosong
├── data/
│   ├── categories.ts          # Kategori produk industri
│   ├── company.ts             # Konfigurasi profil & kontak perusahaan
│   └── products.ts            # Katalog dummy spesifikasi teknis barang
├── pages/
│   ├── About.tsx              # Profil, visi misi, & nilai korporat
│   ├── Contact.tsx            # Saluran komunikasi WhatsApp, email, & FAQ
│   ├── Home.tsx               # Halaman utama dengan hero & alur pengadaan
│   ├── NotFound.tsx           # Halaman 404 informatif
│   ├── ProductDetail.tsx      # Detail teknis produk, spesifikasi, & CTA inquiry
│   ├── Products.tsx           # Katalog produk lengkap dengan pencarian & filter
│   └── Services.tsx           # Layanan supplier & tata cara penerbitan quotation
├── utils/
│   └── whatsapp.ts            # Formatter otomatis pesan inquiry WhatsApp & email
├── App.tsx                    # React Router configuration & ScrollToTop
├── index.css                  # Tailwind v4 tema & CSS variables
└── main.tsx                   # Entry point aplikasi
```

---

## 🚀 Panduan Instalasi & Menjalankan Aplikasi

### Kebutuhan Sistem:
- Node.js versi 18 atau lebih tinggi
- npm atau pnpm

### 1. Kloning & Pemasangan Dependensi
```bash
# Jalankan install dependensi
npm install
```

### 2. Jalankan Server Pengembangan (Local Dev)
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:3000`.

### 3. Kompilasi Produksi (Production Build)
```bash
npm run build
```
Hasil build akan tersimpan di dalam direktori `dist/` dan siap diunggah ke penyedia hosting statis.

### 4. Pengecekan Type Linting
```bash
npm run lint
```

---

## ⚙️ Cara Mengubah Data Perusahaan & Produk

### 1. Konfigurasi Kontak & Profil Perusahaan
Buka file `src/data/company.ts`. Anda dapat memperbarui:
- `name`: Nama resmi perusahaan.
- `legalEntity`: Badan hukum resmi (PT).
- `whatsappNumber`: Nomor WhatsApp untuk integrasi `https://wa.me/` (gunakan format internasional tanpa tanda `+`, contoh: `6281234567890`).
- `whatsappDisplay`: Format tampilan nomor WhatsApp di layar (contoh: `+62 812-3456-7890`).
- `email` & `inquiryEmail`: Alamat email penawaran.
- `address`: Alamat kantor fisik dan gudang.
- `operationalHours`: Jam layanan operasional.

### 2. Menambah atau Mengubah Katalog Produk
Buka file `src/data/products.ts`. Setiap objek produk memiliki skema berikut:
```typescript
{
  id: "prod-001",
  slug: "baut-heksagonal-stainless-a2-70",
  name: "Baut Heksagonal Stainless Steel DIN 933 (A2-70)",
  categoryName: "Perkakas & Fastener Mekanikal",
  categorySlug: "perkakas-mekanikal",
  shortSummary: "Ringkasan 1-2 kalimat untuk kartu produk",
  fullDescription: "Penjelasan lengkap fungsi teknis produk...",
  image: "/src/assets/images/foto_produk.jpg",
  featured: true, // true untuk muncul di section unggulan beranda
  specifications: {
    "Standar Manufaktur": "DIN 933 / ISO 4017",
    "Material Dasar": "Stainless Steel Austenitik A2-70 (AISI 304)",
    "Rentang Ukuran Ulir": "M6 hingga M24"
  },
  applications: [
    "Perakitan conveyor pabrik",
    "Instalasi pipa industri"
  ],
  packagingUnit: "Kotak isi 100 pcs",
  moqNotice: "Pemesanan minimum B2B disesuaikan dengan volume proyek."
}
```

---

## 🌐 Panduan Deployment ke Hosting Statis

Aplikasi ini adalah Single Page Application (SPA) berbasis React. Agar navigasi langsung ke sub-route seperti `/produk/baut-heksagonal-stainless-a2-70` tidak menghasilkan error 404 saat di-refresh pada server hosting, konfigurasikan aturan rewrite berikut:

### Opsi A — Vercel
Tambahkan file `vercel.json` di root direktori jika diperlukan:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
Lalu jalankan `vercel` via CLI atau sambungkan repositori GitHub ke dashboard Vercel (Build Command: `npm run build`, Output Directory: `dist`).

### Opsi B — Netlify
Buat file `public/_redirects` dengan isi:
```
/*    /index.html   200
```
Build Command di Netlify: `npm run build`, Publish Directory: `dist`.

---

## 📋 Fitur Utama MVP

1. **Company Profile Modern:** Penjelasan komprehensif profil, visi, misi, dan pilar layanan pengadaan.
2. **Katalog Produk Terstruktur:** Pencarian langsung (instant search), filter kategori, dan pengurutan dinamis tanpa reload halaman.
3. **Halaman Detail Produk Berbasis Slug:** Tabel spesifikasi teknis lengkap, rekomendasi aplikasi industri, dan rekomendasi produk terkait.
4. **Otomatisasi Pesan Inquiry:** Tombol WhatsApp dan Email otomatis menyusun draf pesan formal berisi nama produk dan tautan halaman rujukan.
5. **Aksesibilitas & Responsivitas:** Desain responsif dari smartphone (320px) hingga layar monitor lebar (1440px), focus indicator standar WCAG AA, dan fallback gambar rusak.
