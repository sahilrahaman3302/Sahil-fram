import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS, BRAND } from '../../lib/constants';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-12 py-4',
        isScrolled ? 'bg-white/50 backdrop-blur-md shadow-sm border-b border-brand-green/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full opacity-80" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-brand-green uppercase">
            Sahil <span className="font-light opacity-60">Fram</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-accent',
                location.pathname === link.href ? 'text-brand-accent' : 'text-brand-green'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/products"
            className="bg-brand-green text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-brand-accent transition-all shadow-lg active:scale-95"
          >
            Order Fresh
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-green p-2 hover:bg-brand-green/5 rounded-lg transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-brand-beige lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-lg font-medium py-2 border-b border-brand-beige/50',
                    location.pathname === link.href ? 'text-brand-accent' : 'text-brand-green/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-beige text-brand-green py-3 rounded-xl font-bold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {BRAND.phone}</span>
                </a>
                <Link
                  to="/wholesale"
                  className="w-full bg-brand-green text-white py-3 rounded-xl font-bold text-center"
                >
                  Get Wholesale Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
