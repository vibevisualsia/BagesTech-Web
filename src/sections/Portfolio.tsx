import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye, TrendingUp, Users } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const projects = [
  {
    title: 'Tienda de Moda Online',
    category: 'E-commerce',
    description: 'Tienda completa con pasarela de pagos, carrito y gestión de inventario en tiempo real.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'Stripe'],
    stats: { visits: '10K+', conversion: '3.5%' },
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Corporativa Restaurante',
    category: 'Web Corporativa',
    description: 'Diseño elegante con menú interactivo, sistema de reservas y galería de fotos.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Tailwind', 'CMS'],
    stats: { visits: '5K+', conversion: '8%' },
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Landing Page SaaS',
    category: 'Landing Page',
    description: 'Página de conversión optimizada con animaciones fluidas y formularios inteligentes.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Framer Motion', 'Vercel'],
    stats: { visits: '25K+', conversion: '12%' },
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Portfolio Fotógrafo',
    category: 'Portfolio',
    description: 'Galería visual impactante con carga optimizada de imágenes y transiciones suaves.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
    tags: ['Gatsby', 'GraphQL', 'Cloudinary'],
    stats: { visits: '3K+', conversion: '15%' },
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Web Inmobiliaria',
    category: 'Web Corporativa',
    description: 'Buscador de propiedades con filtros avanzados y mapa integrado interactivo.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'Maps API'],
    stats: { visits: '8K+', conversion: '5%' },
    color: 'from-indigo-500 to-violet-500'
  },
  {
    title: 'Blog de Viajes',
    category: 'Blog',
    description: 'Blog optimizado para SEO con categorías, búsqueda avanzada y newsletter.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    tags: ['Next.js', 'MDX', 'SendGrid'],
    stats: { visits: '50K+', conversion: '4%' },
    color: 'from-cyan-500 to-blue-500'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pro bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-50 to-transparent" />
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Portfolio
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Proyectos Recientes
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Algunos ejemplos de trabajos realizados para clientes satisfechos.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <motion.button 
                        type="button"
                        aria-label={`Ver detalle del proyecto ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-xl"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <motion.button 
                        type="button"
                        aria-label={`Abrir proyecto ${project.title} en una nueva pestaña`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-4 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors shadow-xl"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-white/95 text-slate-900 hover:bg-white font-medium backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-lg font-bold text-slate-900">{project.stats.visits}</div>
                          <div className="text-xs text-slate-500">visitas/mes</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-lg font-bold text-slate-900">{project.stats.conversion}</div>
                          <div className="text-xs text-slate-500">conversión</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View More CTA */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            ¿Quieres ver más ejemplos?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            Ver Todos los Proyectos
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
}
