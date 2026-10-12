export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  categoryName: string;
  categorySlug: string;
  shortSummary: string;
  fullDescription: string;
  image: string;
  featured: boolean;
  specifications: Record<string, string>;
  applications: string[];
  packagingUnit: string;
  moqNotice: string;
}

export const productsData: ProductItem[] = [
  {
    id: "prod-001",
    slug: "baut-heksagonal-stainless-a2-70",
    name: "Baut Heksagonal Stainless Steel DIN 933 (A2-70)",
    categoryName: "Perkakas & Fastener Mekanikal",
    categorySlug: "perkakas-mekanikal",
    shortSummary: "Baut kepala segi enam stainless steel tahan karat standar industri untuk perakitan struktural dan mesin.",
    fullDescription: "Baut heksagonal ulir penuh berbahan Stainless Steel grade A2-70 (AISI 304). Memiliki ketahanan korosi tinggi terhadap cuaca luar ruangan dan zat kimia ringan. Dirancang khusus untuk sambungan struktural mekanis, instalasi pipa industri, serta perakitan rangka mesin yang membutuhkan durabilitas jangka panjang tanpa korosi.",
    image: "/src/assets/images/category_industrial_hardware_1791777320463.jpg",
    featured: true,
    specifications: {
      "Standar Manufaktur": "DIN 933 / ISO 4017",
      "Material Dasar": "Stainless Steel Austenitik A2-70 (AISI 304)",
      "Rentang Ukuran Ulir": "M6 hingga M24",
      "Tipe Ulir": "Metric Coarse Pitch (Full Thread)",
      "Kekuatan Tarik (Tensile)": "700 N/mm² minimum",
      "Toleransi Ulir": "6g",
      "Finishing Permukaan": "Polished Natural Stainless"
    },
    applications: [
      "Perakitan conveyor dan mesin manufaktur makanan/minuman",
      "Instalasi fasad arsitektural dan braket eksterior",
      "Penyambungan flange pipa air industri dan HVAC"
    ],
    packagingUnit: "Kotak isi 100 pcs / 200 pcs (Sesuai Ukuran)",
    moqNotice: "Pemesanan minimum B2B disesuaikan dengan volume proyek dan diameter ulir yang diajukan."
  },
  {
    id: "prod-002",
    slug: "ball-valve-kuningan-industrial-1-inch",
    name: "Heavy-Duty Brass Ball Valve 1 Inch BSP",
    categoryName: "Perkakas & Fastener Mekanikal",
    categorySlug: "perkakas-mekanikal",
    shortSummary: "Katup bola kuningan tempa bertekanan tinggi dengan tuas pengunci untuk aliran cairan dan udara kompresi.",
    fullDescription: "Katup bola tipe full bore berbahan paduan kuningan tempa (forged brass) berkualitas prima dengan pelapis kromium pada bola internal. Menjamin hambatan aliran minimal dan penutupan rapat bebas kebocoran. Tuas pengaman berlapis vinil isolasi memastikan pengoperasian aman pada temperatur kerja tinggi.",
    image: "/src/assets/images/category_industrial_hardware_1791777320463.jpg",
    featured: true,
    specifications: {
      "Ukuran Sambungan": '1" Inch Female to Female BSP Thread',
      "Tekanan Kerja Maksimal": "PN 25 (hingga 25 Bar / 360 PSI)",
      "Material Bodi": "Forged Brass CW617N / Kuningan Tempa",
      "Material Bola & Stem": "Hard Chrome-Plated Brass",
      "Material Seal / Dudukan": "PTFE (Teflon) Murni Tahan Aus",
      "Rentang Temperatur": "-10°C hingga +120°C",
      "Aplikasi Media": "Air bersih, minyak pelumas ringan, udara kompresor"
    },
    applications: [
      "Jaringan perpipaan kompresor pabrik",
      "Sistem distribusi pendingin chiller dan boiler sekunder",
      "Instalasi instalasi pengolahan air utilitas gedung"
    ],
    packagingUnit: "Karton Master isi 24 pcs",
    moqNotice: "Inquiry terbuka untuk pemesanan partai besar dengan opsi sertifikat uji material pabrik."
  },
  {
    id: "prod-003",
    slug: "mur-flange-baja-grade-8-8",
    name: "Hex Flange Nut Baja Karbon Grade 8.8 DIN 6923",
    categoryName: "Perkakas & Fastener Mekanikal",
    categorySlug: "perkakas-mekanikal",
    shortSummary: "Mur berkolar flange bergerigi untuk distribusi beban merata dan mencegah kelonggaran akibat getaran.",
    fullDescription: "Mur berkolar terintegrasi dengan permukaan bawah bergerigi (serrated) yang mencengkeram kuat permukaan bidang kerja. Mengeliminasi kebutuhan ring plat/ring per tambahan pada sambungan yang terpapar vibrasi konstan seperti pada motor listrik dan generator pabrik.",
    image: "/src/assets/images/category_industrial_hardware_1791777320463.jpg",
    featured: false,
    specifications: {
      "Standar": "DIN 6923 / ISO 4161",
      "Kelas Kekuatan": "Grade 8.8 High Tensile Steel",
      "Rentang Diameter": "M8, M10, M12, M16",
      "Pelapisan (Plating)": "Zinc Plated (Galvanis Putih) Anti-Karat",
      "Tipe Pengunci": "Serrated Flange Base"
    },
    applications: [
      "Rangka getar vibrating screen & conveyor",
      "Pemasangan dinamo motor industri",
      "Struktur rak racking gudang tugas berat"
    ],
    packagingUnit: "Karung 25 kg / Kotak 500 pcs",
    moqNotice: "Tersedia pilihan pasokan rutin per bulan untuk lini perakitan OEM."
  },
  {
    id: "prod-004",
    slug: "fitting-sambungan-pipa-hidrolik-3-4",
    name: "Nipple Adapter Hidrolik Presisi 3/4 Inch NPT-JIC",
    categoryName: "Perkakas & Fastener Mekanikal",
    categorySlug: "perkakas-mekanikal",
    shortSummary: "Fitting sambungan presisi baja karbon berkekuatan tinggi untuk sirkuit hidrolik alat berat.",
    fullDescription: "Fitting adapter presisi standar SAE/JIC dengan ulir mesin CNC untuk memastikan toleransi ketat pada sirkuit hidrolik bertekanan ekstrem. Dilengkapi lapisan pelindung seng nikel tahan terhadap kelembapan dan oli mineral panas.",
    image: "/src/assets/images/category_industrial_hardware_1791777320463.jpg",
    featured: false,
    specifications: {
      "Tipe Ulir Sisi 1": '3/4" Male NPT',
      "Tipe Ulir Sisi 2": '3/4" JIC 37-Degree Flare',
      "Material": "Carbon Steel 12L14 Machined Bar Stock",
      "Rating Tekanan": "Hingga 5000 PSI",
      "Finishing": "Zinc Trivalent Dichromate"
    },
    applications: [
      "Sistem pompa hidrolik alat angkat & forklift",
      "Mesin press stamping industri logam",
      "Sirkuit sirkulasi oli turbin"
    ],
    packagingUnit: "Boks pelindung isi 50 pcs",
    moqNotice: "Dapat dipesan dalam spesifikasi custom ukuran ulir metric atau imperial."
  },
  {
    id: "prod-005",
    slug: "karton-box-corrugated-double-wall",
    name: "Karton Box Corrugated Double-Wall (K/M/K-150)",
    categoryName: "Material Kemasan & Pergudangan",
    categorySlug: "material-kemasan",
    shortSummary: "Kardus industri dinding ganda tebal untuk proteksi pengiriman barang berat dan penyimpanan palet.",
    fullDescription: "Kardus master industri dengan struktur Double Wall (CB Flute) menggunakan lembaran kraft berkualitas tinggi pada bagian luar dan dalam. Memiliki ketahanan tumpuk (Bursting Strength) tinggi sehingga aman saat ditumpuk 4-5 lapis pada palet gudang distribusi.",
    image: "/src/assets/images/category_packaging_supplies_1791777332349.jpg",
    featured: true,
    specifications: {
      "Struktur Flute": "Double Wall (CB Flute tebal ± 7 mm)",
      "Substansi Bahan": "Kraft 150 / Medium 125 / Kraft 150 gsm",
      "Ukuran Standar": "P 60 cm x L 40 cm x T 40 cm (Tersedia custom)",
      "Kekuatan Tekan Tumpuk (BCT)": "Lebih dari 450 kgf",
      "Tipe Lipatan": "A1 Regular Slotted Carton (RSC)",
      "Daya Tahan": "Tahan lembap dan benturan ekspedisi kargo"
    },
    applications: [
      "Distribusi suku cadang otomotif dan komponen mesin",
      "Pengemasan produk ekspor dan logistik antarpulau",
      "Penyimpanan arsip pergudangan jangka menengah"
    ],
    packagingUnit: "Bundel isi 20 lembar (Flat Packed)",
    moqNotice: "Mendukung cetak sablon logo corporate 1-2 warna dengan minimum pemesanan 500 lembar."
  },
  {
    id: "prod-006",
    slug: "kraft-paper-roll-industrial-120-gsm",
    name: "Industrial Kraft Paper Roll 120 GSM (Lebar 120 cm)",
    categoryName: "Material Kemasan & Pergudangan",
    categorySlug: "material-kemasan",
    shortSummary: "Gulungan kertas kraft cokelat tebal untuk pembungkus material, bantalan dunnage, dan pelindung palet.",
    fullDescription: "Kertas kraft pulp murni berkekuatan serat tinggi yang lentur namun sulit sobek. Berfungsi sebagai pelindung permukaan logam agar tidak tergores debu, pembungkus palet kayu, serta pengisi ruang kosong (void fill) di dalam kardus pengiriman.",
    image: "/src/assets/images/category_packaging_supplies_1791777332349.jpg",
    featured: false,
    specifications: {
      "Gramatur Kertas": "120 GSM (Grams per Square Meter)",
      "Lebar Gulungan": "120 cm",
      "Panjang per Roll": "± 200 meter",
      "Berat Rata-rata per Roll": "± 28 - 30 kg",
      "Karakteristik": "Biodegradable, 100% dapat didaur ulang, bebas zat berbahaya"
    },
    applications: [
      "Bungkus pelindung gulungan plat baja & pipa aluminium",
      "Alas dasar palet kayu untuk mencegah debu bawah",
      "Bahan pengisi pelindung benturan dalam karton ekspor"
    ],
    packagingUnit: "1 Roll kemasan polybag tahan air",
    moqNotice: "Penawaran harga volume berlaku untuk pengiriman skala truk (CDD / Fuso)."
  },
  {
    id: "prod-007",
    slug: "strapping-band-pp-heavy-duty-15mm",
    name: "Tali Strapping Band PP Heavy Duty 15 mm x 0.8 mm",
    categoryName: "Material Kemasan & Pergudangan",
    categorySlug: "material-kemasan",
    shortSummary: "Tali pengikat palet polypropylene berkekuatan tarik tinggi untuk mesin semi-otomatis maupun manual.",
    fullDescription: "Tali strapping polypropylene (PP) berkualitas tinggi dengan emboss timbul presisi guna memastikan cengkeraman klip seng atau las panas bekerja sempurna. Tidak mudah kendur saat terjadi guncangan transportasi logistik jarak jauh.",
    image: "/src/assets/images/category_packaging_supplies_1791777332349.jpg",
    featured: true,
    specifications: {
      "Lebar Tali": "15 mm",
      "Ketebalan": "0.85 mm",
      "Panjang Roll": "1.500 Meter",
      "Tensile Strength (Kekuatan Putus)": "220 kgf minimum",
      "Material": "Polypropylene Murni dengan Additive UV",
      "Kesesuaian Mesin": "Mesin strapping manual, semi-auto, dan klem besi"
    },
    applications: [
      "Pengikatan muatan kardus di atas palet kayu/plastik",
      "Pengikatan bundel pipa PVC, kayu lapis, dan kabel",
      "Pengamanan peti kayu logistik ekspor"
    ],
    packagingUnit: "Roll berat bersih 9.5 kg",
    moqNotice: "Tersedia pilihan warna kuning, hijau, hitam, dan transparan sesuai kode identifikasi gudang."
  },
  {
    id: "prod-008",
    slug: "safety-helmet-industrial-abs-vented",
    name: "Helm Keselamatan Industri ABS Vented ANSI Type I",
    categoryName: "Alat Keselamatan Kerja (K3)",
    categorySlug: "alat-keselamatan-k3",
    shortSummary: "Helm proyek cangkang ABS tahan impak tinggi dengan suspensi ratchet 6-titik dan ventilasi udara.",
    fullDescription: "Helm keselamatan kerja berkategori heavy-duty berbahan resin termoplastik ABS murni dengan ketahanan impak superior terhadap benturan vertikal. Menggunakan sistem suspensi ratchet 6-titik yang mudah diatur dengan satu tangan serta lubang ventilasi aerodinamis untuk kenyamanan pemakaian sepanjang hari di area berhawa panas.",
    image: "/src/assets/images/category_safety_equipment_1791777345219.jpg",
    featured: true,
    specifications: {
      "Material Cangkang": "Acrylonitrile Butadiene Styrene (ABS) Virgin Resin",
      "Standar Rujukan": "ANSI/ISEA Z89.1-2014 & EN 397:2012 (Type 1, Class C)",
      "Sistem Suspensi": "Fast-Dial Ratchet 6-Point Suspension",
      "Fitur Kenyamanan": "Bantalan dahi keringat (Sweatband) dapat dicuci, lubang ventilasi ganda",
      "Slot Aksesori": "Universal 30mm slot untuk earmuff & face shield visor",
      "Tali Dagu": "4-point elastic chin strap dengan quick-release buckle"
    },
    applications: [
      "Proyek konstruksi gedung, sipil, dan jembatan",
      "Teknisi instalasi di dalam pabrik manufaktur",
      "Area dermaga bongkar muat dan pelabuhan peti kemas"
    ],
    packagingUnit: "Karton Master isi 20 unit (Individually bagged)",
    moqNotice: "Tersedia opsi penambahan sablon logo perusahaan dan nama divisi dengan lead time disepakati."
  },
  {
    id: "prod-009",
    slug: "sarung-tangan-kulit-heavy-duty-pelindung",
    name: "Sarung Tangan Kerja Kulit Sapi Split Heavy-Duty",
    categoryName: "Alat Keselamatan Kerja (K3)",
    categorySlug: "alat-keselamatan-k3",
    shortSummary: "Sarung tangan pelindung telapak tangan dari abrasi, serpihan logam tajam, dan panas percikan las.",
    fullDescription: "Sarung tangan safety kulit sapi split pilihan dengan jahitan benang Kevlar anti-putus. Dilengkapi lapisan dalam katun lembut penyerap keringat agar tangan tidak lecet dan tetap memiliki daya cengkeram optimal saat memegang material kasar dan berbobot.",
    image: "/src/assets/images/category_safety_equipment_1791777345219.jpg",
    featured: true,
    specifications: {
      "Material": "Genuine Split Cowhide Leather (Ketebalan 1.2 - 1.4 mm)",
      "Panjang Total": "14 Inch (Melindungi hingga pergelangan tangan bagian atas)",
      "Jahitan": "DuPont Kevlar Flame-Retardant Thread",
      "Lapisan Dalam": "Full Cotton Fleece Lining",
      "Tingkat Proteksi Mekanik": "EN 388 (Abrasi 4, Potong 2, Robek 4, Tusuk 3)"
    },
    applications: [
      "Pekerjaan pengelasan fabrikasi bengkel (SMAW / GMAW)",
      "Pengangkatan lembaran pelat baja dan kaca tajam",
      "Operasional pemotongan material dan perbengkelan bubut"
    ],
    packagingUnit: "Paket isi 12 pasang (Lusin)",
    moqNotice: "Inquiry terbuka untuk pemesanan rutin batch bulanan bagi fasilitas workshop teknik."
  },
  {
    id: "prod-010",
    slug: "kacamata-pelindung-anti-fog-uv400",
    name: "Safety Glasses Polycarbonate Clear Anti-Fog & UV400",
    categoryName: "Alat Keselamatan Kerja (K3)",
    categorySlug: "alat-keselamatan-k3",
    shortSummary: "Kacamata proteksi mata ringan dengan lensa polikarbonat tahan benturan, anti-gores, dan anti-embun.",
    fullDescription: "Kacamata keselamatan ergonomis berdesain wrap-around yang melindungi mata dari partikel debu melayang, percikan cairan kimia ringan, dan serpihan gerinda. Lensa telah diberi perlakuan anti-fog ganda agar tidak berembun saat teknisi mengenakan masker respiratori.",
    image: "/src/assets/images/category_safety_equipment_1791777345219.jpg",
    featured: false,
    specifications: {
      "Material Lensa": "Optical Grade Polycarbonate",
      "Standar Sertifikasi Rujukan": "ANSI Z87.1+ High Impact / EN 166 FT",
      "Proteksi Radiasi": "99.9% UV Protection (UV400)",
      "Lapisan Tambahan": "Dual-Coated Anti-Fog & Scratch Resistant",
      "Gagang Kacamata": "Soft-touch rubber temple tips fleksibel bebas tekanan pelipis"
    },
    applications: [
      "Area pengerjaan mesin bubut, milling, dan gerinda tangan",
      "Inspeksi lapangan laboratorium kimia & farmasi",
      "Pekerja pemeliharaan mekanikal elektrikal gedung"
    ],
    packagingUnit: "Kotak isi 12 pcs individual pack",
    moqNotice: "Pilihan lensa Clear (bening) dan Smoke (gelap untuk luar ruangan) tersedia."
  }
];
