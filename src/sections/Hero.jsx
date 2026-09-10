import Icon from '../components/Icon.jsx'
import Button from '@mui/material/Button'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden px-gutter-md md:px-margin-desktop py-gutter-xl lg:py-gutter-2xl flex flex-col items-center justify-center"
      id="inicio"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary-container/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="max-w-[1120px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-gutter-md">
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full">
            <Icon name="auto_stories" className=" text-[16px] text-primary" />
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Cancionero &amp; Poesía Iberoamericana
            </span>
          </div>

          <h1 className="font-display-xl text-display-xl-mobile lg:text-display-xl tracking-tight text-on-surface leading-none">
            <span className="italic font-normal text-primary">«Cada uno da</span> lo que recibe,{' '}
            <br className="hidden sm:inline" />
            luego recibe <span className="text-tertiary font-serif">lo que da...»</span>
          </h1>
          <div className="w-20 h-1 bg-primary-container rounded-full my-1"></div>
          <p className="font-quote-editorial text-quote-editorial text-on-surface-variant italic">
            "Nada se pierde, todo se transforma."
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Músico, compositor y médico otorrinolaringólogo uruguayo. Explorador voraz de la décima
            espinela, los pulsos rioplatenses, las síncopas electrónicas y la acústica del alma
            humana.
          </p>

          <div className="flex flex-wrap items-center gap-gutter-sm pt-gutter-sm">
            <Button variant="contained" href="#biografia" endIcon={<Icon name="arrow_downward" />}>
              Explorar Biografía
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href="#musica"
              startIcon={<Icon name="album" />}
            >
              Escuchar Música
            </Button>
          </div>

          <div className="mt-gutter-md p-gutter-md bg-surface-container-low rounded-2xl flex items-center gap-gutter-md shadow-sm max-w-lg">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
              <Icon name="graphic_eq" className=" text-[24px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase text-secondary">
                Afinación &amp; Rima
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                De Montevideo a Madrid: 14 álbumes de estudio, 1 Óscar y 13 Latin Grammys guiados
                por el rigor y la sensibilidad.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-surface-container-highest">
            <img
              className="w-full h-full object-cover"
              alt="Jorge Drexler sosteniendo una guitarra acústica de madera natural en un estudio cálido bañado por luz atardecer dorada y sombras suaves, fondo con libros y papeles pautados en tonos terracota y crema cálido, estilo fotográfico editorial elegante de alta definición"
              src={import.meta.env.BASE_URL + 'images/editorial-1.jpg'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex flex-col justify-end p-gutter-lg">
              <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-widest">
                Montevideo, 1964
              </span>
              <span className="font-headline-md text-headline-md text-on-primary">
                Jorge Drexler
              </span>
              <p className="font-body-sm text-body-sm text-inverse-on-surface/90">
                "La guitarra es un resonador de la caja torácica."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
