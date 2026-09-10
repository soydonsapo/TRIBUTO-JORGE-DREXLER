import { Card, CardActionArea, Chip } from '@mui/material'
import ArrowForward from '@mui/icons-material/ArrowForward'

export default function AlbumCard({ album, onSelect }) {
  return (
    <Card
      component="article"
      className="h-full transition-transform duration-300 hover:-translate-y-1"
    >
      <CardActionArea
        onClick={() => onSelect(album)}
        aria-label={`Explorar ${album.title}`}
        className="group flex h-full flex-col items-stretch p-4 text-left"
      >
        <div className="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-surface-container">
          <img
            src={album.image}
            alt={album.imageAlt}
            loading="lazy"
            width="400"
            height="400"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Chip
            label={album.year}
            size="small"
            className="absolute top-3 right-3 bg-white/90 text-xs"
          />
        </div>
        <h3 className="font-headline-md text-lg leading-snug">{album.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">
          {album.tags[0]} · {album.count} canciones
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-tertiary">
          <span className="text-[11px]">{album.note}</span>
          <ArrowForward className="text-lg text-primary" />
        </div>
      </CardActionArea>
    </Card>
  )
}
