import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda en estar lista mi web?',
    answer: 'El tiempo depende del tipo de proyecto. Una landing page puede estar lista en 3-5 días, una web corporativa en 1-2 semanas, y una tienda online en 2-3 semanas. Siempre te doy un plazo específico antes de empezar.'
  },
  {
    question: '¿Qué incluye el precio?',
    answer: 'El precio incluye diseño personalizado, desarrollo completo, SEO básico, optimización para móviles, formularios de contacto, integración con redes sociales, y hosting + dominio por el período indicado en cada plan.'
  },
  {
    question: '¿Puedo modificar la web yo mismo después?',
    answer: '¡Por supuesto! Te entrego acceso al panel de administración y te doy una capacitación básica para que puedas gestionar contenido, productos, imágenes, etc. También ofrezco soporte continuo si lo necesitas.'
  },
  {
    question: '¿El diseño es 100% personalizado?',
    answer: 'Sí, cada web que creo es única y diseñada específicamente para tu marca. No uso plantillas genéricas. Trabajo contigo para entender tu visión y crear algo que represente perfectamente tu negocio.'
  },
  {
    question: '¿Qué pasa si no me gusta el diseño?',
    answer: 'Hacemos revisiones ilimitadas (según el plan) hasta que quedes 100% satisfecho. El proceso es colaborativo: te muestro avances, recibo tu feedback, y ajustamos hasta que sea perfecto.'
  },
  {
    question: '¿Ofreces mantenimiento después del lanzamiento?',
    answer: 'Sí, ofrezco planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, soporte técnico, y pequeñas modificaciones. También puedes contactarme puntualmente cuando lo necesites.'
  },
  {
    question: '¿Cómo es el proceso de pago?',
    answer: 'Normalmente trabajo con un 50% de anticipo para comenzar y el 50% restante al finalizar. Para proyectos grandes, podemos acordar pagos parciales por hitos. Acepto transferencia bancaria, PayPal o Stripe.'
  },
  {
    question: '¿Mi web será visible en Google?',
    answer: 'Sí, todas mis webs incluyen SEO básico: optimización de velocidad, meta tags, estructura semántica, y sitemap. Para SEO avanzado (keywords, contenido, link building), consulta el plan Profesional.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pro bg-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              FAQ
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Preguntas <span className="gradient-text">Frecuentes</span>
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Todo lo que necesitas saber antes de empezar tu proyecto.
            </p>
          </FadeIn>
        </div>

        {/* FAQ List */}
        <StaggerContainer staggerDelay={0.08} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <motion.div
                initial={false}
                className="mb-4"
              >
                <motion.button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-white shadow-lg border-l-4 border-blue-500' 
                      : 'bg-white/60 hover:bg-white hover:shadow-md border-l-4 border-transparent'
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                          : 'bg-slate-100'
                      }`}>
                        <MessageCircleQuestion className={`w-5 h-5 ${
                          openIndex === index ? 'text-white' : 'text-slate-500'
                        }`} />
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${
                        openIndex === index ? 'text-blue-600' : 'text-slate-800'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        openIndex === index 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-14 pr-4">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.5} className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            ¿Tienes otra pregunta?
          </p>
          <motion.a 
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
          >
            Contáctame
            <MessageCircleQuestion className="w-5 h-5" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
