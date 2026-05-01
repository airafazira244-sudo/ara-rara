import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Nama harus diisi').max(100, 'Nama terlalu panjang'),
  email: z.string().trim().email('Email tidak valid').max(255, 'Email terlalu panjang'),
  subject: z.string().trim().min(1, 'Subjek harus diisi').max(200, 'Subjek terlalu panjang'),
  message: z.string().trim().min(1, 'Pesan harus diisi').max(2000, 'Pesan terlalu panjang'),
});

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'airafazira244@gmail.com',
    href: 'mailto:airafazira244@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telepon / WA',
    value: '0895-1302-2531',
    href: 'https://wa.me/6289513022531',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@ftrzearaa._',
    href: 'https://instagram.com/ftrzearaa._',
  },
  {
    icon: MapPin,
    label: 'Lokasi',
    value: 'Banda Aceh, Indonesia',
    href: '#',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Pesan Terkirim! ✨',
        description: 'Terima kasih, Aira akan segera membalas pesanmu!',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: 'Gagal Mengirim',
        description: 'Coba lagi nanti atau hubungi via WhatsApp/IG ya.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FFF0F3]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF85A1] font-bold mb-2 block tracking-widest uppercase text-sm">Say Hello</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#4A3B3C]">
            Hubungi Saya
          </h2>
          <div className="w-16 h-1.5 bg-[#FF85A1] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-[#4A3B3C]">
                Mari Berteman!
              </h3>
              <p className="text-[#6B5B5C] leading-relaxed">
                Punya ide seru atau ingin berdiskusi? Silakan hubungi saya melalui form di samping atau melalui sosial media saya di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-md border border-[#FFD1DC] rounded-2xl hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[#FFF0F3] text-[#FF85A1] group-hover:bg-[#FF85A1] group-hover:text-white transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#FF85A1] font-bold">{info.label}</p>
                    <p className="text-xs font-medium text-[#4A3B3C] truncate max-w-[150px]">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-white border border-[#FFD1DC] rounded-[2.5rem] shadow-sm">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#4A3B3C] uppercase ml-1">Nama</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="rounded-xl border-[#FFD1DC] focus:ring-[#FF85A1]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#4A3B3C] uppercase ml-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@kamu.com"
                  className="rounded-xl border-[#FFD1DC] focus:ring-[#FF85A1]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#4A3B3C] uppercase ml-1">Pesan</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesanmu di sini..."
                  rows={4}
                  className="rounded-2xl border-[#FFD1DC] focus:ring-[#FF85A1]"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#FF85A1] hover:bg-[#ff7091] text-white py-6 shadow-lg shadow-[#FF85A1]/20 font-bold text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 animate-spin" />
                ) : (
                  <><Send className="mr-2" size={18} /> Kirim Pesan</>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}