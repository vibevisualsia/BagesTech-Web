import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const faqs = [
  {
    question: 'Cuanto tarda en estar lista una web?',
    answer:
      'Depende del alcance. Una landing suele estar entre 5 y 10 dias, y un proyecto corporativo entre 2 y 4 semanas.'
  },
  {
    question: 'Trabajais con contenido y copy?',
    answer:
      'Si. Definimos estructura, mensajes clave y CTA para que la web no solo se vea bien, tambien convierta mejor.'
  },
  {
    question: 'Incluye SEO?',
    answer:
      'Si, incluimos SEO tecnico base: meta tags, estructura semantica, rendimiento y buenas practicas para indexacion.'
  },
  {
    question: 'Puedo pedir cambios despues?',
    answer:
      'Claro. Cada propuesta incluye ronda de ajustes y soporte inicial para terminar de afinar lo necesario.'
  },
  {
    question: 'Trabajais remoto?',
    answer:
      'Si, trabajamos remoto con clientes de toda Espana y reuniones online cortas para agilizar decisiones.'
  },
  {
    question: 'Como empezamos?',
    answer: 'Nos cuentas tu objetivo en el formulario o por WhatsApp y en menos de 24h te enviamos enfoque y presupuesto.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pro bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-pro relative">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              FAQ
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Dudas antes de empezar</h2>
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Respuestas directas para que tomes decision con claridad.</p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.06} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.question}>
              <div className="mb-4">
                <motion.button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-white shadow-lg border-l-4 border-blue-500'
                      : 'bg-white/70 hover:bg-white hover:shadow-md border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          openIndex === index ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-slate-100'
                        }`}
                      >
                        <CircleHelp className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-slate-500'}`} />
                      </div>
                      <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pl-14 pr-4">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
