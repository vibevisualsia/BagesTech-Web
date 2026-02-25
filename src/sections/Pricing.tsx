import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const plans = [
  {
    name: 'Básico',
    description: 'Perfecto para emprendedores y pequeños negocios',
    price: '299',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    popular: false,
    features: [
      'Diseño de 1 página',
      'Responsive (móvil/tablet)',
      'Formulario de contacto',
      'SEO básico',
      'Hosting 1 año incluido',
      'Dominio .com gratis (1 año)',
      '3 revisiones incluidas',
      'Entrega en 7 días'
    ]
  },
  {
    name: 'Profesional',
    description: 'Ideal para empresas que quieren destacar',
    price: '599',
    icon: Zap,
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    popular: true,
    features: [
      'Hasta 5 páginas',
      'Diseño personalizado premium',
      'Blog integrado',
      'SEO avanzado',
      'Integración redes sociales',
      'Google Analytics',
      'Chat en vivo',
      'Hosting 2 años incluido',
      'Dominio .com gratis (2 años)',
      'Revisiones ilimitadas',
      'Entrega en 14 días',
      'Soporte 3 meses'
    ]
  },
  {
    name: 'E-commerce',
    description: 'Tienda online completa para vender tus productos',
    price: '999',
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    popular: false,
    features: [
      'Tienda online completa',
      'Hasta 100 productos',
      'Pasarela de pagos (Stripe/PayPal)',
      'Carrito de compras',
      'Gestión de inventario',
      'Cupones de descuento',
      'Cuentas de usuario',
      'Panel de administración',
      'SEO avanzado',
      'Hosting 2 años incluido',
      'Dominio .com gratis (2 años)',
      'Soporte 6 meses',
      'Entrega en 21 días'
    ]
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="section-pro bg-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-amber-100 text-amber-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Precios
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Paquetes y Precios
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Precios transparentes sin sorpresas. Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </FadeIn>
        </div>

        {/* Pricing Cards */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full"
              >
                <Card className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-500 h-full ${
                  plan.popular ? 'ring-2 ring-amber-500 scale-105 md:scale-110' : ''
                }`}>
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-5 py-2 rounded-bl-xl z-10">
                      MÁS POPULAR
                    </div>
                  )}

                  <CardHeader className={`${plan.bgColor} p-8 text-center border-b ${plan.borderColor}`}>
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-5 shadow-lg`}
                    >
                      <plan.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Price */}
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-3xl text-slate-400 font-light">€</span>
                        <span className="text-6xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                      </div>
                      <span className="text-slate-500 text-sm">pago único</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        onClick={scrollToContact}
                        className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-lg shadow-amber-500/30' 
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        Solicitar Presupuesto
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Note */}
        <FadeIn delay={0.5} className="mt-16 text-center">
          <p className="text-slate-500">
            ¿Necesitas algo personalizado?{' '}
            <motion.a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToContact();
              }}
              whileHover={{ scale: 1.05 }}
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
            >
              Contáctame
              <ArrowRight className="w-4 h-4" />
            </motion.a>{' '}
            y hablamos de tu proyecto.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
