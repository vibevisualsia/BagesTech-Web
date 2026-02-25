import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-commerce de moda',
    category: 'E-commerce',
    description: 'Rediseño completo con checkout simplificado y foco en confianza.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    stack: ['React', 'Stripe', 'Analytics'],
    result: 'Conversion +32%',
    traffic: '10K visitas/mes',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Landing para SaaS B2B',
    category: 'Landing',
    description: 'Nueva propuesta de valor y jerarquia de CTA para campañas de pago.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    stack: ['React', 'Framer Motion', 'SEO'],
    result: 'Leads +41%',
    traffic: '25K visitas/mes',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Web corporativa restaurante',
    category: 'Corporativa',
    description: 'Sitio elegante con reservas y arquitectura pensada para conversion local.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    stack: ['Next.js', 'CMS', 'Reservas'],
    result: 'Reservas +27%',
    traffic: '5K visitas/mes',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Portfolio() {
  const goToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="section-pro bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-50 to-transparent" aria-hidden="true" />

      <div className="container-pro relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Casos
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Resultados que ya estamos generando</h2>
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Cada proyecto se diseña para un objetivo de negocio concreto: mas leads, mas reservas o mas ventas.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-white/95 text-slate-900 hover:bg-white font-medium backdrop-blur-sm">
                      {project.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-semibold bg-black/35 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.result}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((item) => (
                        <span key={item} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-base font-bold text-slate-900">{project.traffic}</div>
                          <div className="text-xs text-slate-500">traccion</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="text-base font-bold text-slate-900">{project.result}</div>
                          <div className="text-xs text-slate-500">impacto</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.35} className="mt-14 text-center">
          <Button
            size="lg"
            onClick={goToContact}
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 rounded-full"
          >
            Quiero un caso asi para mi negocio
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
