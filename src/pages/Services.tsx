import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, FileCheck2, Truck, Headphones, ClipboardList, ShieldAlert, ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { getGeneralWhatsAppUrl, getGeneralEmailUrl } from '../utils/whatsapp';

export const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-[#E2E4E0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Beranda', href: '/' },
              { label: 'Layanan Pengadaan' }
            ]}
          />
        </div>
      </div>

      {/* Hero Intro */}
      <section className="py-12 sm:py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A36E53] mb-2 font-mono">
              Layanan Supplier B2B
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F3040] leading-tight text-balance">
              Layanan Pasokan & Pengadaan Terintegrasi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B77] leading-relaxed">
              Kami mendampingi proses pengadaan material perusahaan Anda mulai dari pencocokan spesifikasi teknis, penyusunan quotation resmi, hingga koordinasi pengiriman terjadwal.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pilar Layanan Utama */}
      <section className="py-16 bg-white border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Kapabilitas Layanan"
            title="Cakupan Pelayanan Pengadaan PT Indo Kreasi"
            subtitle="Fokus layanan kami dirancang untuk mempermudah tugas purchasing departemen korporat."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center mb-4">
                  <ClipboardList className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-base font-bold text-[#1F3040] mb-2">
                  Penyusunan Quotation Resmi
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed">
                  Penerbitan surat penawaran harga formal dengan rincian spesifikasi, ketersediaan, masa berlaku harga, serta ketentuan pembayaran B2B.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center mb-4">
                  <Headphones className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-base font-bold text-[#1F3040] mb-2">
                  Konsultasi Spesifikasi Teknis
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed">
                  Bantuan teknis untuk mencari padanan ukuran, grade material baja, atau standar sertifikasi APD yang paling sesuai dengan regulasi operasional.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-base font-bold text-[#1F3040] mb-2">
                  Pengiriman Terkoordinasi
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed">
                  Koordinasi pengiriman langsung ke alamat gudang atau site proyek pabrik dengan surat jalan (Surat Pengantar Barang / Delivery Order) resmi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-[#1F3040] text-white flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5 text-[#A36E53]" />
                </div>
                <h3 className="text-base font-bold text-[#1F3040] mb-2">
                  Kelengkapan Administrasi Pajak
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed">
                  Dukungan Faktur Pajak e-Faktur dan kelengkapan administrasi legalitas usaha bagi perusahaan rekanan yang memerlukan kepatuhan fiskal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alur Permintaan Penawaran */}
      <section className="py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Standard Operating Procedure"
            title="Tata Cara Permintaan Surat Penawaran (Quotation)"
            subtitle="Ikuti 4 langkah sederhana berikut untuk mendapatkan penawaran terbaik bagi proyek Anda."
          />

          <div className="space-y-4 max-w-4xl">
            {companyData.procurementSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-lg border border-[#E2E4E0] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xs"
              >
                <div className="w-12 h-12 rounded bg-[#1F3040] text-white font-mono font-bold text-lg flex items-center justify-center shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#1F3040] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6B77] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="text-xs text-[#76847B] font-mono shrink-0 hidden md:block">
                  Fase {idx + 1} / 4
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border border-[#E2E4E0] rounded-lg max-w-4xl flex items-start gap-3 text-xs text-[#5C6B77]">
            <ShieldAlert className="w-5 h-5 text-[#A36E53] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Tips Purchasing:</strong> Cantumkan estimasi kuantitas (pieces, pack, roll, atau tonase) serta lokasi gudang tujuan saat mengajukan inquiry agar tim kami dapat mengalkulasi skema ongkos logistik paling hemat untuk quotation Anda.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F3040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Siap Mengirimkan Rincian Kebutuhan Pengadaan Anda?
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-8 max-w-xl mx-auto">
            Tim sales B2B PT Indo Kreasi siap memberikan respon cepat pada jam kerja operasional.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asLink
              href={getGeneralWhatsAppUrl('Permintaan Penawaran Quotation')}
              target="_blank"
              variant="copper"
              size="lg"
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Inquiry via WhatsApp
            </Button>
            <Button
              asLink
              href={getGeneralEmailUrl()}
              variant="outline"
              size="lg"
              icon={<Mail className="w-4 h-4" />}
              className="text-white bg-transparent border-[#94A3B8]/40 hover:bg-[#2A4259] hover:text-white"
            >
              Kirim Rincian via Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
