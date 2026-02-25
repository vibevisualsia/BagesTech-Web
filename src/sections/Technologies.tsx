import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
      { name: 'Next.js', icon: '▲', color: 'from-slate-700 to-slate-900' },
      { name: 'TypeScript', icon: 'TS', color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', icon: '🌊', color: 'from-cyan-400 to-teal-500' },
      { name: 'Vue.js', icon: 'V', color: 'from-green-400 to-emerald-600' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-600' },
      { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
      { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-400 to-indigo-600' },
      { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-emerald-600' },
    ]
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: '🌿', color: 'from-orange-500 to-red-500' },
      { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-cyan-500' },
      { name: 'Figma', icon: 'F', color: 'from-purple-400 to-pink-500' },
      { name: 'Vercel', icon: '▲', color: 'from-slate-800 to-black' },
    ]
  }
];

const features = [
  { value: '99.9%', label: 'Uptime' },
  { value: '<2s', label: 'Carga' },
  { value: '100%', label: 'SEO' },
  { value: 'A+', label: 'Performance' }
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-pro bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      </div>
      
      <div className="container-pro relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6 tracking-wide uppercase">
              Tecnologías
            </span>
          </FadeIn>
          
          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Stack <span className="gradient-text">Tecnológico</span>
            </h2>
          </TextReveal>
          
          <FadeIn delay={0.3}>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Utilizo las tecnologías más modernas y eficientes del mercado para crear webs de alto rendimiento.
            </p>
          </FadeIn>
        </div>

        {/* Tech Categories */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {technologies.map((category, catIndex) => (
            <StaggerItem key={catIndex}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-lg font-bold text-white`}>
                        {tech.icon}
                      </div>
                      <span className="font-semibold text-slate-700">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Performance Stats */}
        <FadeIn delay={0.5}>
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px]" />
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                Rendimiento <span className="gradient-gold">Garantizado</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold gradient-gold mb-2">
                      {feature.value}
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">
                      {feature.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
