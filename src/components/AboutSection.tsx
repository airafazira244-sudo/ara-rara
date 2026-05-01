import { motion } from 'framer-motion';
import { Code2, Rocket, Heart, Map } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: 'Kelas 10', label: 'MAN 1 Banda Aceh' },
    { icon: Map, value: 'Aceh', label: 'Tempat Tinggal' },
    { icon: Heart, value: 'Explorer', label: 'Suka Jalan-jalan' },
    { icon: Rocket, value: 'Pengusaha', label: 'Cita-cita' },
  ];

  // Fungsi untuk menangani jika foto tidak ditemukan
  const handleImageError = (event) => {
    event.currentTarget.src = "https://via.placeholder.com/500x500?text=Aira+Fazira";
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FFF9FA]"> 
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF85A1] font-semibold mb-2 block tracking-[0.2em] uppercase text-sm">Get to Know</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#4A3B3C]">
            Tentang Aira Fazira
          </h2>
          <div className="w-16 h-1.5 bg-[#FFC1CC] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Bagian Foto (foto-aira.jpg) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Frame Foto Estetik */}
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-[#FFD1DC]">
                <img 
                  src="/foto-aira.jpg" 
                  alt="Aira Portfolio" 
                  className="w-full h-full object-cover shadow-inner"
                  onError={handleImageError}
                />
              </div>
              
              {/* Floating Badge Tanggal Lahir */}
              <div className="absolute -bottom-8 -right-4 p-6 bg-white/80 backdrop-blur-lg border border-[#FFD1DC] rounded-2xl shadow-xl text-center">
                <p className="font-display font-black text-xl text-[#FF85A1]">Mei 26</p>
                <p className="text-[10px] text-[#8E7676] font-bold uppercase tracking-widest">Lahir Tahun 2010</p>
              </div>
            </div>
          </motion.div>

          {/* Bagian Teks Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-4xl font-bold text-[#4A3B3C] leading-tight">
                Mimpi Besar & <br /> 
                <span className="text-[#FF85A1]">Semangat Belajar</span>
              </h3>
              <p className="text-[#6B5B5C] text-lg leading-relaxed">
                Halo, aku <span className="font-bold text-[#FF85A1]">Aira Fazira</span>. Lahir pada 26 Mei 2010 dan saat ini bersekolah di <span className="font-semibold text-[#FF85A1]">MAN 1 Banda Aceh</span>, kelas 10.
              </p>
              <p className="text-[#6B5B5C] leading-relaxed">
                Aku adalah tipe orang yang suka menjelajah—jalan-jalan bukan sekadar hobi, tapi caraku menemukan inspirasi dan pengalaman baru. Aku percaya setiap langkah kecil hari ini adalah bagian dari perjalanan besar di masa depan. 
              </p>
              <p className="text-[#6B5B5C] leading-relaxed italic border-l-4 border-[#FFC1CC] pl-4">
                "Dengan semangat belajar dan mimpi yang terus tumbuh, aku ingin menjadi seorang pengusaha sukses yang bisa menciptakan peluang dan membawa perubahan." 🚀
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 bg-white border border-[#FFEDF0] rounded-2xl text-center hover:shadow-md transition-all group"
                >
                  <stat.icon className="h-6 w-6 text-[#FF85A1] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-xl font-bold text-[#4A3B3C]">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#A39193] font-bold mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}