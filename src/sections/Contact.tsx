import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';
import { TextReveal } from '@/components/animations/TextReveal';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Escribe tu nombre (minimo 2 caracteres).'),
  email: z.string().trim().email('Introduce un email valido.'),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^[+0-9()\s-]{7,20}$/.test(value), 'Telefono no valido.'),
  projectType: z.string().trim().min(1, 'Selecciona el tipo de proyecto.'),
  message: z
    .string()
    .trim()
    .min(20, 'Explica tu proyecto con al menos 20 caracteres.')
    .max(1200, 'El mensaje no puede superar 1200 caracteres.'),
  privacy: z.boolean().refine((value) => value, 'Debes aceptar la politica de privacidad.'),
  website: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value, 'Solicitud no valida.')
});

type ContactFormValues = z.infer<typeof contactSchema>;
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

type ContactItem = {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
};

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hola@bagestech.com',
    href: 'mailto:hola@bagestech.com'
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+34 123 456 789',
    href: 'tel:+34123456789'
  },
  {
    icon: MapPin,
    label: 'Ubicacion',
    value: 'Espana (trabajo remoto)'
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Vie: 9:00 - 18:00'
  }
];

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || 'https://formsubmit.co/ajax/hola@bagestech.com';
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || '34123456789';
const LAST_SUBMIT_STORAGE_KEY = 'bagestech_last_submit_ts';
const SUBMIT_COOLDOWN_MS = 20000;

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
      privacy: true,
      website: ''
    }
  });
  const [nameValue, emailValue, phoneValue, projectTypeValue, messageValue] = watch([
    'name',
    'email',
    'phone',
    'projectType',
    'message'
  ]);

  const whatsappMessage = useMemo(() => {
    return [
      'Hola BagesTech, quiero solicitar presupuesto.',
      `Nombre: ${nameValue || '-'}`,
      `Email: ${emailValue || '-'}`,
      `Telefono: ${phoneValue || '-'}`,
      `Tipo de proyecto: ${projectTypeValue || '-'}`,
      '',
      messageValue || 'Quiero informacion sobre mi proyecto.'
    ].join('\n');
  }, [emailValue, messageValue, nameValue, phoneValue, projectTypeValue]);

  const whatsappHref = useMemo(
    () => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
    [whatsappMessage]
  );

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus('loading');
    setSubmitError('');

    try {
      if (values.website) {
        throw new Error('Solicitud no valida.');
      }

      if (typeof window !== 'undefined') {
        const lastSubmit = Number(window.localStorage.getItem(LAST_SUBMIT_STORAGE_KEY) || '0');
        if (lastSubmit && Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) {
          throw new Error('Espera unos segundos antes de volver a enviar.');
        }
      }

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          projectType: values.projectType,
          message: values.message,
          _honey: values.website || '',
          _subject: `Nuevo presupuesto de ${values.name}`,
          _captcha: 'false'
        })
      });

      const payload = (await response.json().catch(() => null)) as { success?: boolean | string; message?: string } | null;

      if (!response.ok || payload?.success === false || payload?.success === 'false') {
        throw new Error(payload?.message || 'No se pudo enviar el formulario.');
      }

      setSubmitStatus('success');
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LAST_SUBMIT_STORAGE_KEY, String(Date.now()));
      }
      reset({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
        privacy: true,
        website: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitError(
        error instanceof Error
          ? `${error.message} Puedes escribirnos por WhatsApp mientras lo revisamos.`
          : 'Ha ocurrido un error. Puedes escribirnos por WhatsApp.'
      );
    }
  };

  return (
    <section id="contacto" className="section-pro bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container-pro relative">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="inline-block px-5 py-2.5 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold mb-6 tracking-wide uppercase backdrop-blur-sm border border-amber-500/30">
              Contacto
            </span>
          </FadeIn>

          <TextReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Hablemos de tu proyecto</h2>
          </TextReveal>

          <FadeIn delay={0.3}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Cuentanos tu idea y te enviamos una propuesta personalizada en menos de 24 horas.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <StaggerContainer staggerDelay={0.1} className="space-y-4">
              {contactInfo.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-colors">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-white font-medium hover:text-amber-400 transition-colors">
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-white font-medium">{item.value}</span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-6 p-5 bg-green-500/10 backdrop-blur-xl rounded-2xl border border-green-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-green-400 font-semibold">Respuesta rapida</div>
                    <div className="text-green-300/80 text-sm">Tambien atendemos por WhatsApp</div>
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white rounded-xl py-6">
                  <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp para solicitar presupuesto">
                    Contactar por WhatsApp
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
              </motion.div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2">
            <FadeIn delay={0.3} direction="left">
              <Card className="bg-white border-0 shadow-2xl">
                <CardContent className="p-8 md:p-10">
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-describedby="contact-status">
                    <div className="sr-only" aria-hidden="true">
                      <Label htmlFor="website">Sitio web</Label>
                      <Input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-700 font-medium">
                          Nombre *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Tu nombre"
                          className="h-14 rounded-xl border-slate-300 focus-visible:border-blue-600"
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          {...register('name')}
                        />
                        {errors.name ? (
                          <p id="name-error" className="text-sm text-red-600" role="alert">
                            {errors.name.message}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          className="h-14 rounded-xl border-slate-300 focus-visible:border-blue-600"
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          {...register('email')}
                        />
                        {errors.email ? (
                          <p id="email-error" className="text-sm text-red-600" role="alert">
                            {errors.email.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                          Telefono
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+34 123 456 789"
                          className="h-14 rounded-xl border-slate-300 focus-visible:border-blue-600"
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                          {...register('phone')}
                        />
                        {errors.phone ? (
                          <p id="phone-error" className="text-sm text-red-600" role="alert">
                            {errors.phone.message}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-slate-700 font-medium">
                          Tipo de proyecto *
                        </Label>
                        <select
                          id="projectType"
                          className="w-full h-14 px-4 rounded-xl border border-slate-300 bg-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                          aria-invalid={Boolean(errors.projectType)}
                          aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                          {...register('projectType')}
                        >
                          <option value="">Selecciona una opcion</option>
                          <option value="web-corporativa">Web corporativa</option>
                          <option value="ecommerce">Tienda online</option>
                          <option value="landing">Landing page</option>
                          <option value="portfolio">Portfolio</option>
                          <option value="blog">Blog</option>
                          <option value="otro">Otro</option>
                        </select>
                        {errors.projectType ? (
                          <p id="projectType-error" className="text-sm text-red-600" role="alert">
                            {errors.projectType.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-medium">
                        Cuentanos sobre tu proyecto *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Objetivos, plazos, presupuesto aproximado y cualquier detalle clave..."
                        rows={6}
                        className="resize-none rounded-xl border-slate-300 focus-visible:border-blue-600"
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        {...register('message')}
                      />
                      {errors.message ? (
                        <p id="message-error" className="text-sm text-red-600" role="alert">
                          {errors.message.message}
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-start gap-3 text-sm text-slate-600">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600"
                          aria-invalid={Boolean(errors.privacy)}
                          aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                          {...register('privacy')}
                        />
                        <span>Acepto la politica de privacidad y el tratamiento de datos para recibir presupuesto.</span>
                      </label>
                      {errors.privacy ? (
                        <p id="privacy-error" className="text-sm text-red-600" role="alert">
                          {errors.privacy.message}
                        </p>
                      ) : null}
                    </div>

                    <div id="contact-status" className="space-y-3" aria-live="polite">
                      {submitStatus === 'success' ? (
                        <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                          <CheckCircle2 className="w-5 h-5 mt-0.5" aria-hidden="true" />
                          <p>Mensaje enviado correctamente. Revisaremos tu solicitud y responderemos en menos de 24 horas.</p>
                        </div>
                      ) : null}

                      {submitStatus === 'error' ? (
                        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
                          <AlertCircle className="w-5 h-5 mt-0.5" aria-hidden="true" />
                          <p>{submitError}</p>
                        </div>
                      ) : null}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                          type="submit"
                          size="lg"
                          disabled={submitStatus === 'loading'}
                          className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-white py-7 text-lg rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-300"
                        >
                          {submitStatus === 'loading' ? (
                            <span className="flex items-center gap-3">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Enviando...
                            </span>
                          ) : (
                            <span className="flex items-center gap-3">
                              Enviar presupuesto
                              <Send className="w-5 h-5" aria-hidden="true" />
                            </span>
                          )}
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button asChild size="lg" variant="outline" className="w-full py-7 text-lg rounded-xl border-green-500 text-green-700 hover:bg-green-50">
                          <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Solicitar presupuesto por WhatsApp">
                            WhatsApp
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
