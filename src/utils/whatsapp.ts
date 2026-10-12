import { companyData } from '../data/company';

/**
 * Generate a direct WhatsApp inquiry link for a specific product
 * Formats: https://wa.me/<number>?text=<encoded_text>
 */
export function getProductWhatsAppUrl(productName: string, productSlug: string): string {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const productUrl = `${currentOrigin}/produk/${productSlug}`;
  
  const message = [
    `Halo Tim Pengadaan PT Indo Kreasi,`,
    ``,
    `Saya tertarik untuk menanyakan informasi ketersediaan, spesifikasi teknis, serta penawaran harga untuk produk berikut:`,
    `• Produk: ${productName}`,
    `• Referensi Tautan: ${productUrl}`,
    ``,
    `Mohon informasi estimasi waktu penyusunan quotation resmi dan ketentuan pengadaan B2B. Terima kasih.`
  ].join('\n');

  return `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a general procurement inquiry WhatsApp link
 */
export function getGeneralWhatsAppUrl(subject?: string): string {
  const intro = subject ? `terkait: ${subject}` : `terkait kebutuhan pengadaan perusahaan kami`;
  const message = [
    `Halo Tim PT Indo Kreasi,`,
    ``,
    `Saya ingin berkonsultasi mengenai layanan supplier dan pengadaan ${intro}.`,
    `Mohon bantuan untuk terhubung dengan staf perwakilan pengadaan B2B. Terima kasih.`
  ].join('\n');

  return `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate an email mailto URL for inquiries
 */
export function getProductEmailUrl(productName: string, productSlug: string): string {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const productUrl = `${currentOrigin}/produk/${productSlug}`;

  const subject = `[Inquiry B2B] Permintaan Penawaran - ${productName}`;
  const body = [
    `Yth. Tim Procurement PT Indo Kreasi,`,
    ``,
    `Bersama surat elektronik ini, perusahaan kami ingin meminta surat penawaran harga resmi (Quotation) untuk kebutuhan produk:`,
    `- Nama Produk: ${productName}`,
    `- URL Katalog: ${productUrl}`,
    `- Estimasi Kebutuhan / Volume: [Mohon cantumkan estimasi unit atau batch]`,
    `- Lokasi Pengiriman: [Cantumkan kota/kawasan industri gudang Anda]`,
    ``,
    `Perusahaan / Pemohon: [Nama Perusahaan & Kontak PIC]`,
    `Telepon: [Nomor HP/Telepon PIC]`
  ].join('\n');

  return `mailto:${companyData.contact.inquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generate general contact email mailto URL
 */
export function getGeneralEmailUrl(): string {
  const subject = `[Inquiry Pengadaan B2B] Konsultasi Supplier - PT Indo Kreasi`;
  const body = [
    `Yth. Tim PT Indo Kreasi,`,
    ``,
    `Kami bermaksud untuk mengajukan konsultasi mengenai pengadaan material / perlengkapan operasional.`,
    ``,
    `Rincian Kebutuhan Singkat:`,
    `[Tuliskan gambaran produk atau kebutuhan perusahaan Anda]`,
    ``,
    `Nama Perusahaan:`,
    `Nama Kontak / PIC:`,
    `Nomor Telepon:`,
    `Kota Lokasi Perusahaan:`
  ].join('\n');

  return `mailto:${companyData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
