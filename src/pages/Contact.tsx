import { motion } from 'motion/react';
import { Section, Heading } from '../components/ui/LayoutShared';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Globe, Instagram, Facebook } from 'lucide-react';
import { BRAND } from '../lib/constants';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Intro */}
      <section className="bg-brand-green py-24 px-6 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">Let's <span className="serif-display text-brand-accent">Connect</span></h1>
          <p className="text-brand-cream/70 max-w-2xl mx-auto text-lg md:text-xl">
             Whether you're a home chef, a restaurant owner, or a mushroom enthusiast, we'd love to hear from you. Farm visits by appointment.
          </p>
        </motion.div>
      </section>

      <Section className="bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
             <div className="bg-white p-8 rounded-3xl border border-brand-beige shadow-sm hover:shadow-xl transition-all h-full">
                <Heading align="left" subtitle="Reach Us" title="Direct Contact" className="mb-8" />
                <div className="space-y-8">
                   <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0 text-brand-accent">
                         <Phone className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs uppercase font-black text-brand-green/40 tracking-widest mb-1">Call / WhatsApp</div>
                         <div className="font-bold text-brand-green text-lg tracking-tight">{BRAND.phone}</div>
                      </div>
                   </div>
                   <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0 text-brand-accent">
                         <Mail className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs uppercase font-black text-brand-green/40 tracking-widest mb-1">Email Inquiry</div>
                         <div className="font-bold text-brand-green text-lg tracking-tight">{BRAND.email}</div>
                      </div>
                   </div>
                   <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0 text-brand-accent">
                         <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs uppercase font-black text-brand-green/40 tracking-widest mb-1">Farm Address</div>
                         <div className="font-bold text-brand-green text-lg tracking-tight leading-snug">{BRAND.address}</div>
                      </div>
                   </div>
                   <div className="pt-8 border-t border-brand-beige">
                      <div className="text-xs uppercase font-black text-brand-green/40 tracking-widest mb-4">Social Media</div>
                      <div className="flex space-x-4">
                         {[Instagram, Facebook, Globe].map((Icon, i) => (
                           <a key={i} href="#" className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-accent hover:rotate-12 transition-all">
                              <Icon className="w-4 h-4" />
                           </a>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-6">
             <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-brand-beige shadow-xl">
                <Heading align="left" title="Send a Quick Message" subtitle="Direct Inquiry" className="mb-10" />
                <form className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs uppercase font-bold text-brand-green px-1 tracking-widest">Full Name</label>
                         <input type="text" className="w-full bg-brand-cream border border-brand-beige rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all font-medium" placeholder="E.g. Sahil Rahaman" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs uppercase font-bold text-brand-green px-1 tracking-widest">Phone Number</label>
                         <input type="tel" className="w-full bg-brand-cream border border-brand-beige rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all font-medium" placeholder="+91 ..." />
                      </div>
                   </div>
                   <div className="space-y-2">
                       <label className="text-xs uppercase font-bold text-brand-green px-1 tracking-widest">Subject</label>
                       <select className="w-full bg-brand-cream border border-brand-beige rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all font-medium">
                          <option>General Inquiry</option>
                          <option>Wholesale Order</option>
                          <option>Farm Visit Request</option>
                          <option>Other</option>
                       </select>
                   </div>
                   <div className="space-y-2">
                       <label className="text-xs uppercase font-bold text-brand-green px-1 tracking-widest">Message Body</label>
                       <textarea rows={6} className="w-full bg-brand-cream border border-brand-beige rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all font-medium resize-none" placeholder="How can we help you?"></textarea>
                   </div>
                   <button className="w-full bg-brand-green text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg shadow-xl hover:bg-brand-green/95 transition-all">
                      <span>Dispatch Message</span>
                      <Send className="w-5 h-5 ml-2" />
                   </button>
                </form>
             </div>
          </div>
        </div>
      </Section>

      {/* Map Embed Placeholder */}
      <section className="h-[500px] w-full grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-1000 relative">
          <div className="w-full h-full bg-brand-beige flex items-center justify-center">
             {/* This would be an iframe for Google Maps */}
             <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-brand-accent mx-auto animate-bounce" />
                <h3 className="text-2xl font-display font-medium text-brand-green tracking-tight">Farm Location in Kolkata</h3>
                <p className="text-brand-ink/40 font-bold uppercase tracking-widest text-xs">Map Overlay Active</p>
             </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center">
             <div className="bg-white/80 backdrop-blur-md px-10 py-5 rounded-full shadow-2xl border border-white/20 flex items-center space-x-6 text-sm font-bold text-brand-green">
                <div className="flex items-center space-x-2">
                   <Clock className="w-4 h-4 text-brand-accent" />
                   <span>Visits: 10AM - 5PM (Sat Only)</span>
                </div>
                <div className="w-px h-4 bg-brand-green/20" />
                <div className="flex items-center space-x-2">
                   <MessageSquare className="w-4 h-4 text-brand-accent" />
                   <span>WhatsApp Response: Instant</span>
                </div>
             </div>
          </div>
      </section>
    </div>
  );
}
