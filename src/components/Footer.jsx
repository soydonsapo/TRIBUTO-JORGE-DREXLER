export default function Footer() {
  return (
    <footer className="mt-12 bg-surface-container-low px-5 pt-14 pb-28 md:px-12">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div>
            <a href="#inicio" className="font-headline-md text-2xl text-primary">
              Jorge Drexler
            </a>
            <p className="mt-2 max-w-sm text-sm text-on-surface-variant">
              Espacio sonoro, memoria poética y exploración discográfica.
            </p>
          </div>
          <nav
            aria-label="Navegación al pie"
            className="flex flex-wrap items-center gap-5 text-xs text-on-surface-variant"
          >
            <a href="#inicio">Inicio</a>
            <a href="#musica">Música</a>
            <a href="#comunidad">Comunidad</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-outline-variant/30 pt-6 text-xs text-tertiary sm:flex-row">
          <p>Proyecto tributo independiente · Contenido editorial basado en la maqueta.</p>
          <span>Montevideo · Madrid</span>
        </div>
      </div>
    </footer>
  )
}
