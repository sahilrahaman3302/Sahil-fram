import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Leaf, Award, Users, Search, Target, Heart, Scale } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Editorial Story Header */}
      <section className="bg-brand-green py-32 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
           <div className="lg:col-span-7 space-y-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex">
                 <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Est. 2022</span>
              </motion.div>
              <h1 className="text-5xl md:text-8xl font-display font-medium leading-[0.95] tracking-tight">
                 Cultivating <span className="serif-display text-brand-accent italic">Nature's</span> Purest Gift
              </h1>
              <p className="text-xl text-brand-cream/70 leading-relaxed max-w-2xl">
                 Sahil Fram was born out of a simple realization: the gap between organic science and local farming needed to be bridged. We are a family-led agritech initiative focused on the laboratory-standard cultivation of gourmet mushrooms.
              </p>
           </div>
           <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-[4/5] bg-brand-beige rounded-[4rem] overflow-hidden relative shadow-2xl"
              >
                  <img src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1200" className="w-full h-full object-cover" alt="Founder Portrait Placeholder" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <div className="font-display font-bold text-2xl tracking-tight">Sahil Rahaman</div>
                    <div className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">Founder & Lead Cultivator</div>
                  </div>
              </motion.div>
              {/* Floating Stat */}
              <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl text-brand-green border border-brand-beige hidden md:block">
                 <div className="text-4xl font-display font-bold text-brand-accent">15+</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-brand-green/40">Lab Certified Strains</div>
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Section className="bg-brand-cream">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To provide high-quality organic protein sources to the local community while pioneering zero-waste farming.' },
              { icon: Search, title: 'Our Vision', desc: 'To become the regional hallmark for premium gourmet mushrooms and smart agriculture in West Bengal.' },
              { icon: Scale, title: 'Integrity', desc: 'We never use synthetic chemicals or steroids. Every flush is tested for purity before it leaves the farm.' },
              { icon: Heart, title: 'Local Impact', desc: 'Empowering local laborers and vegetable sellers with sustainable knowledge and organic compost.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[3rem] border border-brand-beige group hover:bg-brand-accent hover:text-white transition-all duration-500"
              >
                 <div className="w-14 h-14 bg-brand-green/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                    <item.icon className="w-6 h-6 text-brand-accent" />
                 </div>
                 <h4 className="text-xl font-display font-bold mb-4 tracking-tight">{item.title}</h4>
                 <p className="text-sm leading-relaxed opacity-70 italic">{item.desc}</p>
              </motion.div>
            ))}
         </div>
      </Section>

      {/* Farm Stats / Timeline placeholder */}
      <Section className="bg-white">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <Heading
                  align="left"
                  subtitle="The Evolution"
                  title="A Timeline of Steady Growth"
                  className="mb-0"
               />
               <div className="space-y-12">
                  {[
                    { year: '2022', title: 'The First Spore', desc: 'Started with a small 200 sq.ft experimental grow room in Kolkata.' },
                    { year: '2023', title: 'Lab Certification', desc: 'Established our in-house tissue culture lab and sterile spawning unit.' },
                    { year: '2024', title: 'B2B Launch', desc: 'Partnered with our first 10 luxury restaurants and organic grocers.' },
                    { year: '2025', title: 'Sustainability Milestone', desc: 'Achieved 100% recycling of substrate blocks into nutrient-dense compost.' },
                  ].map((event, i) => (
                    <div key={i} className="flex space-x-8 relative group">
                       <span className="text-2xl font-display font-black text-brand-accent/20 group-hover:text-brand-accent transition-colors">{event.year}</span>
                       <div>
                          <h4 className="text-lg font-bold text-brand-green mb-2 uppercase tracking-tight">{event.title}</h4>
                          <p className="text-brand-ink/60 text-sm leading-relaxed">{event.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="aspect-square bg-brand-beige rounded-[4rem] p-12 flex flex-col justify-center text-center space-y-4">
                  <Leaf className="w-12 h-12 text-brand-accent mx-auto" />
                  <div className="text-5xl font-display font-bold text-brand-green tracking-tighter">1.2k+</div>
                  <div className="text-xs font-black uppercase tracking-widest text-brand-green/40 leading-relaxed">Happy & Healthy Home Cooks</div>
               </div>
               <div className="mt-12 aspect-square bg-brand-green rounded-[4rem] p-12 flex flex-col justify-center text-center space-y-4 text-white">
                  <Award className="w-12 h-12 text-brand-accent mx-auto" />
                  <div className="text-5xl font-display font-bold tracking-tighter">100%</div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/40 leading-relaxed">Organic & Pesticide Free</div>
               </div>
            </div>
         </div>
      </Section>

      {/* Sustainable Section */}
      <Section className="bg-brand-beige">
         <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-10">
               <Users className="w-16 h-16 text-brand-green mx-auto" />
               <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-green max-w-2xl mx-auto leading-tight">Join Our Journey Toward A <span className="serif-display text-brand-accent">Greener</span> Future</h2>
               <p className="text-lg text-brand-ink/60">We are always looking for passionate collaborators, agro-scientists, and local partners. Let's build a sustainable food system together.</p>
               <div className="flex justify-center gap-4">
                  <button className="bg-brand-green text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">Visit The Farm</button>
                  <button className="border border-brand-green/20 text-brand-green px-10 py-5 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all">Work With Us</button>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
}
