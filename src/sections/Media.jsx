import { useEffect, useRef, useState } from 'react'
import { Card, CardActionArea, IconButton } from '@mui/material'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import PlayArrow from '@mui/icons-material/PlayArrow'
import Section from '../components/Section.jsx'
import { videos } from '../data/videos.js'

export default function Media() {
  const carousel = useRef(null)
  const [bounds, setBounds] = useState({ start: true, end: false })
  useEffect(() => {
    const element = carousel.current
    const update = () =>
      setBounds({
        start: element.scrollLeft < 2,
        end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      })
    const observer = new ResizeObserver(update)
    observer.observe(element)
    element.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      observer.disconnect()
      element.removeEventListener('scroll', update)
    }
  }, [])
  function move(direction) {
    const element = carousel.current
    const distance = element.firstElementChild.getBoundingClientRect().width + 16
    element.scrollBy({
      left: distance * direction,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    })
  }
  return (
    <Section
      id="conoce-mas"
      eyebrow="Conoce más"
      title="Conoce más: Escenario & Video"
      description="Interpretaciones memorables, videoclips galardonados y colaboraciones grabadas en directo."
      align="left"
      actions={
        <div className="flex gap-2">
          <IconButton
            aria-label="Video anterior"
            onClick={() => move(-1)}
            disabled={bounds.start}
            className="bg-surface-container-high"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            aria-label="Siguiente video"
            onClick={() => move(1)}
            disabled={bounds.end}
            className="bg-primary text-white hover:bg-primary/90"
          >
            <ChevronRight />
          </IconButton>
        </div>
      }
    >
      <div
        ref={carousel}
        role="region"
        aria-label="Videos de Jorge Drexler"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
      >
        {videos.map((video) => (
          <Card key={video.id} className="w-[280px] shrink-0 snap-start lg:w-[268px]">
            <CardActionArea
              component="a"
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver ${video.title} en YouTube (nueva pestaña)`}
              className="group h-full p-3"
            >
              <div className="relative mb-3 aspect-video overflow-hidden rounded-2xl">
                <img
                  src={video.image}
                  loading="lazy"
                  alt=""
                  width="400"
                  height="225"
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/15">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <PlayArrow />
                  </span>
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-primary">
                {
                  [
                    'Video oficial',
                    'Video oficial',
                    'Video oficial',
                    'Video oficial',
                    'Sesión de estudio',
                  ][video.id]
                }
              </span>
              <h3 className="mt-1 font-headline-md text-lg">{video.title}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-on-surface-variant">
                {video.description}
              </p>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </Section>
  )
}
