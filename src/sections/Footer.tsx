import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  ArrowUpRight,
  Heart
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const footerLinks = {
  servicios: [
    { label: 'Web Corporativa', href: '#servicios' },
    { label: 'Tienda Online', href: '#servicios' },
    { label: 'Landing Page', href: '#servicios' },
    { label: 'Portfolio', href: '#servicios' },
    { label: 'Mantenimiento', href: '#servicios' }
  ],
  empresa: [
    { label: 'Sobre mí', href: '#porque-elegirme' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Precios', href: '#precios' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ],
  legal: [
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos de servicio', href: '#' },
    { label: 'Cookies', href: '#' }
  ]
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      {/* Main Footer */}
      <div className="container-pro py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <FadeIn className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <motion.img 
                whileHover={{ rotate: 5 }}
                src="/images/logo.png" 
                alt="BagesTech" 
                width={256}
                height={64}
                loading="lazy"
                decoding="async"
                className="h-16"
              />
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              En BagesTech creamos experiencias digitales únicas. Web Design & Development con pasión por el detalle.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.a 
                href="mailto:hola@bagestech.com" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                hola@bagestech.com
              </motion.a>
              <motion.a 
                href="tel:+34123456789" 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +34 123 456 789
              </motion.a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                España (Remoto)
              </div>
            </div>
          </FadeIn>

          {/* Services */}
          <FadeIn delay={0.1}>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Servicios</h3>
            <ul className="space-y-4">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Company */}
          <FadeIn delay={0.2}>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Empresa</h3>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Legal */}
          <FadeIn delay={0.3}>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900">
        <div className="container-pro py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <FadeIn>
              <div className="text-slate-500 text-sm flex items-center gap-1">
                © 2024 BagesTech. Hecho con <Heart className="w-4 h-4 text-amber-500 fill-amber-500 mx-1" /> en España
              </div>
            </FadeIn>
            
            {/* Social Links */}
            <FadeIn delay={0.1}>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-500 hover:text-white transition-all duration-300 border border-slate-800 hover:border-transparent"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
}
