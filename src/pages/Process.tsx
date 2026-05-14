import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Beaker, Thermometer, Wind, Droplets, Sun, Scissors, PackageSearch, Truck } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Process() {
  const steps = [
    {
      icon: Beaker,
      title: 'Substrate Preparation',
      desc: 'We use premium agricultural waste (like paddy straw or wood chips), steam-pasteurized to create a sterile, nutrient-rich base.',
      color: 'bg-indigo-500',
    },
    {
       icon: Beaker,
       title: 'Sterilization',
       desc: 'Using industrial-grade steamers, we eliminate all potential competitors (other fungi or bacteria) to ensure pure oyster mushroom growth.',
       color: 'bg-red-500',
    },
    {
      icon: Droplets,
      title: 'Spawning',
      desc: 'High-quality lab-certified spawn is mixed into the substrate under strict laminar flow conditions to maintain 100% purity.',
      color: 'bg-blue-500',
    },
    {
      icon: Wind,
      title: 'Incubation',
      desc: 'The bags are kept in dark, climate-controlled rooms where the mycelium colonizes the substrate over 15-20 days.',
      color: 'bg-amber-500',
    },
    {
      icon: Sun,
      title: 'Fruiting',
      desc: 'Bags are moved to the cropping room with high humidity (80-90%) and fresh air circulation to trigger pinhead formation.',
      color: 'bg-orange-500',
    },
    {
      icon: Scissors,
      title: 'Precise Harvesting',
      desc: 'Mushrooms are hand-picked at the exact moment the cap edges flatten, ensuring maximum shelf life and flavor.',
      color: 'bg-emerald-500',
    },
    {
      icon: PackageSearch,
      title: 'Grading & Packaging',
      desc: 'Each harvest is sorted by size and quality. We pack in breathable, eco-friendly containers to maintain freshness.',
      color: 'bg-sky-500',
    },
    {
      icon: Truck,
      title: 'Rapid Delivery',
      desc: 'Dispatched within 2 hours of harvest. Our own delivery team ensures the mushrooms reach you in pristine condition.',
      color: 'bg-violet-500',
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Top Banner */}
      <section className="bg-brand-green py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 text-white">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 flex">
              <span className="bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Farm Transparency</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-medium leading-none mb-8">
              The <span className="serif-display italic text-brand-accent">Journey</span> of a Sahil Mushroom
            </h1>
            <p className="text-xl text-brand-cream/70 leading-relaxed max-w-xl">
              From microscopic spores to your dinner plate—we follow a rigorous, scientific cultivation cycle that guarantees quality, safety, and taste.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <Thermometer className="w-10 h-10 text-brand-accent mb-4" />
                <div className="text-3xl font-display font-bold">22-25°C</div>
                <div className="text-xs uppercase tracking-widest text-brand-cream/60">Incubation Temp</div>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <Droplets className="w-10 h-10 text-brand-accent mb-4" />
                <div className="text-3xl font-display font-bold">85-90%</div>
                <div className="text-xs uppercase tracking-widest text-brand-cream/60">Humidity Target</div>
             </div>
          </div>
        </div>
        {/* Abstract background graphics */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Timeline Section */}
      <Section className="bg-brand-cream">
        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-green/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12 md:space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 md:gap-24",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                 {/* Content */}
                 <div className="flex-1 w-full bg-white p-10 rounded-[3rem] shadow-sm border border-brand-beige hover:shadow-xl transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                       <span className="text-4xl font-display font-black text-brand-beige">{String(i + 1).padStart(2, '0')}</span>
                       <h3 className="text-2xl font-display font-bold text-brand-green tracking-tight">{step.title}</h3>
                    </div>
                    <p className="text-brand-ink/60 leading-relaxed">{step.desc}</p>
                 </div>

                 {/* Center Icon Circle */}
                 <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-brand-green/20 rounded-full flex items-center justify-center z-20 shadow-lg text-brand-green">
                    <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                 </div>

                 {/* Visual Empty Space */}
                 <div className="flex-1 hidden md:block">
                    <div className="p-8 group text-center">
                       <div className={cn("w-full h-1/2 absolute top-1/2 border-t-2 border-dashed border-brand-beige", i % 2 === 0 ? "left-12" : "right-12")} />
                       <div className="bg-brand-beige/5 w-64 h-40 mx-auto rounded-[3rem] flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                         <step.icon className="w-16 h-16 text-brand-green/20" />
                       </div>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sustainable Section */}
      <Section className="bg-brand-green text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
           <Heading
             light
             subtitle="Circular Economy"
             title="Zero Waste Agriculture"
             description="At Sahil Fram, nothing goes to waste. After harvesting, our spent mushroom substrate (SMS) is repurposed into high-quality organic fertilizer for local vegetable farmers."
           />
           <button className="inline-flex items-center space-x-4 text-brand-accent font-bold text-xl group">
              <span className="border-b-2 border-brand-accent pb-1">Our Sustainability Report</span>
              <Beaker className="w-6 h-6 group-hover:rotate-12 transition-transform" />
           </button>
        </div>
      </Section>
    </div>
  );
}
