import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp, Users, Clock } from 'lucide-react';
import { WordReveal } from '@/components/animations/TextReveal';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

const stats = [
  { icon: Users, value: '50+', label: 'proyectos entregados', color: 'from-blue-400 to-cyan-400' },
  { icon: TrendingUp, value: '+38%', label: 'media de mejora en leads', color: 'from-amber-400 to-yellow-400' },
  { icon: Clock, value: '<24h', label: 'respuesta comercial', color: 'from-green-400 to-emerald-400' }
];

const particles = Array.from({ length: 20 }, (_, index) => ({
  left: `${(index * 17 + 11) % 100}%`,
  top: `${(index * 31 + 7) % 100}%`,
  duration: 3 + (index % 5) * 0.35,
  delay: (index % 6) * 0.25
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <FadeIn delay={0.1}>
          <img
            src="/images/logo.png"
            alt="BagesTech"
            width={512}
            height={140}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-24 md:h-32 mx-auto drop-shadow-2xl mb-8"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-amber-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-200">Diseno y desarrollo web para captar clientes</span>
          </div>
        </FadeIn>

        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            <WordReveal text="Webs premium" delay={0.3} wordClassName="text-white" />
            <br />
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-amber-400 animate-gradient">
              <WordReveal text="que convierten visitas en negocio" delay={0.55} />
            </span>
          </h1>
        </div>

        <FadeIn delay={0.9} direction="up" distance={30}>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            En BagesTech construimos sitios rapidos, claros y pensados para vender. Menos ruido visual, mas conversion real.
          </p>
        </FadeIn>

        <FadeIn delay={1.1} direction="up" distance={24}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-amber-500/30 transition-all duration-300"
              onClick={() => scrollToSection('contacto')}
            >
              Solicitar presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => scrollToSection('portfolio')}
            >
              Ver casos reales
            </Button>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div whileHover={{ y: -5, scale: 1.02 }} className="text-center p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/60">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}
