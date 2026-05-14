import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Leaf, FlaskConical, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, Heading } from '../components/ui/LayoutShared';
import { PRODUCTS, BRAND } from '../lib/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* 1. Hero Section: Split Geometric Layout */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-brand-green/10">
        
        {/* Left Column: Copy & Actions */}
        <div className="flex-1 flex flex-col justify-center px-12 md:px-24 bg-brand-cream relative py-32">
          <div className="absolute top-0 left-0 w-48 h-48 bg-brand-accent/5 rounded-br-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm">
              Premium Organic Supply
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif leading-[1.05] text-brand-green mb-8 tracking-tight"
          >
            Cultivated for <br/> <span className="serif-display">Purity</span> & Taste.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-green/70 leading-relaxed mb-12 max-w-lg"
          >
            Experience the premium standard in local oyster mushroom farming. Sahil Fram delivers farm-to-table freshness within 24 hours of harvest to hotels, restaurants, and health-conscious homes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/wholesale"
              className="px-10 py-5 bg-brand-green text-white font-bold rounded-xl flex items-center gap-3 shadow-2xl hover:translate-y-[-4px] transition-all hover:bg-brand-accent"
            >
              Get Wholesale Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="px-10 py-5 border-2 border-brand-green text-brand-green font-bold rounded-xl hover:bg-brand-green hover:text-white transition-all"
            >
              Order Online
            </Link>
          </motion.div>

          {/* Trust Indicators Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 border-t border-brand-green/10 pt-12"
          >
            <div>
              <p className="text-4xl font-serif text-brand-green">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-green/50 font-bold mt-1">Chemical Free</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-brand-green">24h</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-green/50 font-bold mt-1">Harvest to Door</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-brand-green">FSSAI</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-green/50 font-bold mt-1">Certified Quality</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Geometric Grid */}
        <div className="flex-1 bg-brand-green relative flex flex-col min-h-[500px]">
          <div className="absolute inset-0 dot-grid" />
          
          <div className="flex-1 p-12 flex flex-col justify-center">
            {/* Main Visual: Floating Product Card */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -3, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-[#FEF9F3] p-8 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative group max-w-lg mx-auto"
            >
              <div className="w-full aspect-video bg-brand-beige rounded-2xl overflow-hidden relative">
                 <img
                    src="https://images.unsplash.com/photo-1589131497262-e6490632512a?q=80&w=800"
                    alt="Fresh Oyster Mushrooms"
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-brand-green/5">
                    <span className="text-[10px] font-bold text-brand-green tracking-tighter">BATCH #0942</span>
                 </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-green">Fresh Grey Oyster</h3>
                    <p className="text-sm text-brand-green/60 italic mt-1">Grown on high-yield sawdust</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-serif text-brand-accent">₹150</p>
                    <p className="text-[10px] text-brand-green/40 font-bold uppercase tracking-tighter">Per KG (Wholesale)</p>
                  </div>
                </div>
              </div>
              {/* Geometric Badge */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-brand-accent rounded-full flex items-center justify-center text-white text-center p-3 leading-tight rotate-12 shadow-2xl border-4 border-white transition-transform group-hover:rotate-0 duration-500">
                <span className="text-[10px] font-bold uppercase tracking-tight">Freshly Harvested Today</span>
              </div>
            </motion.div>

            {/* Bottom Row Geometric Components */}
            <div className="grid grid-cols-2 gap-6 mt-12 max-w-lg mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl flex flex-col justify-between"
              >
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">Humidity Control</span>
                <div className="flex items-end gap-3 mt-4">
                  <span className="text-4xl text-white font-light">85%</span>
                  <div className="w-full h-1.5 bg-white/20 mb-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-brand-accent p-8 rounded-3xl flex flex-col justify-between shadow-2xl"
              >
                 <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em]">Capacity / Day</span>
                 <p className="text-4xl text-white font-serif mt-4">500+ KG</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators / Partner logos */}
      <section className="bg-brand-beige py-16 px-12 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           <span className="text-xs font-bold text-brand-green/40 uppercase tracking-[0.4em]">Trusted by Leaders</span>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {['LOCAL DINER', 'GREEN CAFÉ', 'HOTEL REGAL', 'ORGANIC BASKET'].map((partner) => (
                <div key={partner} className="px-6 py-2 border border-brand-green/10 rounded-full text-brand-green/30 font-display font-black text-xl md:text-2xl tracking-tighter hover:text-brand-green/60 transition-colors">
                  {partner}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Product Showcase */}
      <Section className="bg-brand-cream py-32">
        <Heading
          subtitle="Our Harvest"
          title="Premium Organic Offerings"
          description="We take pride in our scientific cultivation process that yields mushrooms of exceptional texture, flavor, and size."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] p-8 shadow-[0_30px_60px_-15px_rgba(26,60,52,0.1)] hover:shadow-[0_50px_80px_-20px_rgba(26,60,52,0.15)] transition-all hover:-translate-y-2 border border-brand-green/5 flex flex-col h-full relative"
            >
              {/* Visual Container */}
              <div className="relative aspect-square mb-10 overflow-hidden rounded-3xl bg-brand-cream border border-brand-green/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand-green/10 text-brand-green">
                    Freshly Harvested
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-brand-green group-hover:text-brand-accent transition-colors leading-tight">
                    {product.title}
                  </h3>
                  <span className="text-2xl font-serif text-brand-accent leading-none">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-sm text-brand-green/60 italic mb-8 grow">
                  {product.description}
                </p>

                <div className="flex gap-3">
                  <Link
                    to={product.id === 'fresh-oyster' ? '/wholesale' : '/contact'}
                    className="flex-1 bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl hover:bg-brand-accent transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. Why Choose Us */}
      <Section className="bg-brand-green text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <Heading
          light
          align="left"
          subtitle="The Sahil Advantage"
          title="Precision Cultivation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              icon: Leaf,
              title: 'Hormone Free',
              desc: 'We use 100% organic substrates and purely natural stimulants for the cleanest harvest.',
            },
            {
              icon: FlaskConical,
              title: 'Lab-Grade Hygiene',
              desc: 'Our cultivation rooms are strictly temperature controlled and filtered for purity.',
            },
            {
              icon: Truck,
              title: 'Express Delivery',
              desc: 'Harvested at 5 AM, at your doorstep by 10 AM. Zero storage lag.',
            },
            {
              icon: Star,
              title: 'Premium Grading',
              desc: 'Every batch undergoes rigorous quality checks for uniformity and moisture.',
            },
            {
              icon: Users,
              title: 'B2B Solutions',
              desc: 'Consistency for restaurants, hotels, and retail chains.',
            },
            {
              icon: CheckCircle2,
              title: 'Sustainability',
              desc: 'Recycled substrate blocks into nutrient-rich organic compost.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center mb-8 shadow-xl">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Health Benefits teaser */}
      <section className="py-32 px-12 md:px-24 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-bl-full -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <img
              src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop"
              alt="Mushroom Platter"
              className="rounded-[3rem] shadow-3xl"
            />
          </motion.div>
          <div className="space-y-10">
            <Heading
              align="left"
              subtitle="Nutritional Powerhouse"
              title="Superfood For Your Daily Diet"
              className="mb-0"
            />
            <p className="text-brand-green/70 text-lg leading-relaxed">
              Oyster mushrooms are not just a gourmet delight; they are packed with essential nutrients that support a modern, healthy lifestyle.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                'High Protein content',
                'Zero Cholesterol',
                'Rich in Vitamin D',
                'Immunity boosters',
                'B-complex Vitamins',
                'Heart Healthy',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="font-bold text-brand-green">{benefit}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/health"
              className="inline-flex items-center space-x-3 text-brand-accent font-bold group text-lg"
            >
              <span>Learn About Benefits</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <Section className="bg-brand-cream border-y border-brand-beige">
        <Heading
          subtitle="Success Stories"
          title="Trusted By Experts"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { name: 'Chef Rahul M.', role: 'Executive Chef, Blue Oak', text: 'Sahil Fram provides the most consistent oyster mushrooms I have found in West Bengal. The texture and shelf life are impeccable.' },
             { name: 'Dr. Ananya S.', role: 'Nutritionist', text: 'I always recommend Sahil Fram to my clients who seek organic vegan protein sources. Their hygiene standards are truly lab-grade.' },
             { name: 'Vikram K.', role: 'Retailer', text: 'Their bulk packaging and delivery reliability make them a perfect B2B partner for our organic grocery chain.' }
           ].map((t, i) => (
             <motion.div
               key={i}
               {...fadeIn}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-3xl border border-brand-beige relative"
             >
               <Star className="w-8 h-8 text-brand-accent mb-4 fill-brand-accent/20" />
               <p className="text-brand-ink/70 italic mb-6 italic">{`"${t.text}"`}</p>
               <div>
                  <div className="font-display font-bold text-brand-green">{t.name}</div>
                  <div className="text-xs text-brand-accent uppercase tracking-widest">{t.role}</div>
               </div>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* 6. FAQ Section */}
      <Section className="bg-white">
        <Heading
          subtitle="Common Questions"
          title="Everything You Need To Know"
          description="New to oyster mushrooms? Here are the answers to the most common questions from our community."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Are your mushrooms really pesticide-free?", a: "Yes, we use a controlled lab environment and organic substrate sterilization, meaning zero pesticides or harmful chemicals are needed." },
            { q: "How long do oyster mushrooms stay fresh?", a: "When refrigerated in our breathable packaging, they stay at peak freshness for 5-7 days. We recommend consuming them within 48 hours for the best flavor." },
            { q: "Do you deliver to my area?", a: "We currently deliver within a 25km radius of our Kolkata farm for fresh orders. Dried products and spawn can be shipped nationwide." },
            { q: "Can I visit the farm?", a: "We welcome educational visits and business partners by appointment only on Saturdays." }
          ].map((item, i) => (
            <motion.div 
               key={i} 
               {...fadeIn} 
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-brand-cream rounded-3xl border border-brand-beige"
            >
               <h4 className="font-display font-bold text-brand-green text-lg mb-3 tracking-tight">{item.q}</h4>
               <p className="text-brand-ink/60 text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. CTA Footer */}
      <Section className="bg-brand-accent overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Experience the Peak of Organic Freshness Today</h2>
            <p className="text-brand-cream/80 text-xl mb-8">
              Join our growing community of chefs and health enthusiasts. Order now and get same-day delivery.
            </p>
            <div className="flex flex-wrap gap-4">
               <a href={`https://wa.me/${BRAND.whatsapp}`} className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center space-x-2">
                  <span>Order via WhatsApp</span>
                  <MessageSquare className="w-5 h-5 ml-2" />
               </a>
               <Link to="/contact" className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                  Visit the Farm
               </Link>
            </div>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
             <div className="bg-brand-green p-10 rounded-[3rem] shadow-2xl relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6 italic serif-display text-brand-accent">Fresh Harvest Update</h3>
                <div className="space-y-4">
                   <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span>Daily Harvest Volume</span>
                      <span className="font-bold">50 kg+</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span>Delivery Status</span>
                      <span className="bg-brand-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Active</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span>Area Covered</span>
                      <span className="font-bold">25km Radius</span>
                   </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                   <button className="text-brand-accent font-bold uppercase tracking-widest text-sm hover:underline">View Delivery Zone</button>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

function MessageSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
