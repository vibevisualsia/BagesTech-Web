import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, ShoppingCart, Search, Wrench } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Web corporativa',
    description: 'Sitio profesional para explicar tu propuesta de valor y convertir visitas en reuniones.',
    points: ['Arquitectura clara', 'Copy orientado a conversion', 'SEO tecnico base'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tienda online enfocada en venta: velocidad, confianza y proceso de compra sin friccion.',
    points: ['Checkout optimizado', 'Catalogo escalable', 'Medicion de conversion'],
    color: 'from-amber-500 to-yellow-500'
  },
  {
    icon: Search,
    title: 'Landing de captacion',
    description: 'Landing para campañas y ofertas con estructura de persuasión y CTA unico.',
    points: ['Mensaje directo', 'Prueba social', 'Integracion con formularios/WhatsApp'],
    color: 'from-violet-500 to-fuchsia-500'
  },
  {
    icon: Wrench,
    title: 'Mejora de web existente',
    description: 'Rediseño y optimizacion de webs ya publicadas para aumentar conversion y rendimiento.',
    points: ['Auditoria UX', 'Refactor visual', 'Mejora tecnica y SEO'],
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function Services() {
  const goToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="section-pro bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-pro relative">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Servicios
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Lo que hacemos para vender mas</h2>
          </TextReveal>

          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              No vendemos solo diseno. Construimos paginas pensadas para captar clientes y escalar resultados.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full bg-white">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-5 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center text-sm text-slate-600">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="outline"
                      className="rounded-full border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white"
                      onClick={goToContact}
                    >
                      Hablar de este servicio
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
