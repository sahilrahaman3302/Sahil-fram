import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { PRODUCTS } from '../lib/constants';
import { Filter, ShoppingCart, MessageCircle, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Products() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Fresh', 'Pantry', 'Grow'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
      {/* Page Header */}
      <div className="bg-brand-green py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-medium text-white mb-4"
        >
          Our <span className="serif-display text-brand-accent">Exquisite</span> Harvest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-brand-cream/70 max-w-2xl mx-auto text-lg"
        >
          Discover our range of premium oyster mushrooms and professional cultivation supplies, grown with passion and precision.
        </motion.p>
      </div>

      <Section>
        {/* Filtering */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
           <Filter className="w-5 h-5 text-brand-green mr-2" />
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={cn(
                 "px-6 py-2 rounded-full font-bold text-sm transition-all",
                 filter === cat 
                   ? "bg-brand-green text-white shadow-lg" 
                   : "bg-white text-brand-green border border-brand-beige hover:border-brand-accent"
               )}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-beige hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-brand-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {product.category}
                    </span>
                    {product.id === 'fresh-oyster' && (
                       <span className="bg-brand-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Best Seller
                       </span>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display font-bold text-brand-green">{product.title}</h3>
                    <span className="text-lg font-display font-bold text-brand-accent">{product.price}</span>
                  </div>
                  <p className="text-brand-ink/60 text-sm leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center space-x-2 bg-brand-green text-white py-3 rounded-xl font-bold hover:bg-brand-green/90 transition-colors">
                       <MessageCircle className="w-4 h-4" />
                       <span className="text-sm">Inquire</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 border border-brand-beige text-brand-green py-3 rounded-xl font-bold hover:bg-brand-beige transition-colors">
                       <Info className="w-4 h-4" />
                       <span className="text-sm">Details</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* B2B Promo Banner */}
        <div className="mt-24 p-10 md:p-16 bg-brand-beige rounded-[3rem] text-center max-w-5xl mx-auto relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShoppingCart className="w-40 h-40" />
           </div>
           <Heading
             subtitle="For Businesses"
             title="Looking for Bulk Supply?"
             description="We offer customized supply chains for restaurants, hotels, and retail marketplaces with dedicated logistics and bulk discounts."
             className="mb-8"
           />
           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="w-full md:w-auto bg-brand-green text-white px-8 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all">
                Download B2B Brochure
              </button>
              <button className="w-full md:w-auto bg-white text-brand-green border border-brand-green/20 px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all">
                Partner With Us
              </button>
           </div>
        </div>
      </Section>
    </div>
  );
}
