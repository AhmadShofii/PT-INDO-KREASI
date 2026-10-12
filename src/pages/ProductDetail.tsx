import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, Mail, ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, PackageCheck, AlertCircle } from 'lucide-react';
import { productsData } from '../data/products';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { ProductCard } from '../components/products/ProductCard';
import { getProductWhatsAppUrl, getProductEmailUrl } from '../utils/whatsapp';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [imageError, setImageError] = useState(false);
  const { themeMode } = useTheme();
  const isMinecraft = themeMode === 'minecraft';

  // Find product by slug
  const product = productsData.find((p) => p.slug === slug);

  // If not found, show informative not found view
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F5F0] px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-lg border border-[#E2E4E0] text-center shadow-xs">
          <AlertCircle className="w-12 h-12 text-[#A36E53] mx-auto mb-4" />
          <h1 className="text-xl font-bold text-[#1F3040] mb-2">Produk Tidak Ditemukan</h1>
          <p className="text-sm text-[#5C6B77] mb-6">
            Produk dengan URL &quot;{slug}&quot; tidak terdaftar dalam katalog atau telah dipindahkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asLink href="/produk" variant="primary" size="sm">
              Kembali ke Katalog Produk
            </Button>
            <Button asLink href="/" variant="outline" size="sm">
              Ke Beranda
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Related products from same category (excluding current)
  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F5F0]">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-[#E2E4E0] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Beranda', href: '/' },
              { label: 'Katalog Produk', href: '/produk' },
              { label: product.categoryName, href: `/produk?kategori=${product.categorySlug}` },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={isMinecraft ? 'mc-panel p-6 sm:p-8 lg:p-10 text-white' : 'bg-white border border-[#E2E4E0] rounded-lg p-6 sm:p-8 lg:p-10 shadow-xs'}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Left Column: Product Image Gallery */}
              <div className="lg:col-span-5">
                <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-[#E2E4E0] bg-[#EFF2F0]">
                  {!imageError ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F7F5F0]">
                      <PackageCheck className="w-12 h-12 text-[#76847B] mb-2" />
                      <span className="text-sm font-medium text-[#5C6B77]">{product.categoryName}</span>
                    </div>
                  )}

                  {product.featured && (
                    <div className="absolute top-3 left-3 bg-[#1F3040] text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                      Produk Unggulan
                    </div>
                  )}
                </div>

                {/* Sourcing Guarantee Box */}
                <div className="mt-5 p-4 rounded bg-[#F7F5F0] border border-[#E2E4E0] space-y-2 text-xs text-[#5C6B77]">
                  <div className="flex items-center gap-2 text-[#1F3040] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#A36E53]" />
                    <span>Layanan Pengadaan B2B Terverifikasi</span>
                  </div>
                  <p className="leading-relaxed">
                    Surat penawaran harga resmi (Quotation) akan disusun sesuai kebutuhan volume, spesifikasi dimensi, dan jadwal distribusi perusahaan Anda.
                  </p>
                </div>
              </div>

              {/* Right Column: Information, Specs & Actions */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Category kicker */}
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A36E53] font-mono mb-2">
                  <Link
                    to={`/produk?kategori=${product.categorySlug}`}
                    className="hover:underline"
                  >
                    {product.categoryName}
                  </Link>
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3040] leading-snug mb-4">
                  {product.name}
                </h1>

                {/* Summary & Description */}
                <p className="text-sm sm:text-base text-[#5C6B77] leading-relaxed mb-6">
                  {product.fullDescription}
                </p>

                {/* Primary B2B Inquiry Action Box */}
                <div className="p-5 bg-[#F7F5F0] border border-[#E2E4E0] rounded-lg mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold text-[#1F3040] block uppercase tracking-wider">
                        Status Ketersediaan & Penawaran Harga
                      </span>
                      <span className="text-xs text-[#5C6B77]">
                        Harga & ketersediaan stok disesuaikan dengan volume pemesanan B2B.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      asLink
                      href={getProductWhatsAppUrl(product.name, product.slug)}
                      target="_blank"
                      variant="copper"
                      size="md"
                      icon={<MessageCircle className="w-4 h-4" />}
                      className="flex-1 sm:flex-initial"
                    >
                      Tanyakan Produk via WhatsApp
                    </Button>

                    <Button
                      asLink
                      href={getProductEmailUrl(product.name, product.slug)}
                      variant="outline"
                      size="md"
                      icon={<Mail className="w-4 h-4 text-[#1F3040]" />}
                      className="flex-1 sm:flex-initial"
                    >
                      Minta Penawaran Email
                    </Button>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="mb-8">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#1F3040] mb-3 pb-2 border-b border-[#E2E4E0]">
                    Spesifikasi Teknis
                  </h2>
                  <div className="border border-[#E2E4E0] rounded overflow-hidden">
                    <table className="w-full text-xs">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, val], index) => (
                          <tr
                            key={key}
                            className={index % 2 === 0 ? 'bg-[#F7F5F0]' : 'bg-white'}
                          >
                            <td className="py-2.5 px-4 font-semibold text-[#1F3040] w-2/5 border-r border-[#E2E4E0]">
                              {key}
                            </td>
                            <td className="py-2.5 px-4 text-[#24303A] font-medium">
                              {val}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Packaging & Logistics Notice */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
                  <div className="p-3.5 bg-white border border-[#E2E4E0] rounded">
                    <span className="font-semibold text-[#1F3040] block mb-1">Satuan Kemasan Standar</span>
                    <p className="text-[#5C6B77]">{product.packagingUnit}</p>
                  </div>
                  <div className="p-3.5 bg-white border border-[#E2E4E0] rounded">
                    <span className="font-semibold text-[#1F3040] block mb-1">Ketentuan Pengadaan B2B</span>
                    <p className="text-[#5C6B77]">{product.moqNotice}</p>
                  </div>
                </div>

                {/* Applications list */}
                {product.applications && product.applications.length > 0 && (
                  <div className="mt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#1F3040] mb-2">
                      Rekomendasi Aplikasi Penggunaan
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#5C6B77]">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#76847B] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-14 pt-10 border-t border-[#E2E4E0]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-[#1F3040]">
                    Produk Terkait dalam Kategori Ini
                  </h3>
                  <p className="text-xs text-[#5C6B77] mt-1">
                    Alternatif atau pelengkap dari {product.categoryName}
                  </p>
                </div>
                <Link
                  to={`/produk?kategori=${product.categorySlug}`}
                  className="text-xs font-semibold text-[#A36E53] hover:text-[#8D5C43] transition-colors flex items-center gap-1"
                >
                  <span>Lihat Semua Kategori</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} />
                ))}
              </div>
            </div>
          )}

          {/* Back button */}
          <div className="mt-10">
            <Link
              to="/produk"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6B77] hover:text-[#1F3040] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Seluruh Katalog Produk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
