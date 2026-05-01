import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram, Sparkles, Code2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF9FA]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFC1CC]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF85A1]/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 z-0 opacity-40">
        <ThreeScene />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center md:justify-start gap-2 mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#FFD1DC] text-xs font-bold text-[#FF85A1] shadow-sm flex items-center gap-2">
                <Sparkles size={14} /> HI, I'M AIRA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#4A3B3C] leading-[1.1]"
            >
              hai👋🏻, <span className="text-[#FF85A1]"></span> <br /> 
              i'm aira
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#6B5B5C] mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Aku seorang Fullstack Developer yang suka mencampur <Code2 className="inline h-5 w-5 text-[#FF85A1]" /> coding dengan <Heart className="inline h-5 w-5 text-[#FF85A1]" /> kreativitas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-10"
            >
              <Button 
                size="lg" 
                className="rounded-full px-10 bg-[#FF85A1] hover:bg-[#ff7091] text-white border-none shadow-lg shadow-pink-100 transition-all hover:scale-105"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-10 border-[#FFD1DC] text-[#FF85A1] hover:bg-[#FFF1F2] bg-white/50"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Talk
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center md:justify-start gap-5"
            >
              {[Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-2xl bg-white/40 border border-[#FFD1DC] text-[#8E7676] hover:text-[#FF85A1] transition-all duration-300">
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-dashed border-[#FFD1DC] rounded-[4rem] opacity-40"
              />
              
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                <img 
                  src="/foto-airaa.jpg" 
                  alt="Aira Profile" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/500x500?text=Foto+Airaa";
                  }}
                />
              </div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#FFEDF0] z-20 flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-[#4A3B3C]">Available for Projects</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/60 border border-[#FFD1DC] backdrop-blur-sm cursor-pointer"
      >
        <ArrowDown className="h-5 w-5 text-[#FF85A1] animate-bounce" />
      </motion.button>
    </section>
  );
}