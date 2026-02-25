import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const testimonials = [
  {
    name: 'María García',
    role: 'Dueña de Tienda de Moda',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    content: 'Increíble trabajo. Mi tienda online superó todas mis expectativas. Las ventas aumentaron un 40% en el primer mes. Profesional, rápido y siempre disponible para cualquier duda.',
    rating: 5,
    project: 'Tienda Online'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'CEO de Startup Tech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content: 'La landing page que diseñó para nuestro producto SaaS tiene una tasa de conversión del 12%. El diseño es moderno, rápido y profesional. Totalmente recomendado.',
    rating: 5,
    project: 'Landing Page SaaS'
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Restaurante',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content: 'Nuestra web corporativa quedó espectacular. El sistema de reservas online nos ha facilitado mucho la gestión. Los clientes nos felicitan por la web constantemente.',
    rating: 5,
    project: 'Web Restaurante'
  },
  {
    name: 'Luis Hernández',
    role: 'Fotógrafo Profesional',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    content: 'Mi portfolio online es exactamente lo que quería. Las imágenes cargan rápido y se ven increíbles en todos los dispositivos. Ha ayudado a conseguir más clientes.',
    rating: 5,
    project: 'Portfolio Fotografía'
  },
  {
    name: 'Elena Sánchez',
    role: 'Agente Inmobiliaria',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
    content: 'La web inmobiliaria con buscador integrado ha revolucionado mi negocio. Los clientes pueden filtrar propiedades fácilmente. Excelente trabajo y soporte.',
    rating: 5,
    project: 'Web Inmobiliaria'
  },
  {
    name: 'David López',
    role: 'Fundador de Blog de Viajes',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    content: 'Mi blog de viajes tiene miles de visitas mensuales gracias al SEO optimizado. El diseño es limpio, moderno y muy fácil de gestionar. Un trabajo excepcional.',
    rating: 5,
    project: 'Blog de Viajes'
  }
];

const stats = [
  { value: '50+', label: 'Proyectos' },
  { value: '100%', label: 'Satisfacción' },
  { value: '5.0', label: 'Valoración' }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-pro bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-yellow-100 text-yellow-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Testimonios
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Lo que dicen mis clientes
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Clientes satisfechos que confiaron en mí para crear su presencia online.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 bg-white h-full">
                  <CardContent className="p-8">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Quote className="w-20 h-20 text-blue-500" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg relative z-10">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-100"
                      />
                      <div>
                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Project Tag */}
                    <div className="mt-5">
                      <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm rounded-full font-medium">
                        {testimonial.project}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Stats */}
        <FadeIn delay={0.5} className="mt-20">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
