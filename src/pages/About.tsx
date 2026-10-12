import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Building2, Target, Compass, Award } from 'lucide-react';
import { companyData } from '../data/company';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Top Banner & Breadcrumb */}
      <div className="bg-white border-b border-[#E2E4E0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Beranda', href: '/' },
              { label: 'Tentang Kami' }
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A36E53] mb-2 font-mono">
              Profil Korporat
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F3040] leading-tight text-balance">
              Mengenal PT Indo Kreasi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B77] leading-relaxed">
              Penyedia kebutuhan industri dan komersial yang berorientasi pada transparansi spesifikasi, mutu pasokan terstandar, dan kemudahan proses administrasi pengadaan B2B.
            </p>
          </div>
        </div>
      </section>

      {/* Profile & Story Section */}
      <section className="py-16 bg-white border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual representation */}
            <div className="lg:col-span-5">
              <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E2E4E0] shadow-xs bg-[#EFF2F0]">
                <img
                  src="/src/assets/images/about_industrial_facility_1791777306830.jpg"
                  alt="Aktivitas Peninjauan Kualitas Produk PT Indo Kreasi"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 p-3 bg-[#F7F5F0] border border-[#E2E4E0] rounded text-xs text-[#5C6B77]">
                <span className="font-semibold text-[#1F3040] block mb-0.5">Operasional Terintegrasi:</span>
                Fasilitas penyimpanan dan koordinasi distribusi untuk menjamin ketersediaan barang operasional.
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7">
              <SectionHeading
                kicker="Tentang Perusahaan"
                title="Mitra Pengadaan Terpercaya untuk Berbagai Sektor"
                className="mb-6"
              />

              <div className="space-y-4 text-sm sm:text-base text-[#5C6B77] leading-relaxed">
                <p>
                  PT Indo Kreasi hadir untuk menjembatani kebutuhan logistik dan perlengkapan teknis bagi pelaku industri di Indonesia. Kami memahami tantangan yang dihadapi oleh tim pengadaan (purchasing) dan teknisi lapangan dalam mendapatkan material dengan spesifikasi tepat tanpa hambatan komunikasi birokratis.
                </p>
                <p>
                  Dengan portofolio yang mencakup perkakas mekanikal presisi, kemasan logistik tugas berat, dan alat pelindung diri (APD/K3), kami senantiasa memastikan setiap produk yang tertera dalam katalog memiliki data teknis yang jelas.
                </p>
                <p>
                  Kami meyakini bahwa hubungan bisnis jangka panjang dibangun di atas integritas penawaran, transparansi data, dan layanan purna jual yang responsif.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E2E4E0] flex flex-wrap gap-6 text-xs text-[#5C6B77]">
                <div>
                  <span className="font-semibold text-[#1F3040] block">Entitas Badan Usaha</span>
                  <span>{companyData.legalEntity}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1F3040] block">Wilayah Layanan</span>
                  <span>Seluruh Indonesia (Logistik B2B)</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1F3040] block">Spesialisasi</span>
                  <span>Hardware, Kemasan, & K3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section (Placeholder terstruktur sesuai PRD) */}
      <section className="py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Arah Strategis"
            title="Visi dan Misi Perusahaan"
            subtitle="Panduan fundamental dalam memberikan kontribusi nyata bagi rantai pasok industri rekanan."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white p-8 rounded-lg border border-[#E2E4E0] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F3040]">Visi Perusahaan</h3>
              </div>
              <p className="text-sm text-[#5C6B77] leading-relaxed mb-4">
                Menjadi mitra supplier korporat pilihan utama yang diakui atas konsistensi mutu barang, keakuratan data spesifikasi produk, dan kecepatan pelayanan pengadaan B2B di tingkat nasional.
              </p>
              <div className="text-[11px] text-[#76847B] italic">
                * Konsep visi resmi PT Indo Kreasi (Dapat disesuaikan pada versi rilis final).
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white p-8 rounded-lg border border-[#E2E4E0] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F3040]">Misi Perusahaan</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#5C6B77] mb-4">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#A36E53] font-bold mt-0.5">01.</span>
                  <span>Menyediakan produk industri dengan standar mutu yang terverifikasi dan spesifikasi transparan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#A36E53] font-bold mt-0.5">02.</span>
                  <span>Membangun jalur komunikasi yang cepat, solutif, dan ramah bagi departemen purchasing rekanan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#A36E53] font-bold mt-0.5">03.</span>
                  <span>Menjaga ketepatan jadwal pasokan guna mendukung kelancaran rantai operasional mitra usaha.</span>
                </li>
              </ul>
              <div className="text-[11px] text-[#76847B] italic">
                * Rumusan misi operasional internal B2B PT Indo Kreasi.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Perusahaan */}
      <section className="py-16 bg-white border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Prinsip Kerja"
            title="Nilai-Nilai Fundamental Perusahaan"
            subtitle="Landasan etika bisnis yang diterapkan dalam setiap hubungan kemitraan dengan pelanggan korporat."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.values.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F5F0] p-6 rounded-lg border border-[#E2E4E0] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold font-mono text-[#A36E53] mb-2">
                    0{idx + 1}. Prinsip
                  </div>
                  <h4 className="text-base font-bold text-[#1F3040] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5C6B77] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ruang Lingkup Bisnis */}
      <section className="py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Sektor Pengadaan"
            title="Ruang Lingkup Layanan Sourcing"
            subtitle="Mendukung berbagai sektor industri dengan fleksibilitas kuantitas dan sistem penawaran resmi."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#E2E4E0]">
              <Building2 className="w-8 h-8 text-[#1F3040] mb-3" />
              <h4 className="text-base font-bold text-[#1F3040] mb-2">Manufaktur & Fabrikasi</h4>
              <p className="text-xs text-[#5C6B77] leading-relaxed">
                Penyediaan fastener baja tahan karat, baut presisi tinggi, dan katup mekanikal untuk jalur perakitan dan perawatan mesin mesin pabrik.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#E2E4E0]">
              <Award className="w-8 h-8 text-[#1F3040] mb-3" />
              <h4 className="text-base font-bold text-[#1F3040] mb-2">Logistik & Distribusi Pergudangan</h4>
              <p className="text-xs text-[#5C6B77] leading-relaxed">
                Material kemasan heavy-duty meliputi karton double wall, kertas kraft industri, dan tali strapping palet untuk keamanan pengiriman kargo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-[#E2E4E0]">
              <Target className="w-8 h-8 text-[#1F3040] mb-3" />
              <h4 className="text-base font-bold text-[#1F3040] mb-2">Konstruksi & Fasilitas Operasional</h4>
              <p className="text-xs text-[#5C6B77] leading-relaxed">
                Perlengkapan keselamatan kerja (APD) terstandar untuk memproteksi pekerja lapangan dan teknisi dari risiko bahaya kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Kontak */}
      <section className="py-16 bg-[#1F3040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Ingin Berdiskusi Mengenai Kebutuhan Sourcing Perusahaan Anda?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-xl mx-auto">
            Tim representatif PT Indo Kreasi siap memberikan informasi teknis dan quotation yang sesuai dengan jadwal operasional Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asLink
              href={getGeneralWhatsAppUrl('Konsultasi Kemitraan')}
              target="_blank"
              variant="copper"
              size="lg"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Hubungi via WhatsApp
            </Button>
            <Button
              asLink
              href="/kontak"
              variant="outline"
              size="lg"
              className="text-white bg-transparent border-[#94A3B8]/40 hover:bg-[#2A4259] hover:text-white"
            >
              Lihat Detail Kontak Perusahaan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
