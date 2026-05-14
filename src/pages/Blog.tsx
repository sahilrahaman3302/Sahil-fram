import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: '5 Reasons Why Oyster Mushrooms Are The Ultimate Vegan Protein',
      excerpt: 'Discover why professional athletes and health enthusiasts are switching to oyster mushrooms for their clean protein needs.',
      date: 'May 10, 2026',
      author: 'Sahil Rahaman',
      category: 'Nutrition',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800',
    },
    {
      id: 2,
      title: 'The Art of Sautéing: A Chef’s Guide to Perfect Mushroom Texture',
      excerpt: 'Master the technique of getting that golden-brown crust without losing the velvety tenderness of fresh oyster mushrooms.',
      date: 'May 05, 2026',
      author: 'Chef Rahul M.',
      category: 'Recipes',
      image: 'https://images.unsplash.com/photo-1632778149975-400e60ccd29b?q=80&w=800',
    },
    {
      id: 3,
      title: 'Sustainable Substrates: How We Turn Farm Waste Into Superfood',
      excerpt: 'A deep dive into our eco-friendly cultivation process and why substrate quality determines the nutritional value of your meal.',
      date: 'Apr 28, 2026',
      author: 'Agro-Scientist Team',
      category: 'Farming',
      image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=800',
    },
    {
       id: 4,
       title: 'Growing at Home: A Beginner’s Guide to Using Mushroom Spawn',
       excerpt: 'Want to start your own little mushroom patch? Here is everything you need to know about setting up your first fruiting chamber.',
       date: 'Apr 20, 2026',
       author: 'Technical Team',
       category: 'Tutorial',
       image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=800',
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-cream">
       <Section>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
             <div className="lg:w-2/3">
                <Heading
                   align="left"
                   subtitle="Sahil Journal"
                   title="Mushroom Wisdom & Farm Updates"
                   description="Explore our latest articles on nutrition, sustainable agriculture, gourmet recipes, and industry news."
                   className="mb-0"
                />
             </div>
             <div className="lg:w-1/3 flex items-center bg-white border border-brand-beige rounded-2xl px-6 py-4 shadow-sm w-full">
                <Search className="w-5 h-5 text-brand-green/40 mr-4" />
                <input type="text" placeholder="Search articles..." className="bg-transparent border-none focus:outline-none w-full font-medium" />
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Featured Post */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-8 group relative rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-brand-beige"
             >
                <div className="grid grid-cols-1 md:grid-cols-2">
                   <div className="h-[400px] md:h-full overflow-hidden">
                      <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                   </div>
                   <div className="p-10 md:p-16 flex flex-col justify-center">
                      <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">{posts[0].category}</span>
                      <h2 className="text-3xl md:text-4xl font-display font-medium text-brand-green mb-6 leading-tight group-hover:text-brand-accent transition-colors tracking-tight">
                         {posts[0].title}
                      </h2>
                      <p className="text-brand-ink/60 mb-8 leading-relaxed">
                         {posts[0].excerpt}
                      </p>
                      <div className="flex items-center space-x-6 text-xs text-brand-green/40 font-bold uppercase tracking-widest mb-10">
                         <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{posts[0].date}</span>
                         </div>
                         <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>By {posts[0].author}</span>
                         </div>
                      </div>
                      <Link to={`/blog/${posts[0].id}`} className="inline-flex items-center space-x-2 bg-brand-green text-white px-8 py-4 rounded-full font-bold self-start shadow-xl">
                         <span>Read Full Article</span>
                         <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </div>
             </motion.div>

             {/* Newsletter Sidebar */}
             <div className="lg:col-span-4 bg-brand-green p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center">
                <BookOpen className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Weekly Harvest Rundown</h3>
                <p className="text-brand-cream/60 mb-8 max-w-xs text-sm leading-relaxed">
                  Join 1,200+ foodies and get our best recipes, health hacks, and stock updates delivered every Monday.
                </p>
                <form className="w-full space-y-3">
                   <input type="email" placeholder="Your best email..." className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-white placeholder-white/40 font-medium" />
                   <button className="w-full bg-brand-accent text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-brand-accent/90 transition-all">
                      Subscribe Free
                   </button>
                </form>
                <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-6">Zero spam. Pure value.</p>
             </div>
          </div>

          {/* Grid Layout Posts */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
             {posts.slice(1).map((post, i) => (
               <motion.div
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group bg-white rounded-[2.5rem] overflow-hidden border border-brand-beige hover:shadow-xl transition-all duration-500"
               >
                  <div className="h-60 overflow-hidden relative">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-6 left-6 bg-brand-green text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">{post.category}</div>
                  </div>
                  <div className="p-10">
                     <h3 className="text-2xl font-display font-bold text-brand-green mb-4 leading-tight group-hover:text-brand-accent transition-colors line-clamp-2">
                        {post.title}
                     </h3>
                     <p className="text-brand-ink/60 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                     </p>
                     <Link to={`/blog/${post.id}`} className="flex items-center space-x-2 text-brand-accent font-bold group">
                        <span>Keep Reading</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </motion.div>
             ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex justify-center space-x-4">
             <button className="w-12 h-12 rounded-full border border-brand-beige bg-white flex items-center justify-center font-bold text-brand-green hover:border-brand-accent transition-all">1</button>
             <button className="w-12 h-12 rounded-full border border-brand-beige flex items-center justify-center font-bold text-brand-green hover:bg-brand-beige transition-all">2</button>
             <button className="w-12 h-12 rounded-full border border-brand-beige flex items-center justify-center font-bold text-brand-green hover:bg-brand-beige transition-all">3</button>
          </div>
       </Section>
    </div>
  );
}
