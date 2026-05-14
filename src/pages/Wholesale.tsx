import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Truck, ShieldCheck, Clock, BadgeCent, FileText, Send } from 'lucide-react';

export default function Wholesale() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Split Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-brand-green p-12 md:p-24 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-brand-accent text-xs font-bold uppercase tracking-widest mb-8"
          >
            B2B & Partnerships
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium leading-[1.1] mb-8"
          >
            Reliable <span className="serif-display text-brand-accent">Supply Chain</span> Solutions for Industry Leaders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-cream/70 text-lg mb-10 max-w-xl"
          >
            Empower your restaurant, hotel, or retail chain with premium, organic oyster mushrooms. We offer scalable distribution models with zero lag.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold shadow-xl">
              Get Wholesale Price List
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
              Schedule Farm Visit
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Wholesale Supply"
          />
          <div className="absolute inset-0 bg-brand-green/20" />
        </div>
      </div>

      {/* Advantage Grid */}
      <Section className="bg-brand-cream">
        <Heading
          subtitle="The Sahil B2B Standard"
          title="Why Leading Businesses Trust Us"
          description="We understand the demands of a high-pressure commercial kitchen and the quality expectations of retail consumers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Clock, title: 'Priority Delivery', desc: 'Pre-noon deliveries for morning prep cycles across the city.' },
            { icon: ShieldCheck, title: 'Quality Audits', desc: 'Every crate is inspected for uniformity in cap size and stalk length.' },
            { icon: BadgeCent, title: 'Custom Pricing', desc: 'Tiered wholesale rates based on your monthly volume requirements.' },
            { icon: Truck, title: 'Direct Logistics', desc: 'Own cold-chain logistics to maintain temperature throughout transit.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-brand-beige"
            >
              <div className="w-12 h-12 bg-brand-green/5 rounded-xl flex items-center justify-center mb-6 text-brand-accent">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-display font-bold text-brand-green mb-3">{item.title}</h4>
              <p className="text-brand-ink/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Inquiry Form Section */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Heading
              align="left"
              subtitle="Partnership Inquiry"
              title="Let's Grow Your Business Together"
              description="Fill out the form below and our B2B representative will get back to you with a customized quotation within 4 business hours."
              className="mb-8"
            />
            <div className="space-y-6">
              {[
                { label: 'Volume Supply', desc: 'Scaled production to meet peaks.' },
                { label: 'Flexible Billing', desc: 'Net-15/30 terms available for vetted partners.' },
                { label: 'Custom Packaging', desc: 'Own-branding options for retail chains.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-brand-accent rounded-full mt-2" />
                  <div>
                    <div className="font-bold text-brand-green">{item.label}</div>
                    <div className="text-sm text-brand-ink/60">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-cream p-10 rounded-[3rem] border border-brand-beige shadow-xl">
             <form className="space-y-5">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-brand-green/60 px-2 tracking-widest">Company Name</label>
                    <input type="text" className="w-full bg-white border border-brand-beige rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all" placeholder="E.g. Green Bistro" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase font-bold text-brand-green/60 px-2 tracking-widest">Business Type</label>
                    <select className="w-full bg-white border border-brand-beige rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all">
                      <option>Restaurant</option>
                      <option>Hotel / Resort</option>
                      <option>Retailer</option>
                      <option>Other</option>
                    </select>
                  </div>
               </div>
               <div className="space-y-1">
                 <label className="text-xs uppercase font-bold text-brand-green/60 px-2 tracking-widest">Monthly Requirement (KG)</label>
                 <input type="number" className="w-full bg-white border border-brand-beige rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all" placeholder="E.g. 50" />
               </div>
               <div className="space-y-1">
                 <label className="text-xs uppercase font-bold text-brand-green/60 px-2 tracking-widest">Email Address</label>
                 <input type="email" className="w-full bg-white border border-brand-beige rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all" placeholder="business@example.com" />
               </div>
               <div className="space-y-1">
                 <label className="text-xs uppercase font-bold text-brand-green/60 px-2 tracking-widest">Message / Notes</label>
                 <textarea rows={4} className="w-full bg-white border border-brand-beige rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all" placeholder="Any specific requirements..."></textarea>
               </div>
               <button className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all">
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
               </button>
               <p className="text-[10px] text-center text-brand-ink/40 uppercase tracking-widest font-bold pt-2">
                 * You will also be sent our digital brochure
               </p>
             </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
