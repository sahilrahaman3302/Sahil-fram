import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Heart, Zap, Shield, Brain, ChefHat, Info, BarChart3, Pill } from 'lucide-react';

export default function HealthBenefits() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Editorial Header */}
      <section className="bg-brand-cream py-32 px-6 border-b border-brand-beige overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black opacity-[0.03] pointer-events-none select-none">
          SUPERFOOD
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 flex justify-center">
            <span className="bg-brand-accent/10 text-brand-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em]">Science & Nutrition</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-8xl font-display font-medium text-brand-green mb-8 leading-none"
          >
            The <span className="serif-display italic text-brand-accent">Silent Power</span> of Oyster Mushrooms
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-ink/60 leading-relaxed max-w-3xl mx-auto"
          >
            Beyond their culinary versatility, oyster mushrooms (Pleurotus ostreatus) host a complex matrix of bioactive compounds designed by nature to boost immunity and longevity.
          </motion.p>
        </div>
      </section>

      {/* Core Nutrients Grid */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: 'Beta-Glucans', desc: 'Powerful fiber compounds known for lowering bad cholesterol (LDL) and improving heart health.' },
            { icon: Zap, title: 'Antioxidants', desc: 'High levels of ergothioneine which protects cells from metabolic stress and aging.' },
            { icon: Shield, title: 'Immune Support', desc: 'Rich in polysaccharides that activate white blood cells and natural killer (NK) cells.' },
            { icon: Pill, title: 'Vitamin Complex', desc: 'Natural source of Vitamin D, B3 (Niacin), B5, and crucial minerals like Zinc and Iron.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-brand-cream border border-brand-beige flex flex-col items-center text-center group hover:bg-brand-green hover:text-white transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-accent transition-colors">
                 <item.icon className="w-8 h-8 text-brand-green group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Cooking & Flavor Section */}
      <Section className="bg-brand-green text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10">
              <Heading
                light
                align="left"
                subtitle="In The Kitchen"
                title="Gourmet Flavor Meets Holistic Health"
                description="Oyster mushrooms have a peculiar 'umami' depth and a velvety texture that absorbs flavors beautifully, making them a perfect meat substitute."
                className="mb-0"
              />
              <div className="space-y-8">
                 <div className="flex space-x-6">
                    <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center shrink-0">
                       <ChefHat className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <h4 className="text-xl font-display font-bold mb-2 tracking-tight">Texture Perfection</h4>
                       <p className="text-brand-cream/60 leading-relaxed text-sm">When sautéed correctly, the edges crisp up while the center remains tender, mimicking the experience of finely cut poultry or seafood.</p>
                    </div>
                 </div>
                 <div className="flex space-x-6">
                    <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center shrink-0">
                       <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                       <h4 className="text-xl font-display font-bold mb-2 tracking-tight">Nutrient Retention</h4>
                       <p className="text-brand-cream/60 leading-relaxed text-sm">Oyster mushrooms retain most of their vitamin content even after high-heat cooking compared to other vegetables.</p>
                    </div>
                 </div>
              </div>
              <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                 Download Recipe E-Book
              </button>
           </div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
              <img 
                src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop" 
                className="rounded-[4rem] shadow-2xl relative z-10"
                alt="Healthy Mushroom Dish"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent rounded-full blur-[80px] opacity-30" />
           </motion.div>
        </div>
      </Section>

      {/* Comparison Chart */}
      <Section className="bg-white">
         <div className="max-w-4xl mx-auto">
            <Heading
               title="Nutritional Scorecard"
               subtitle="The Vegan Edge"
               description="How Sahil Fram mushrooms compare to common protein sources (per 100g serving)."
            />
            
            <div className="space-y-8 bg-brand-cream p-10 md:p-16 rounded-[4rem] border border-brand-beige">
               {[
                 { label: 'High Protein Content', val: 85, color: 'bg-brand-green', labelVal: '3-4g' },
                 { label: 'Low Glycemic Index', val: 95, color: 'bg-brand-green', labelVal: 'Very Low' },
                 { label: 'Dietary Fiber', val: 70, color: 'bg-brand-green', labelVal: 'High' },
                 { label: 'Cholesterol Content', val: 0, color: 'bg-brand-accent', labelVal: 'Zero' },
                 { label: 'Vitamin D Boost', val: 90, color: 'bg-brand-green', labelVal: 'High' },
               ].map((stat, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-brand-green/60">
                       <span>{stat.label}</span>
                       <span className="text-brand-accent">{stat.labelVal}</span>
                    </div>
                    <div className="h-4 bg-white rounded-full overflow-hidden border border-brand-beige">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${stat.val}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: i * 0.1 }}
                         className={`h-full ${stat.color} rounded-full`} 
                       />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </Section>

      {/* FAQ / Science CTA */}
      <Section className="bg-brand-cream">
         <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto text-brand-accent mb-6">
               <Brain className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-green">Backed By Modern Agro-Science</h2>
            <p className="text-brand-ink/60 text-lg">We continuously study the medicinal profiles of our crops to optimize mineral absorption during fruiting.</p>
            <button className="flex items-center space-x-2 border-b-2 border-brand-accent pb-2 text-brand-accent font-bold mx-auto group">
               <span>Read Scientific Papers</span>
               <BarChart3 className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
            </button>
         </div>
      </Section>
    </div>
  );
}
