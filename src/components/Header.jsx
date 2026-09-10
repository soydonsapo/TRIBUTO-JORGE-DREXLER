import { useEffect, useState } from 'react'
import { Button, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Close from '@mui/icons-material/Close'
import PersonOutline from '@mui/icons-material/PersonOutlined'

const links = [
  ['inicio', 'Inicio'],
  ['biografia', 'Biografía'],
  ['trayectoria', 'Trayectoria'],
  ['musica', 'Música'],
  ['conoce-mas', 'Conoce más'],
  ['comunidad', 'Comunidad'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-15% 0px -55% 0px' },
    )
    links.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-outline-variant/20 bg-background/95 backdrop-blur-md">
      <a
        href="#contenido"
        className="absolute -top-20 left-5 rounded-full bg-white p-3 focus:top-3"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex h-20 max-w-[1216px] items-center justify-between gap-3 px-5 md:px-12">
        <a
          href="#inicio"
          aria-label="Jorge Drexler, inicio"
          className="font-headline-md text-xl text-primary"
        >
          Jorge Drexler
          <span className="mt-0.5 block font-label-sm text-[9px] tracking-[.25em] text-tertiary">
            UN UNIVERSO EN CANCIÓN
          </span>
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center rounded-full bg-surface-container-low p-1 lg:flex"
        >
          {links.map(([id, label]) => (
            <Button
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              className={`min-w-0 px-3 py-2 text-xs ${active === id ? 'bg-primary text-white' : 'text-on-surface-variant'}`}
            >
              {label}
            </Button>
          ))}
        </nav>
        <div className="flex items-center">
          <IconButton href="#comunidad" aria-label="Ir a la comunidad" color="primary">
            <PersonOutline />
          </IconButton>
          <IconButton className="lg:hidden" aria-label="Abrir menú" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 max-w-[85vw] p-5">
          <div className="flex items-center justify-between">
            <span className="font-headline-md text-xl">Explorar</span>
            <IconButton aria-label="Cerrar menú" onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </div>
          <List component="nav" aria-label="Navegación móvil">
            {links.map(([id, label]) => (
              <ListItemButton
                key={id}
                component="a"
                href={`#${id}`}
                selected={active === id}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
    </header>
  )
}
