export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  itemCount: number;
}

export const productCategories: ProductCategory[] = [
  {
    id: "cat-hardware",
    slug: "perkakas-mekanikal",
    name: "Perkakas & Fastener Mekanikal",
    shortDescription: "Baut mutu tinggi, mur baja presisi, fitting kuningan, katup industri, dan komponen mekanikal.",
    description: "Koleksi komponen mekanikal presisi dan fastener standar metrik/imperial untuk perakitan mesin pabrik, lini manufaktur, dan pemeliharaan fasilitas teknik.",
    image: "/src/assets/images/category_industrial_hardware_1791777320463.jpg",
    itemCount: 4
  },
  {
    id: "cat-packaging",
    slug: "material-kemasan",
    name: "Material Kemasan & Pergudangan",
    shortDescription: "Karton boks corrugated tebal, kertas kraft roll industri, strapping band, dan perlengkapan proteksi muatan.",
    description: "Solusi perlengkapan logistik dan kemasan komersial tahan benturan untuk menjaga keutuhan produk selama proses penyimpanan gudang serta distribusi antar kota.",
    image: "/src/assets/images/category_packaging_supplies_1791777332349.jpg",
    itemCount: 3
  },
  {
    id: "cat-safety",
    slug: "alat-keselamatan-k3",
    name: "Alat Keselamatan Kerja (K3)",
    shortDescription: "Helm proyek industrial, sarung tangan heavy-duty, pelindung mata anti-fog, dan rompi visibilitas tinggi.",
    description: "Perlengkapan proteksi diri (APD) terstandar untuk pekerja lapangan, teknisi konstruksi, dan operator pabrik guna meminimalkan risiko kecelakaan kerja operasional.",
    image: "/src/assets/images/category_safety_equipment_1791777345219.jpg",
    itemCount: 3
  }
];
