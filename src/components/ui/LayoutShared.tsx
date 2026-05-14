import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface HeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function Heading({ title, subtitle, description, className, align = 'center', light = false }: HeadingProps) {
  return (
    <div className={cn(
      'mb-12 space-y-4',
      align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left',
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
            light ? "bg-white/20 text-brand-cream" : "bg-brand-accent/10 text-brand-accent"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-6xl font-serif leading-tight",
          light ? "text-white" : "text-brand-green"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-brand-cream/70" : "text-brand-ink/60"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

export function Section({ children, className, id, container = true }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding relative overflow-hidden", className)}>
      {container ? (
        <div className="max-w-7xl mx-auto relative z-10">
          {children}
        </div>
      ) : children}
    </section>
  );
}
