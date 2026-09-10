import { useState } from 'react'
import { Alert, Button, Card, IconButton, InputAdornment, TextField } from '@mui/material'
import PersonOutline from '@mui/icons-material/PersonOutlined'
import MailOutline from '@mui/icons-material/MailOutlined'
import Send from '@mui/icons-material/SendOutlined'
import Instagram from '@mui/icons-material/Instagram'
import YouTube from '@mui/icons-material/YouTube'
import Facebook from '@mui/icons-material/Facebook'
import MusicNote from '@mui/icons-material/MusicNote'

const socials = [
  { label: 'Instagram oficial', url: 'https://www.instagram.com/drexlerjorge/', icon: Instagram },
  { label: 'YouTube oficial', url: 'https://www.youtube.com/@JorgeDrexlerOficial', icon: YouTube },
  {
    label: 'Facebook oficial',
    url: 'https://www.facebook.com/JorgeDrexlerOficial',
    icon: Facebook,
  },
  { label: 'TikTok oficial', url: 'https://www.tiktok.com/@jorgedrexler', icon: MusicNote },
]

export default function Community() {
  const [values, setValues] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  function submit(event) {
    event.preventDefault()
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Escribe tu nombre (al menos 2 caracteres).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Escribe un correo electrónico válido.'
    setErrors(next)
    setSubmitted(!Object.keys(next).length)
  }
  function change(field, value) {
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
    setSubmitted(false)
  }
  return (
    <section
      id="comunidad"
      aria-labelledby="community-title"
      className="bg-surface-container-low px-5 py-16 md:px-12"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-label-sm uppercase tracking-widest text-primary">Comunidad</span>
          <h2
            id="community-title"
            className="mt-2 font-headline-lg text-headline-lg-mobile md:text-headline-lg"
          >
            Cartas de Tinta y Gira
          </h2>
          <div className="my-3 h-1 w-16 rounded-full bg-primary-container" />
          <p className="max-w-lg text-body-lg text-on-surface-variant">
            Un lugar para descubrir conciertos, lanzamientos, reflexiones poéticas y nuevas formas
            de escuchar el universo de Jorge Drexler.
          </p>
          <p className="mt-7 mb-3 text-label-sm uppercase text-tertiary">Canales oficiales</p>
          <div className="flex gap-3">
            {socials.map(({ label, url, icon: SocialIcon }) => (
              <IconButton
                key={label}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (nueva pestaña)`}
                className="h-12 w-12 bg-white text-primary hover:bg-primary hover:text-white"
              >
                <SocialIcon />
              </IconButton>
            ))}
          </div>
        </div>
        <Card className="p-6 md:p-10">
          <h3 className="font-headline-md text-headline-md">Unirse al Círculo</h3>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Solo música y palabras cuando haya algo que contar.
          </p>
          <form onSubmit={submit} noValidate className="mt-6 flex flex-col gap-5">
            <TextField
              id="subscriber-name"
              label="Nombre y apellido"
              placeholder="Tu nombre"
              autoComplete="name"
              required
              fullWidth
              value={values.name}
              onChange={(event) => change('name', event.target.value)}
              error={Boolean(errors.name)}
              helperText={errors.name}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              id="subscriber-email"
              label="Correo electrónico"
              placeholder="tu@correo.com"
              type="email"
              autoComplete="email"
              required
              fullWidth
              value={values.email}
              onChange={(event) => change('email', event.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline fontSize="small" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <p className="text-xs leading-relaxed text-on-surface-variant">
              Formulario de demostración. Tus datos no se guardan ni se envían; la suscripción aún
              no está habilitada.
            </p>
            <Button type="submit" variant="contained" endIcon={<Send />}>
              Probar suscripción
            </Button>
            {submitted && (
              <Alert severity="info" role="status">
                ¡Gracias, {values.name.trim()}! El formulario es válido. Esta demostración no
                realiza una suscripción ni envía correos.
              </Alert>
            )}
          </form>
        </Card>
      </div>
    </section>
  )
}
