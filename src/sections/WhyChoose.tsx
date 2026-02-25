import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Shield, 
  Headphones, 
  Zap, 
  Award, 
  Heart,
  CheckCircle2
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const reasons = [
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Cumplimos los plazos acordados. Tu proyecto estará listo cuando lo necesites.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Garantía de Calidad',
    description: 'Código limpio, bien estructurado y siguiendo las mejores prácticas del sector.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Headphones,
    title: 'Soporte Personalizado',
    description: 'Atención directa y cercana. Estaré contigo en cada paso del proceso.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Tecnología de Vanguardia',
    description: 'Utilizo las últimas tecnologías para que tu web sea rápida y moderna.',
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Award,
    title: 'Experiencia Comprobada',
    description: 'Más de 50 proyectos exitosos y clientes 100% satisfechos.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Pasión por el Detalle',
    description: 'Cada píxel cuenta. Me obsesiono con que todo quede perfecto.',
    color: 'from-rose-500 to-pink-500'
  }
];

const guarantees = [
  'Diseño 100% personalizado',
  'Código limpio y optimizado',
  'SEO incluido',
  'Responsive garantizado',
  'Revisiones ilimitadas',
  'Soporte post-lanzamiento'
];

export default function WhyChoose() {
  return (
    <section id="porque-elegirme" className="section-pro bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold mb-6 tracking-wide uppercase border border-amber-500/30">
              Por qué elegirme
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              ¿Por qué trabajar <span className="gradient-gold">conmigo?</span>
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              No solo creo webs, creo relaciones duraderas con mis clientes.
            </p>
          </FadeIn>
        </div>

        {/* Reasons Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.color} mb-5 shadow-lg`}
                    >
                      <reason.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Guarantees */}
        <FadeIn delay={0.5}>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Mis <span className="gradient-gold">Garantías</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/80 text-sm md:text-base">{guarantee}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
