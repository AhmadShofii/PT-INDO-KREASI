import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, Clock, Truck, FileText, MessageCircle, Sparkles } from 'lucide-react';
import { productCategories } from '../../data/categories';
import { companyData } from '../../data/company';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';

export const SourcingEstimator: React.FC = () => {
  const { themeMode, playPixelSound } = useTheme();
  const isMinecraft = themeMode === 'minecraft';

  const [selectedCat, setSelectedCat] = useState(productCategories[0].slug);
  const [volumeTier, setVolumeTier] = useState<'trial' | 'standard' | 'bulk'>('standard');
  const [needTaxInvoice, setNeedTaxInvoice] = useState(true);

  const activeCategory = productCategories.find((c) => c.slug === selectedCat) || productCategories[0];

  const volumeOptions = [
    { id: 'trial', label: 'Batch Uji Coba (Small)', range: '50 – 250 Unit / Pcs', leadTime: '1 – 2 Hari Kerja', transport: 'Kurir Kargo Standar' },
    { id: 'standard', label: 'Proyek Reguler (Medium)', range: '500 – 2.500 Unit / Pcs', leadTime: '3 – 5 Hari Kerja', transport: 'Armada Pickup / Box Khusus' },
    { id: 'bulk', label: 'Kontrak Rutin (Bulk / Pabrik)', range: '5.000+ Unit / Rutin', leadTime: 'Jadwal Delivery Terprogram', transport: 'Truk CDD / Fuso Kontainer' },
  ];

  const currentVolume = volumeOptions.find((v) => v.id === volumeTier) || volumeOptions[1];

  const generateEstimatorWhatsAppUrl = () => {
    const message = [
      `Halo Tim Pengadaan PT Indo Kreasi,`,
      ``,
      `Saya menggunakan Sourcing Estimator website dan ingin meminta penawaran resmi untuk:`,
      `• Kategori: ${activeCategory.name}`,
      `• Estimasi Kuantitas: ${currentVolume.label} (${currentVolume.range})`,
      `• Kebutuhan Faktur Pajak: ${needTaxInvoice ? 'Ya, diperlukan Faktur Pajak resmi' : 'Non-Pajak / Umum'}`,
      ``,
      `Mohon dihubungkan dengan staf procurement untuk pembuatan Quotation resmi. Terima kasih.`
    ].join('\n');

    return `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`p-6 sm:p-8 rounded-xl border transition-all ${
      isMinecraft
        ? 'mc-panel text-white'
        : 'bg-white border-[#E2E4E0] shadow-sm'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200/50">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-1 font-mono text-[#A36E53]">
            {isMinecraft ? <span className="text-[#55FFFF]">⚒️ CRAFTING & SOURCING TABLE</span> : <><Sparkles className="w-3.5 h-3.5" /><span>Kalkulator Estimasi Pengadaan B2B</span></>}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1F3040] dark:text-white">
            {isMinecraft ? 'Simulasi Crafting & Pasokan Blok' : 'Simulasi Estimasi Kebutuhan Sourcing'}
          </h3>
        </div>
        <div className="text-xs text-gray-500 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#76847B]" />
          <span>Respon Quotation: 1 x 24 Jam</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Kategori */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
              1. Pilih Kategori Kebutuhan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {productCategories.map((cat) => {
                const isSelected = selectedCat === cat.slug;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      if (isMinecraft) playPixelSound('click');
                      setSelectedCat(cat.slug);
                    }}
                    className={`p-3 rounded text-left text-xs transition-all cursor-pointer ${
                      isMinecraft
                        ? isSelected
                          ? 'mc-btn-gold text-white font-bold'
                          : 'mc-btn text-gray-300'
                        : isSelected
                          ? 'bg-[#1F3040] text-white font-semibold shadow-xs'
                          : 'bg-[#F7F5F0] hover:bg-[#E2E4E0] text-[#24303A]'
                    }`}
                  >
                    <div className="truncate font-medium">{cat.name}</div>
                    <div className="text-[10px] opacity-70 mt-0.5">{cat.itemCount} Item Katalog</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Volume Tier */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2.5 opacity-80">
              2. Estimasi Volume Pengadaan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {volumeOptions.map((opt) => {
                const isSelected = volumeTier === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      if (isMinecraft) playPixelSound('click');
                      setVolumeTier(opt.id as any);
                    }}
                    className={`p-3 rounded text-left text-xs transition-all cursor-pointer ${
                      isMinecraft
                        ? isSelected
                          ? 'mc-btn-gold text-white font-bold'
                          : 'mc-btn text-gray-300'
                        : isSelected
                          ? 'bg-[#A36E53] text-white font-semibold shadow-xs'
                          : 'bg-[#F7F5F0] hover:bg-[#E2E4E0] text-[#24303A]'
                    }`}
                  >
                    <div className="font-semibold">{opt.label}</div>
                    <div className="text-[11px] opacity-80 mt-1">{opt.range}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Faktur Pajak Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="tax-check"
              checked={needTaxInvoice}
              onChange={(e) => {
                if (isMinecraft) playPixelSound('click');
                setNeedTaxInvoice(e.target.checked);
              }}
              className="w-4 h-4 rounded text-[#A36E53] cursor-pointer"
            />
            <label htmlFor="tax-check" className="text-xs text-gray-600 dark:text-gray-300 cursor-pointer select-none">
              Membutuhkan kelengkapan e-Faktur Pajak resmi dan Invoice PT
            </label>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5">
          <motion.div
            key={`${selectedCat}-${volumeTier}-${needTaxInvoice}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`p-5 rounded-lg border ${
              isMinecraft
                ? 'mc-panel text-white'
                : 'bg-[#F7F5F0] border-[#E2E4E0]'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A36E53] font-mono">
                {isMinecraft ? 'HASIL CRAFTING' : 'Ringkasan Estimasi Sourcing'}
              </span>
              <span className="text-[11px] bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded">
                Tersedia untuk Quotation
              </span>
            </div>

            <div className="space-y-3.5 text-xs mb-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#76847B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1F3040] dark:text-white">Kategori Terpilih:</span>
                  <span className="text-gray-600 dark:text-gray-300">{activeCategory.name}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#76847B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1F3040] dark:text-white">Estimasi Waktu Respon & Pengadaan:</span>
                  <span className="text-gray-600 dark:text-gray-300">{currentVolume.leadTime}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#76847B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1F3040] dark:text-white">Rekomendasi Armada Pengiriman:</span>
                  <span className="text-gray-600 dark:text-gray-300">{currentVolume.transport}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#76847B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1F3040] dark:text-white">Kelengkapan Berkas Transaksi:</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Surat Penawaran (Quotation) {needTaxInvoice ? '+ Faktur Pajak Resmi' : ''}
                  </span>
                </div>
              </div>
            </div>

            <Button
              asLink
              href={generateEstimatorWhatsAppUrl()}
              target="_blank"
              variant="copper"
              size="md"
              icon={<MessageCircle className="w-4 h-4" />}
              className="w-full"
            >
              {isMinecraft ? 'Kirim ke WhatsApp [CRAFT]' : 'Minta Quotation Sesuai Estimasi'}
            </Button>
            <p className="text-[11px] text-center text-gray-500 mt-2">
              Tidak ada komitmen biaya. Tim sales akan mengonfirmasi via chat.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
