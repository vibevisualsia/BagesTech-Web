import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Palette, 
  Settings,
  ArrowUpRight
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const services = [
  {
    icon: Globe,
    title: 'Páginas Web Corporativas',
    description: 'Diseños profesionales que reflejan la identidad de tu marca y generan confianza en tus clientes desde el primer clic.',
    features: ['Diseño responsive', 'SEO básico', 'Formularios de contacto', 'Hosting incluido'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    icon: ShoppingCart,
    title: 'Tiendas Online',
    description: 'E-commerce completas con pasarela de pagos, carrito de compras y gestión de inventario en tiempo real.',
    features: ['Pasarela de pagos', 'Carrito de compras', 'Gestión de productos', 'Panel de admin'],
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500/10'
  },
  {
    icon: Smartphone,
    title: 'Diseño Responsive',
    description: 'Webs que se ven perfectas en cualquier dispositivo: móvil, tablet o escritorio. Experiencia fluida garantizada.',
    features: ['Mobile-first', 'Optimizado', 'Carga rápida', 'Compatible'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Search,
    title: 'SEO Optimizado',
    description: 'Mejora tu posicionamiento en Google para que más clientes potenciales te encuentren orgánicamente.',
    features: ['Keywords research', 'Meta tags', 'Velocidad', 'Indexación'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Interfaces intuitivas y atractivas que ofrecen la mejor experiencia de usuario y maximizan conversiones.',
    features: ['Wireframes', 'Prototipos', 'User research', 'Testing'],
    color: 'from-rose-500 to-orange-500',
    bgColor: 'bg-rose-500/10'
  },
  {
    icon: Settings,
    title: 'Mantenimiento',
    description: 'Actualizaciones, seguridad y soporte técnico para mantener tu web siempre funcionando al 100%.',
    features: ['Backups', 'Seguridad', 'Actualizaciones', 'Soporte 24/7'],
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="section-pro bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl" />
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Servicios
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              ¿Qué puedo hacer por ti?
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ofrezco soluciones web completas adaptadas a tus necesidades y presupuesto.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full bg-white">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-slate-500"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Link */}
                    <motion.div 
                      className="flex items-center text-blue-600 font-semibold text-sm cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Más información</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.div>
                  </CardContent>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Corner Decoration */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
