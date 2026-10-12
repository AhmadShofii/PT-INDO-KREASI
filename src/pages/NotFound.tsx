import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F7F5F0] px-4 py-16">
      <div className="max-w-lg w-full bg-white p-8 sm:p-10 rounded-lg border border-[#E2E4E0] text-center shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#F7F5F0] flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-[#A36E53]" aria-hidden="true" />
        </div>

        <span className="text-xs font-bold text-[#A36E53] uppercase tracking-wider font-mono">
          Error 404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3040] mt-1 mb-3">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm text-[#5C6B77] leading-relaxed mb-8">
          Alamat tautan yang Anda tuju mungkin salah ketik, telah dipindahkan, atau tidak lagi tersedia di portal PT Indo Kreasi.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asLink
            href="/"
            variant="primary"
            size="md"
            icon={<Home className="w-4 h-4" />}
          >
            Kembali ke Beranda
          </Button>

          <Button
            asLink
            href="/produk"
            variant="outline"
            size="md"
            icon={<Search className="w-4 h-4" />}
          >
            Lihat Katalog Produk
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E2E4E0] text-xs text-[#76847B]">
          Butuh bantuan langsung? Hubungi kami melalui{' '}
          <Link to="/kontak" className="text-[#1F3040] font-semibold hover:underline">
            halaman kontak
          </Link>
          .
        </div>
      </div>
    </div>
  );
};
