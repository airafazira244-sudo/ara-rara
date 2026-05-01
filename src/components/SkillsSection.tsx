import { motion } from 'framer-motion';

const skills = {
  entrepreneur: [
    { name: 'Business Planning', level: 85 },
    { name: 'Public Speaking', level: 90 },
    { name: 'Marketing Strategy', level: 80 },
    { name: 'Leadership', level: 88 },
    { name: 'Creative Thinking', level: 95 },
  ],
  ips: [
    { name: 'Ekonomi & Akuntansi', level: 92 },
    { name: 'Sosiologi', label: 'Interaksi Sosial', level: 88 },
    { name: 'Geografi', level: 85 },
    { name: 'Sejarah Indonesia', level: 90 },
    { name: 'Manajemen Bisnis', level: 82 },
  ],
  agama: [
    { name: 'Fiqih & Ushul Fiqih', level: 90 },
    { name: 'Akidah Akhlak', level: 95 },
    { name: 'Al-Qur\'an Hadits', level: 88 },
    { name: 'Sejarah Kebudayaan Islam', level: 92 },
    { name: 'Bahasa Arab', level: 80 },
  ],
};

function SkillBar({ name, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-[#4A3B3C]">{name}</span>
        <span className="text-sm text-[#FF85A1] font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-[#FFEDF0] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[#FF85A1] to-[#FFC1CC]"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF85A1] font-semibold mb-2 block tracking-widest uppercase text-sm">Kemampuan Utama</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#4A3B3C]">
            Skills & Bidang Studi
          </h2>
          <div className="w-20 h-1.5 bg-[#FFC1CC] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Entrepreneurship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-[#FFF9FA] border border-[#FFEDF0] rounded-3xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FF85A1]/10">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#4A3B3C]">Entrepreneur</h3>
            </div>
            <div className="space-y-5">
              {skills.entrepreneur.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPS & Akademik */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-[#FFF9FA] border border-[#FFEDF0] rounded-3xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FF85A1]/10">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#4A3B3C]">IPS & Bisnis</h3>
            </div>
            <div className="space-y-5">
              {skills.ips.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Agama Islam */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-[#FFF9FA] border border-[#FFEDF0] rounded-3xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#FF85A1]/10">
                <span className="text-2xl">🕌</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#4A3B3C]">Agama Islam</h3>
            </div>
            <div className="space-y-5">
              {skills.agama.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}