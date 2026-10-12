export interface CompanyProfile {
  name: string;
  legalEntity: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
    note: string;
  };
  contact: {
    whatsappNumber: string; // international digits without + for wa.me API
    whatsappDisplay: string;
    phoneDisplay: string;
    email: string;
    inquiryEmail: string;
  };
  operationalHours: {
    workdays: string;
    weekend: string;
  };
  socialLinks: {
    linkedin?: string;
  };
  values: Array<{
    title: string;
    description: string;
  }>;
  procurementSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  disclaimer: string;
}

export const companyData: CompanyProfile = {
  name: "PT Indo Kreasi",
  legalEntity: "PT Indo Kreasi Sukses Mandiri (Placeholder)",
  tagline: "Solusi Pengadaan yang Tepat untuk Kebutuhan Bisnis Anda",
  shortDescription: "Perusahaan supplier B2B yang melayani pengadaan perlengkapan industri, material kemasan logistik, dan peralatan keselamatan kerja untuk menunjang operasional perusahaan Anda.",
  fullDescription: "PT Indo Kreasi didirikan dengan komitmen untuk menjadi mitra strategis pengadaan B2B bagi berbagai sektor industri di Indonesia. Kami berfokus pada penyediaan pasokan berkualitas tinggi, ketepatan spesifikasi teknis, serta komunikasi kemitraan yang transparan dan dapat diandalkan oleh tim purchasing maupun manajemen operasional.",
  address: {
    line1: "Kawasan Industri Pulo Gadung, Jl. Rawa Terate Blok B No. 12 (Placeholder)",
    line2: "Cakung, Jakarta Timur",
    city: "DKI Jakarta",
    postalCode: "13920",
    note: "Data alamat merupakan dummy placeholder untuk keperluan demo MVP."
  },
  contact: {
    whatsappNumber: "6281234567890",
    whatsappDisplay: "+62 812-3456-7890",
    phoneDisplay: "+62 21-4682-1900",
    email: "info@indokreasi.placeholder.id",
    inquiryEmail: "procurement@indokreasi.placeholder.id"
  },
  operationalHours: {
    workdays: "Senin – Jumat: 08.30 – 17.00 WIB",
    weekend: "Sabtu & Minggu: Tutup (Inquiry diproses hari kerja berikutnya)"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/pt-indo-kreasi-placeholder"
  },
  values: [
    {
      title: "Komunikasi Bisnis",
      description: "Respons cepat dan kejelasan informasi bagi tim purchasing dalam setiap tahapan pengadaan produk."
    },
    {
      title: "Informasi Produk Terstruktur",
      description: "Spesifikasi teknis, dimensi, dan material disajikan secara akurat dan transparan untuk memudahkan evaluasi vendor."
    },
    {
      title: "Konsultasi Kebutuhan",
      description: "Pendampingan teknis dalam mencocokkan standar barang dengan kebutuhan riil operasional di lapangan."
    },
    {
      title: "Kemudahan Pengajuan Inquiry",
      description: "Kanal komunikasi langsung via WhatsApp dan email resmi tanpa birokrasi berbelit untuk mempercepat penawaran."
    }
  ],
  procurementSteps: [
    {
      step: "01",
      title: "Jelajahi Katalog",
      description: "Telusuri pilihan kategori produk industri, perkakas, material logistik, atau perlengkapan K3 yang tersedia."
    },
    {
      step: "02",
      title: "Pilih & Catat Spesifikasi",
      description: "Tinjau detail dimensi, material, dan spesifikasi standar teknis yang sesuai dengan kebutuhan operasional Anda."
    },
    {
      step: "03",
      title: "Hubungi Tim Pengadaan",
      description: "Gunakan tombol inquiry WhatsApp atau formulir email untuk mengirimkan rincian kebutuhan serta estimasi volume pesanan."
    },
    {
      step: "04",
      title: "Diskusi & Penawaran Resmi",
      description: "Tim PT Indo Kreasi akan menyiapkan surat penawaran harga resmi (quotation) dan skema pengiriman yang disepakati."
    }
  ],
  disclaimer: "Seluruh informasi kontak, spesifikasi, dan produk pada website ini adalah data simulasi (dummy data) untuk demonstrasi sistem frontend B2B PT Indo Kreasi."
};
