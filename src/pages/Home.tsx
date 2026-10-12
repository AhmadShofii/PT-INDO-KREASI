import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, FileText, CheckCircle2, ShieldCheck, ChevronRight, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { companyData } from '../data/company';
import { productCategories } from '../data/categories';
import { productsData } from '../data/products';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ProductCard } from '../components/products/ProductCard';
import { SourcingEstimator } from '../components/home/SourcingEstimator';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { themeMode, playPixelSound } = useTheme();
  const isMinecraft = themeMode === 'minecraft';

  const featuredProducts = productsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 2 — HERO (With Fluid Modern Motion) */}
      <section className={`relative overflow-hidden border-b transition-colors ${
        isMinecraft
          ? 'bg-[#252e25] border-[#1e1f22]'
          : 'bg-[#F7F5F0] border-[#E2E4E0]'
      } pt-10 pb-16 lg:pt-16 lg:pb-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content with Staggered Entrance Animations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              {/* Refined unboxed kicker */}
              <div className={`flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase font-mono ${
                isMinecraft ? 'text-[#55FFFF]' : 'text-[#A36E53]'
              }`}>
                <span>{isMinecraft ? '⛏️ MINECRAFT SOURCING HUB' : 'Mitra Pengadaan Industri & Komersial'}</span>
                <span aria-hidden="true">·</span>
                <span>B2B Supplier</span>
              </div>

              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance ${
                isMinecraft ? 'text-white' : 'text-[#1F3040]'
              }`}>
                {isMinecraft
                  ? 'Pengadaan Blok & Material Industri Terbaik.'
                  : 'Solusi Pengadaan yang Tepat untuk Kebutuhan Bisnis Anda.'}
              </h1>

              <p className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl ${
                isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
              }`}>
                Kenali PT Indo Kreasi, jelajahi pilihan produk, dan temukan informasi pengadaan untuk mendukung kebutuhan operasional bisnis Anda.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asLink
                  href="/produk"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  {isMinecraft ? 'Buka Inventori' : 'Jelajahi Produk'}
                </Button>

                <Button
                  asLink
                  href="/kontak"
                  variant="outline"
                  size="lg"
                >
                  Hubungi Kami
                </Button>

                <Button
                  asLink
                  href={getGeneralWhatsAppUrl('Konsultasi Kebutuhan')}
                  target="_blank"
                  variant="ghost"
                  size="lg"
                  icon={<MessageCircle className={`w-4 h-4 ${isMinecraft ? 'text-[#55FF55]' : 'text-[#A36E53]'}`} />}
                >
                  WhatsApp B2B
                </Button>
              </div>

              {/* Trust Indicators / Operational Signals */}
              <div className={`mt-10 pt-6 border-t grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs ${
                isMinecraft
                  ? 'border-[#1e1f22] text-[#AAAAAA]'
                  : 'border-[#E2E4E0] text-[#5C6B77]'
              }`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 shrink-0 ${isMinecraft ? 'text-[#55FF55]' : 'text-[#76847B]'}`} />
                  <span>Katalog Spesifikasi Terbuka</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className={`w-4 h-4 shrink-0 ${isMinecraft ? 'text-[#55FFFF]' : 'text-[#76847B]'}`} />
                  <span>Dukungan Penawaran Resmi</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <FileText className={`w-4 h-4 shrink-0 ${isMinecraft ? 'text-[#FFAA00]' : 'text-[#76847B]'}`} />
                  <span>Pengadaan Skala Industri</span>
                </div>
              </div>
            </motion.div>

            {/* Right Industrial Image with Subtle Floating Physics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <motion.div
                animate={!isMinecraft ? { y: [0, -6, 0] } : undefined}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className={`relative aspect-16/10 lg:aspect-4/3 rounded-lg overflow-hidden border shadow-sm ${
                  isMinecraft
                    ? 'mc-panel border-4'
                    : 'bg-white border-[#E2E4E0]'
                }`}
              >
                <img
                  src="/src/assets/images/hero_warehouse_logistics_1791777290236.jpg"
                  alt="Fasilitas Pusat Distribusi dan Pergudangan PT Indo Kreasi"
                  className={`w-full h-full object-cover ${isMinecraft ? 'mc-pixel-img' : ''}`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block">
                    {isMinecraft ? 'Gudang Logistik & Suplai Blok' : 'Pusat Pergudangan & Logistik Distribusi'}
                  </span>
                  <span className="text-white/80 text-[11px]">Kesiapan pasokan material industri dan pengiriman B2B</span>
                </div>
              </motion.div>

              {/* Stats overlay badge with micro-animation */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className={`hidden sm:flex absolute -bottom-5 -left-5 p-3.5 rounded-lg border shadow-lg items-center gap-3 ${
                  isMinecraft
                    ? 'mc-panel text-white'
                    : 'bg-white/95 backdrop-blur-md border-[#E2E4E0] text-[#1F3040]'
                }`}
              >
                <div className={`w-9 h-9 rounded flex items-center justify-center font-bold text-xs ${
                  isMinecraft ? 'bg-[#55FF55] text-black' : 'bg-[#EFF2F0] text-[#1F3040]'
                }`}>
                  <TrendingUp className="w-5 h-5 text-[#A36E53]" />
                </div>
                <div className="text-xs">
                  <span className="font-bold block tabular-nums">24 Jam Respon</span>
                  <span className="text-gray-500 text-[11px]">Surat Penawaran Resmi</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE FEATURE: SOURCING ESTIMATOR CALCULATOR */}
      <section className={`py-12 sm:py-16 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#1e1f22] border-[#2b2d31]'
          : 'bg-white border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SourcingEstimator />
        </div>
      </section>

      {/* SECTION 3 — TENTANG PERUSAHAAN */}
      <section className={`py-16 sm:py-20 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#252e25] border-[#1e1f22]'
          : 'bg-white border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className={`relative aspect-4/3 rounded-lg overflow-hidden border ${
                isMinecraft ? 'mc-panel' : 'border-[#E2E4E0] bg-[#EFF2F0]'
              }`}>
                <img
                  src="/src/assets/images/about_industrial_facility_1791777306830.jpg"
                  alt="Aktivitas Peninjauan Kualitas Produk PT Indo Kreasi"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover ${isMinecraft ? 'mc-pixel-img' : ''}`}
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <SectionHeading
                kicker="Mengenal Perusahaan"
                title="Mengenal PT Indo Kreasi"
                subtitle="Komitmen penyediaan pasokan industri yang terpercaya dan terstruktur untuk mendukung kelancaran operasional rekanan bisnis."
              />

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
              }`}>
                <p>
                  PT Indo Kreasi bergerak di bidang pengadaan dan pasokan B2B yang melayani perusahaan manufaktur, kontraktor teknik, fasilitas pergudangan, dan perkantoran. Kami menyadari bahwa efisiensi operasional sangat bergantung pada keandalan spesifikasi barang dan kecepatan respon penawaran.
                </p>
                <p>
                  Melalui katalog produk yang terorganisir dan saluran komunikasi langsung, kami membantu departemen purchasing serta manajemen operasional dalam mempermudah proses sourcing tanpa kerumitan administrasi awal.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Button
                  asLink
                  href="/tentang-kami"
                  variant="outline"
                  iconRight={<ChevronRight className="w-4 h-4" />}
                >
                  Selengkapnya Mengenai Kami
                </Button>
                <Link
                  to="/layanan"
                  className={`text-xs font-semibold transition-colors ${
                    isMinecraft ? 'text-[#FFAA00]' : 'text-[#A36E53] hover:text-[#8D5C43]'
                  }`}
                >
                  Lihat Alur Kerja Supplier &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KATEGORI PRODUK */}
      <section className={`py-16 sm:py-20 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#1e1f22] border-[#2b2d31]'
          : 'bg-[#F7F5F0] border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeading
              kicker="Kategori Utama"
              title="Lini Produk Pengadaan"
              subtitle="Pilihan kategori barang untuk mendukung pemeliharaan mesin, logistik pergudangan, dan keselamatan staf."
              className="mb-0"
            />
            <Button
              asLink
              href="/produk"
              variant="outline"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              className="self-start md:self-auto"
            >
              Buka Semua Katalog
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={!isMinecraft ? { y: -5 } : undefined}
                className={`group overflow-hidden flex flex-col transition-all duration-200 ${
                  isMinecraft
                    ? 'mc-panel text-white'
                    : 'bg-white border border-[#E2E4E0] rounded-lg hover:border-[#76847B] hover:shadow-md'
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#EFF2F0]">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 ${
                      isMinecraft ? 'mc-pixel-img' : ''
                    }`}
                  />
                  <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 tabular-nums ${
                    isMinecraft
                      ? 'bg-black text-[#55FF55] border border-black'
                      : 'bg-white/90 backdrop-blur-xs text-[#1F3040] rounded-sm'
                  }`}>
                    {category.itemCount} Item
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-lg font-bold transition-colors mb-2 ${
                    isMinecraft
                      ? 'text-white group-hover:text-[#FFAA00]'
                      : 'text-[#1F3040] group-hover:text-[#A36E53]'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 flex-1 ${
                    isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
                  }`}>
                    {category.shortDescription}
                  </p>
                  <Link
                    to={`/produk?kategori=${category.slug}`}
                    onClick={() => isMinecraft && playPixelSound('click')}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                      isMinecraft ? 'text-[#55FFFF]' : 'text-[#1F3040] group-hover:text-[#A36E53]'
                    }`}
                  >
                    <span>{isMinecraft ? 'Eksplor Kategori &rarr;' : 'Lihat Produk Kategori'}</span>
                    {!isMinecraft && <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRODUK UNGGULAN */}
      <section className={`py-16 sm:py-20 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#252e25] border-[#1e1f22]'
          : 'bg-white border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionHeading
              kicker="Produk Pilihan"
              title="Katalog Produk Unggulan"
              subtitle="Sampel item pengadaan yang sering dibutuhkan oleh purchasing dan teknisi operasional."
              className="mb-0"
            />
            <Button
              asLink
              href="/produk"
              variant="primary"
              size="sm"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              className="self-start md:self-auto"
            >
              Lihat Seluruh Katalog ({productsData.length} Produk)
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — NILAI LAYANAN */}
      <section className={`py-16 sm:py-20 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#1e1f22] border-[#2b2d31]'
          : 'bg-[#F7F5F0] border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Standar Layanan"
            title="Komitmen Nilai Pelayanan B2B"
            subtitle="Kami mengedepankan efisiensi proses dan akurasi informasi dalam setiap tahapan pengadaan bersama Anda."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={!isMinecraft ? { y: -4 } : undefined}
                className={`p-6 flex flex-col justify-between transition-all ${
                  isMinecraft
                    ? 'mc-panel text-white'
                    : 'bg-white border border-[#E2E4E0] rounded-lg shadow-xs'
                }`}
              >
                <div>
                  <div className={`text-xs font-semibold font-mono mb-2 ${
                    isMinecraft ? 'text-[#55FFFF]' : 'text-[#A36E53]'
                  }`}>
                    0{idx + 1}. Layanan
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${
                    isMinecraft ? 'text-white' : 'text-[#1F3040]'
                  }`}>
                    {val.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
                  }`}>
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ALUR PENGADAAN */}
      <section className={`py-16 sm:py-20 border-b transition-colors ${
        isMinecraft
          ? 'bg-[#252e25] border-[#1e1f22]'
          : 'bg-white border-[#E2E4E0]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Langkah Kerjasama"
            title="Alur Pengadaan Produk yang Mudah"
            subtitle="Proses sistematis dari penelusuran spesifikasi hingga penerbitan surat penawaran harga resmi."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {companyData.procurementSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`p-6 flex flex-col justify-between relative ${
                  isMinecraft
                    ? 'mc-panel text-white'
                    : 'bg-[#F7F5F0] border border-[#E2E4E0] rounded-lg'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 flex items-center justify-center font-bold text-sm mb-4 font-mono ${
                    isMinecraft
                      ? 'mc-btn text-yellow-300'
                      : 'rounded bg-[#1F3040] text-white'
                  }`}>
                    {step.step}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${
                    isMinecraft ? 'text-white' : 'text-[#1F3040]'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    isMinecraft ? 'text-[#AAAAAA]' : 'text-[#5C6B77]'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {idx < companyData.procurementSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#76847B]">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CALL TO ACTION */}
      <section className={`py-16 sm:py-20 text-white ${
        isMinecraft ? 'bg-[#1e1f22]' : 'bg-[#1F3040]'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`text-xs font-semibold uppercase tracking-wider mb-2 font-mono ${
            isMinecraft ? 'text-[#55FFFF]' : 'text-[#A36E53]'
          }`}>
            Konsultasi & Penawaran Harga
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
            Butuh Informasi Produk untuk Bisnis Anda?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-xl mx-auto">
            Diskusikan kebutuhan spesifikasi, perkiraan volume pengadaan, dan permintaan surat penawaran harga resmi (Quotation) bersama tim representatif kami.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asLink
              href={getGeneralWhatsAppUrl('Inquiry Pengadaan Bisnis')}
              target="_blank"
              variant="copper"
              size="lg"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Konsultasikan Kebutuhan
            </Button>
            <Button
              asLink
              href="/kontak"
              variant="outline"
              size="lg"
              className="text-white bg-transparent border-[#94A3B8]/40 hover:bg-[#2A4259] hover:text-white"
            >
              Lihat Kontak Perusahaan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
