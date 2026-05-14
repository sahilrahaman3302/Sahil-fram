import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Camera, Instagram, Play, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const images = [
    { url: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=800', type: 'Farm', title: 'Incubation Lab' },
    { url: 'https://images.unsplash.com/photo-1589131497262-e6490632512a?q=80&w=800', type: 'Harvest', title: 'Golden Oyster Cluster' },
    { url: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800', type: 'Product', title: 'Premium Packaging' },
    { url: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=800', type: 'Farm', title: 'Humidity Control System' },
    { url: 'https://plus.unsplash.com/premium_photo-1661664124637-2fb07503463a?q=80&w=800', type: 'Team', title: 'Our Cultivators' },
    { url: 'https://images.unsplash.com/photo-1601314167099-232775b3d6fd?q=80&w=800', type: 'Harvest', title: 'Fresh Harvest Sorting' },
    { url: 'https://images.unsplash.com/photo-1632778149975-400e60ccd29b?q=80&w=800', type: 'Dish', title: 'Restaurant Plating' },
    { url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800', type: 'Product', title: 'Dried Mushrooms' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
       <Section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
             <Heading
               align="left"
               subtitle="Visual Tour"
               title="Behind The Scenes At Sahil Fram"
               description="Transparency is at our core. Take a look at our state-of-the-art facilities and daily activities."
               className="mb-0"
             />
             <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-white text-brand-green px-6 py-3 rounded-full font-bold shadow-sm border border-brand-beige hover:border-brand-accent transition-all">
                   <Instagram className="w-5 h-5 text-brand-accent" />
                   <span>Follow Us</span>
                </button>
             </div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
             {images.map((img, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-brand-beige"
               >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                     <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-accent mb-1">{img.type}</span>
                     <h4 className="text-white font-display font-medium text-xl tracking-tight">{img.title}</h4>
                     <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <Maximize2 className="w-4 h-4" />
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          {/* Social Proof Section */}
          <div className="mt-32 p-12 md:p-24 bg-brand-green rounded-[4rem] text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="grid grid-cols-6 gap-4 -rotate-12 scale-150">
                   {[...Array(24)].map((_, i) => (
                     <div key={i} className="aspect-square bg-white rounded-2xl" />
                   ))}
                </div>
             </div>
             
             <Camera className="w-16 h-16 text-brand-accent mx-auto mb-8 animate-pulse" />
             <h2 className="text-4xl md:text-6xl font-display font-medium mb-8">Capturing The <span className="serif-display text-brand-accent">Art</span> Of Farming</h2>
             <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto mb-12 leading-relaxed">
               Every day at Sahil Fram is a celebration of biology and technology working in harmony. Join us on Instagram for daily harvest updates and farm stories.
             </p>
             <button className="flex items-center space-x-3 bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-transform mx-auto">
                <Play className="w-6 h-6 fill-white" />
                <span>Watch Farm Tour Video</span>
             </button>
          </div>
       </Section>
    </div>
  );
}
