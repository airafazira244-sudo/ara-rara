import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Juara 3 Tenis Meja',
    issuer: 'MAN 1 Banda Aceh',
    date: '2024',
    credentialId: 'TM-MAN1-2024',
    link: '/certifra.jpg', // File foto di folder public
  },
];

export default function CertifRa() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-[#FFF0F3]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#FF85A1] font-bold mb-2 block tracking-widest uppercase text-sm">Prestasi</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#4A3B3C]">
            Sertifikat & Penghargaan
          </h2>
          <div className="w-16 h-1.5 bg-[#FF85A1] mx-auto rounded-full" />
        </motion.div>

        {/* Certificate Card (Tanpa Gambar di Atas) */}
        <div className="flex justify-center max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group w-full max-w-md"
            >
              <div className="h-full p-8 bg-white/80 backdrop-blur-md border border-[#FFD1DC] rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Bagian Judul dan Icon */}
                  <div className="flex items-start gap-4">
                    <div className="p-4 rounded-2xl bg-[#FFF0F3] border border-[#FFD1DC]">
                      <Award className="h-8 w-8 text-[#FF85A1]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#4A3B3C] group-hover:text-[#FF85A1] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-[#6B5B5C] font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Info Tambahan */}
                  <div className="flex items-center gap-4 py-2 border-y border-[#FFEDF0]">
                    <div className="flex items-center gap-2 text-sm text-[#FF85A1] font-bold">
                      <Calendar size={16} />
                      <span>Tahun {cert.date}</span>
                    </div>
                    <div className="text-[10px] text-[#6B5B5C]/40 font-mono">
                      ID: {cert.credentialId}
                    </div>
                  </div>
                  
                  <p className="text-sm text-[#6B5B5C] leading-relaxed">
                    Penghargaan atas dedikasi dan sportifitas dalam kompetisi Tenis Meja tingkat sekolah.
                  </p>
                  
                  {/* Tombol Utama untuk Buka Foto */}
                  <Button 
                    className="w-full rounded-full bg-[#FF85A1] hover:bg-[#ff7091] text-white border-none shadow-md transition-all py-6 text-lg font-bold" 
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Lihat Sertifikat
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}