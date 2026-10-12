import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowUpRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/company';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { getGeneralWhatsAppUrl, getGeneralEmailUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const faqs = [
    {
      q: "Bagaimana cara meminta surat penawaran harga resmi (Quotation)?",
      a: "Anda dapat menghubungi tim kami via WhatsApp atau mengirimkan daftar kebutuhan barang melalui email procurement kami. Cantumkan nama item, spesifikasi, dan kuantitas perkiraan."
    },
    {
      q: "Berapa lama estimasi penerbitan quotation?",
      a: "Untuk item yang tertera pada katalog standar, penawaran resmi diterbitkan dalam rentang 1 x 24 jam kerja setelah rincian spesifikasi terverifikasi."
    },
    {
      q: "Apakah PT Indo Kreasi melayani pesanan ke luar daerah?",
      a: "Ya, kami melayani pengiriman logistik B2B ke berbagai kawasan industri dan wilayah di Indonesia menggunakan armada pengiriman terkoordinasi."
    },
    {
      q: "Apakah transaksi disertai dokumen Faktur Pajak resmi?",
      a: "Seluruh transaksi pengadaan perusahaan didukung oleh kelengkapan administrasi termasuk Invoice, Surat Jalan (DO), dan e-Faktur Pajak resmi."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-[#E2E4E0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Beranda', href: '/' },
              { label: 'Kontak Perusahaan' }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A36E53] mb-2 font-mono">
              Saluran Komunikasi
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F3040] leading-tight text-balance">
              Hubungi Tim Pengadaan PT Indo Kreasi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C6B77] leading-relaxed">
              Hubungi kami langsung melalui WhatsApp atau email resmi untuk menanyakan spesifikasi produk, ketersediaan pengadaan, atau konsultasi kebutuhan industri Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Quick Actions */}
      <section className="py-16 bg-white border-b border-[#E2E4E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="p-8 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#1F3040] text-white flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[#A36E53]" />
                </div>
                <h3 className="text-lg font-bold text-[#1F3040] mb-2">
                  Layanan Cepat WhatsApp
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed mb-4">
                  Respon tercepat untuk pertanyaan ketersediaan katalog, konfirmasi spesifikasi teknis cepat, dan diskusi awal quotation.
                </p>
                <div className="text-sm font-semibold text-[#1F3040] mb-6">
                  {companyData.contact.whatsappDisplay}
                </div>
              </div>

              <Button
                asLink
                href={getGeneralWhatsAppUrl('Inquiry Kontak Resmi')}
                target="_blank"
                variant="copper"
                size="md"
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full"
              >
                Chat WhatsApp Sekarang
              </Button>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#1F3040] text-white flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-[#A36E53]" />
                </div>
                <h3 className="text-lg font-bold text-[#1F3040] mb-2">
                  Email Procurement Resmi
                </h3>
                <p className="text-xs text-[#5C6B77] leading-relaxed mb-4">
                  Saluran untuk pengiriman dokumen Request for Quotation (RFQ), daftar rincian PO, spesifikasi teknis bertandatangan, dan kerja sama legal.
                </p>
                <div className="text-sm font-semibold text-[#1F3040] mb-6 truncate">
                  {companyData.contact.email}
                </div>
              </div>

              <Button
                asLink
                href={getGeneralEmailUrl()}
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                className="w-full"
              >
                Kirim Email (Mailto)
              </Button>
            </div>

            {/* Kantor & Operasional Card */}
            <div className="p-8 rounded-lg bg-[#F7F5F0] border border-[#E2E4E0] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded bg-[#1F3040] text-white flex items-center justify-center mb-6">
                  <BuildingIcon />
                </div>
                <h3 className="text-lg font-bold text-[#1F3040] mb-2">
                  Kantor & Jam Layanan
                </h3>
                <div className="space-y-3 text-xs text-[#5C6B77] mb-6">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#A36E53] shrink-0 mt-0.5" />
                    <span>
                      {companyData.address.line1}, {companyData.address.line2}, {companyData.address.city} {companyData.address.postalCode}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A36E53] shrink-0" />
                    <span>{companyData.contact.phoneDisplay}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[#A36E53] shrink-0 mt-0.5" />
                    <span>{companyData.operationalHours.workdays}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded bg-white border border-[#E2E4E0] text-[11px] text-[#76847B]">
                <strong className="text-[#1F3040] block mb-0.5">Keterangan:</strong>
                {companyData.address.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F7F5F0] border-b border-[#E2E4E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Tanya Jawab"
            title="Pertanyaan yang Sering Diajukan (FAQ)"
            subtitle="Panduan umum seputar alur pengadaan dan kemitraan supplier B2B bersama PT Indo Kreasi."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-[#E2E4E0] shadow-xs">
                <h3 className="text-base font-bold text-[#1F3040] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#A36E53] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5C6B77] leading-relaxed pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-white border border-[#E2E4E0] rounded-lg flex items-center justify-between gap-4 text-xs">
            <span className="text-[#5C6B77]">
              Punya pertanyaan khusus yang belum terjawab?
            </span>
            <a
              href={getGeneralWhatsAppUrl('Tanya Jawab Pengadaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#A36E53] hover:text-[#8D5C43] flex items-center gap-1"
            >
              <span>Hubungi CS WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

function BuildingIcon() {
  return (
    <svg className="w-6 h-6 text-[#A36E53]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}
