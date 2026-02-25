import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle, Heart } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const footerLinks = {
  navegacion: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Casos', href: '#portfolio' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ],
  legal: [
    { label: 'Politica de privacidad', href: 'mailto:hola@bagestech.com?subject=Politica%20de%20privacidad' },
    { label: 'Terminos de servicio', href: 'mailto:hola@bagestech.com?subject=Terminos%20de%20servicio' },
    { label: 'Cookies', href: 'mailto:hola@bagestech.com?subject=Cookies' }
  ]
};

const contactActions = [
  { icon: Mail, label: 'Email', href: 'mailto:hola@bagestech.com', text: 'hola@bagestech.com' },
  { icon: Phone, label: 'Telefono', href: 'tel:+34123456789', text: '+34 123 456 789' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/34123456789?text=Hola%20BagesTech%2C%20quiero%20informacion%20para%20mi%20web.',
    text: 'Escribir por WhatsApp'
  }
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="container-pro py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              BagesTech crea webs orientadas a conversion para empresas que quieren captar mas clientes con una presencia digital premium.
            </p>

            <div className="space-y-4">
              {contactActions.map((action) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <action.icon className="w-5 h-5" aria-hidden="true" />
                  {action.text}
                </motion.a>
              ))}
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                Espana (servicio remoto)
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Navegacion</h3>
            <ul className="space-y-4">
              {footerLinks.navegacion.map((link) => (
                <li key={link.label}>
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

          <FadeIn delay={0.2}>
            <h3 className="text-lg font-bold mb-6 text-amber-400">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
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

      <div className="border-t border-slate-900">
        <div className="container-pro py-8">
          <FadeIn>
            <div className="text-slate-500 text-sm flex items-center justify-center gap-1">
              © {new Date().getFullYear()} BagesTech. Hecho con <Heart className="w-4 h-4 text-amber-500 fill-amber-500 mx-1" /> en Espana.
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
