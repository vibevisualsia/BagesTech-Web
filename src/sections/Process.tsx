import { motion } from 'framer-motion';
import { MessageSquare, Pencil, Code, Rocket } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Diagnostico rapido',
    description: 'Definimos objetivo, publico y oferta para que la web venda desde el primer dia.'
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Estructura y diseno',
    description: 'Creamos la arquitectura de conversion y un diseno premium alineado a tu marca.'
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo y QA',
    description: 'Construimos en React + TypeScript con foco en velocidad, SEO tecnico y accesibilidad.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Lanzamiento y mejora',
    description: 'Publicamos, medimos y refinamos para seguir aumentando conversion.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="section-pro bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container-pro relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Proceso
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Impacto rapido, ejecucion clara</h2>
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Un proceso corto y transparente para pasar de idea a resultados sin fricciones.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.14} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.25 }} className="relative h-full">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 h-full border border-slate-100">
                  <div className="absolute -top-5 left-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5 mt-5">
                    <step.icon className="w-7 h-7 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-14 text-center">
          <button
            type="button"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20"
          >
            Empezar ahora
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
