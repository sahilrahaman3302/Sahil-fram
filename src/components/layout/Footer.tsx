import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { BRAND, NAV_LINKS, PRODUCTS } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-brand-green pt-24 pb-12 px-12 border-t border-brand-green/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full opacity-80" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">
                Sahil <span className="font-light opacity-60">Fram</span>
              </span>
            </Link>
            <p className="text-brand-green/60 leading-relaxed text-sm">
              Premium oyster mushroom cultivators dedicated to bringing fresh, organic, and highly nutritious produce from our sustainable farm to your table.
            </p>
            <div className="flex items-center space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-brand-green/10 flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green/40">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-medium hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green/40">Offerings</h4>
            <ul className="space-y-4">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link to={`/products#${product.id}`} className="text-sm font-medium hover:text-brand-accent transition-colors">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green/40">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4 text-sm font-medium">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="leading-relaxed opacity-70">{BRAND.address}</span>
              </li>
              <li className="flex items-center space-x-4 text-sm font-medium">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-brand-accent transition-colors opacity-70">{BRAND.phone}</a>
              </li>
              <li className="flex items-center space-x-4 text-sm font-medium">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-brand-accent transition-colors opacity-70">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-green/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
             <span className="flex items-center gap-2 text-[10px] font-bold text-brand-green/40 uppercase tracking-widest">
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               Dispatching: Kolkata Hub
             </span>
             <span className="flex items-center gap-2 text-[10px] font-bold text-brand-green/40 uppercase tracking-widest">
               <div className="w-2 h-2 bg-green-500 rounded-full" />
               Last Harvest: Today 05:00
             </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green/40">© {currentYear} Sahil Fram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
