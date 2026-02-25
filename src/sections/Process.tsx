import { motion } from 'framer-motion';
import { MessageSquare, Pencil, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consulta Gratuita',
    description: 'Hablamos sobre tu proyecto, objetivos y necesidades. Te asesoro sobre la mejor solución para tu negocio.',
    color: 'from-blue-500 to-cyan-500',
    details: ['Análisis de requerimientos', 'Definición de objetivos', 'Estimación inicial']
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Diseño y Propuesta',
    description: 'Creo un diseño personalizado y te presento una propuesta detallada con plazos y presupuesto.',
    color: 'from-purple-500 to-pink-500',
    details: ['Wireframes', 'Mockups', 'Propuesta comercial']
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo',
    description: 'Construyo tu web con las últimas tecnologías, manteniéndote informado durante todo el proceso.',
    color: 'from-cyan-500 to-teal-500',
    details: ['Código limpio', 'Mejores prácticas', 'Actualizaciones semanales']
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Revisiones',
    description: 'Realizamos revisiones juntos para ajustar cada detalle hasta que quede perfecto.',
    color: 'from-green-500 to-emerald-500',
    details: ['Feedback iterativo', 'Ajustes finos', 'Testing']
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Lanzamiento',
    description: 'Tu web va en vivo. Te entrego todo el proyecto y te explico cómo gestionarlo.',
    color: 'from-orange-500 to-red-500',
    details: ['Deploy', 'Capacitación', 'Documentación']
  }
];

export default function Process() {
  return (
    <section id="proceso" className="section-pro bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Proceso
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              ¿Cómo trabajamos?
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Un proceso simple y transparente para llevar tu proyecto del concepto a la realidad.
            </p>
          </FadeIn>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 via-green-500 to-orange-500 rounded-full origin-left"
            />
          </div>

          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="relative h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 h-full border border-slate-100">
                    {/* Number Badge */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                      className={`absolute -top-5 left-8 w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center mb-6 mt-6`}>
                      <step.icon className={`w-8 h-8 bg-clip-text text-transparent bg-gradient-to-br ${step.color}`} style={{ color: 'inherit' }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color} mr-2`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeIn delay={0.5} className="mt-20 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            ¿Listo para comenzar tu proyecto?
          </p>
          <motion.a 
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20"
          >
            Empezar Ahora
            <CheckCircle2 className="w-5 h-5" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
