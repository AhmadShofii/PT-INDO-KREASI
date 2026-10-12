import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { companyData } from '../../data/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F3040] text-[#E2E4E0] border-t border-[#2A4259] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A4259]">
          {/* Col 1: Corporate Profile Summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-[#A36E53] flex items-center justify-center text-white font-bold text-sm">
                IK
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PT Indo Kreasi
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
              {companyData.shortDescription}
            </p>
            <div className="inline-block p-3 rounded bg-[#162330] border border-[#2A4259] text-xs text-[#94A3B8]">
              <span className="font-semibold text-white block mb-1">Catatan Keterbukaan Informasi:</span>
              <p className="leading-relaxed">
                {companyData.disclaimer}
              </p>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-[#94A3B8] hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-[#94A3B8] hover:text-white transition-colors">
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-[#94A3B8] hover:text-white transition-colors">
                  Layanan Pengadaan
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-[#94A3B8] hover:text-white transition-colors">
                  Kontak Perusahaan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kategori Utama */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Kategori Produk
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/produk?kategori=perkakas-mekanikal" className="text-[#94A3B8] hover:text-white transition-colors">
                  Perkakas & Fastener Mekanikal
                </Link>
              </li>
              <li>
                <Link to="/produk?kategori=material-kemasan" className="text-[#94A3B8] hover:text-white transition-colors">
                  Material Kemasan & Pergudangan
                </Link>
              </li>
              <li>
                <Link to="/produk?kategori=alat-keselamatan-k3" className="text-[#94A3B8] hover:text-white transition-colors">
                  Alat Keselamatan Kerja (K3)
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-[#A36E53] hover:text-[#C4886B] font-medium transition-colors flex items-center gap-1 mt-2">
                  <span>Konsultasi Sourcing B2B</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Informasi Kontak & Kantor */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Kontak Pengadaan
            </h4>
            <ul className="space-y-3 text-xs text-[#94A3B8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A36E53] shrink-0 mt-0.5" />
                <span>
                  {companyData.address.line1}, {companyData.address.line2}, {companyData.address.city} {companyData.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A36E53] shrink-0" />
                <span>{companyData.contact.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#A36E53] shrink-0" />
                <a
                  href={`https://wa.me/${companyData.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {companyData.contact.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A36E53] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 border-t border-[#2A4259]">
                <Clock className="w-4 h-4 text-[#76847B] shrink-0 mt-0.5" />
                <span>{companyData.operationalHours.workdays}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#76847B]">
          <p>
            &copy; {currentYear} {companyData.legalEntity}. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/tentang-kami" className="hover:text-white transition-colors">
              Profil Perusahaan
            </Link>
            <Link to="/layanan" className="hover:text-white transition-colors">
              Alur Pengadaan
            </Link>
            <Link to="/kontak" className="hover:text-white transition-colors">
              Kontak B2B
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
