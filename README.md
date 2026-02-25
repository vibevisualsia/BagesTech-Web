# BagesTech Web

Landing page comercial de BagesTech construida con:

- Vite
- React
- TypeScript
- Tailwind CSS

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

Build de produccion:

```bash
npm run build
```

## Variables de entorno

Crear un archivo `.env.local` (o usar `.env`) con:

```bash
VITE_CONTACT_FORM_ENDPOINT=https://formsubmit.co/ajax/TU_EMAIL
VITE_WHATSAPP_NUMBER=34123456789
```

- `VITE_CONTACT_FORM_ENDPOINT`: endpoint para envio del formulario.
- `VITE_WHATSAPP_NUMBER`: numero en formato internacional, sin `+`, sin espacios.

## Deploy en Vercel

1. Importar el repositorio en Vercel.
2. Preset: `Vite`.
3. Root Directory: `./`.
4. Configurar variables de entorno del bloque anterior.
5. Deploy.

Cada push a `main` publica en produccion automaticamente.

## SEO

El SEO base esta configurado en `index.html`:

- `title`
- `meta description`
- Open Graph
- Twitter cards
- favicon

## Notas

- No modificar `dist/` manualmente.
- El formulario tiene estados `loading/success/error` y fallback por WhatsApp.
- Si cambias variables en Vercel, haz redeploy para aplicarlas.
