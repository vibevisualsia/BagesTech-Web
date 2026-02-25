import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const plans = [
  {
    name: 'Inicio',
    description: 'Para negocio local que necesita presencia profesional y captacion.',
    fromPrice: 'desde 490 EUR',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    popular: false,
    features: ['Estructura de conversion', '1-3 paginas', 'Formulario + WhatsApp', 'SEO tecnico base', 'Entrega rapida']
  },
  {
    name: 'Crecimiento',
    description: 'Para empresas que quieren escalar leads y mejorar su posicionamiento.',
    fromPrice: 'desde 990 EUR',
    icon: Zap,
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    popular: true,
    features: ['Arquitectura avanzada', 'Copy comercial', 'Analitica y eventos', 'Blog o casos', 'Soporte prioritario']
  },
  {
    name: 'E-commerce',
    description: 'Para vender online con una tienda optimizada para conversion.',
    fromPrice: 'desde 1490 EUR',
    icon: Crown,
    color: 'from-violet-500 to-fuchsia-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    popular: false,
    features: ['Catalogo y checkout', 'Pagos y automatizaciones', 'Analitica de ventas', 'SEO + velocidad', 'Escalabilidad tecnica']
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="section-pro bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container-pro relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Inversion
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Planes pensados para crecer</h2>
          </TextReveal>

          <FadeIn delay={0.25}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Rangos claros para tomar decision rapido. Ajustamos alcance exacto en una llamada corta.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
                <Card
                  className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 h-full ${
                    plan.popular ? 'ring-2 ring-amber-500 md:scale-105' : ''
                  }`}
                >
                  {plan.popular ? (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-5 py-2 rounded-bl-xl z-10">
                      RECOMENDADO
                    </div>
                  ) : null}

                  <CardHeader className={`${plan.bgColor} p-8 text-center border-b ${plan.borderColor}`}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-5 shadow-lg`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-slate-600">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.fromPrice}</span>
                      <p className="text-slate-500 text-sm mt-2">precio orientativo segun alcance</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={scrollToContact}
                      className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg shadow-amber-500/30'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Hablar de este plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.35} className="mt-12 text-center">
          <p className="text-slate-500">Si necesitas un alcance mixto, preparamos propuesta personalizada en menos de 24h.</p>
        </FadeIn>
      </div>
    </section>
  );
}
