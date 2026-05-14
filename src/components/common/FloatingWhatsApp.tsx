import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND } from '../../lib/constants';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hi Sahil Fram, I'm interested in your oyster mushrooms!`;

  return (
    <div className="fixed bottom-8 right-0 z-50">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        whileHover={{ x: -8 }}
        className="flex items-center gap-4 bg-white p-3 pr-8 rounded-l-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] cursor-pointer transition-transform group"
      >
        <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full" />
          <MessageCircle className="w-6 h-6 z-10" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase text-brand-green/40 leading-none mb-1 tracking-widest">Available Now</span>
          <span className="font-bold text-brand-green">Chat on WhatsApp</span>
        </div>
      </motion.a>
    </div>
  );
}
