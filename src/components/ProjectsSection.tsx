import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Business Plan: Kedai Kreatif',
    description: 'Rancangan bisnis kuliner modern khas Aceh dengan konsep kekinian untuk anak muda.',
    tags: ['Entrepreneur', 'Ekonomi'],
    image: '🛍️',
    demo: '#',
  },
  {
    title: 'Digital Poster: Stop Bullying',
    description: 'Kampanye sosial kreatif untuk lingkungan MAN 1 Banda Aceh.',
    tags: ['Desain', 'Sosial'],
    image: '🎨',
    demo: '#',
  },
  {
    title: 'Vlog: Pesona Alam Aceh',
    description: 'Dokumentasi perjalanan mengeksplorasi keindahan alam Aceh.',
    tags: ['Travel', 'Content'],
    image: '🎬',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#FFF0F3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF85A1] font-bold mb-2 block tracking-widest uppercase text-sm">Portofolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#4A3B3C]">
            Karya & Pengalaman
          </h2>
          <div className="w-16 h-1.5 bg-[#FF85A1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full p-8 bg-white/80 backdrop-blur-md border border-[#FFD1DC] rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-video rounded-2xl mb-6 flex items-center justify-center bg-[#FFF0F3] border border-[#FFD1DC] text-6xl">
                  {project.image}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-[#FF85A1] text-white font-bold uppercase">Content</span>
                    )}
                    <h3 className="font-display text-xl font-bold text-[#4A3B3C] group-hover:text-[#FF85A1] transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-sm text-[#6B5B5C] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-[10px] font-bold rounded-lg bg-white text-[#FF85A1] border border-[#FFD1DC]">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-4">
                    {project.demo && (
                      <Button size="sm" className="w-full rounded-full bg-[#FF85A1] hover:bg-[#ff7091] text-white border-none shadow-md">Lihat Karya</Button>
                    )}
                    {project.youtube && (
                      <Button size="sm" className="w-full rounded-full bg-[#FF4D6D] hover:bg-[#ff3355] text-white border-none shadow-md flex gap-2"><Play size={14}/> Tonton</Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}