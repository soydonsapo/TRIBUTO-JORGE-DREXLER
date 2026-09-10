import { useRef, useState } from 'react'
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import Close from '@mui/icons-material/Close'
import ArrowBack from '@mui/icons-material/ArrowBack'
import AutoStories from '@mui/icons-material/AutoStoriesOutlined'

export default function AlbumDialog({ album, onClose }) {
  const [song, setSong] = useState(null)
  const titleRef = useRef(null)
  function showSong(nextSong) {
    // Keep keyboard focus inside the dialog when the current view is removed.
    titleRef.current?.focus()
    setSong(nextSong)
  }
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm" aria-labelledby="album-dialog-title">
      <DialogTitle
        ref={titleRef}
        tabIndex={-1}
        id="album-dialog-title"
        className="pr-16 font-headline-md text-2xl"
      >
        {song ? song.title : album.title}
      </DialogTitle>
      <IconButton aria-label="Cerrar álbum" onClick={onClose} className="absolute top-3 right-3">
        <Close />
      </IconButton>
      <DialogContent className="pb-8">
        {song ? (
          <div className="flex flex-col gap-5">
            <Button
              onClick={() => showSong(null)}
              startIcon={<ArrowBack />}
              className="self-start"
              color="secondary"
            >
              Volver al álbum
            </Button>
            <p className="text-sm italic text-tertiary">Álbum: {album.title}</p>
            {!song.verses ? (
              <p className="rounded-2xl bg-surface-container-low p-5 text-on-surface-variant">
                Letra pendiente de agregar.
              </p>
            ) : (
              <>
                <div className="rounded-2xl bg-surface-container-low p-5">
                  <h3 className="mb-2 text-label-sm uppercase text-primary">
                    Inspiración conceptual
                  </h3>
                  <p className="text-sm leading-7 text-on-surface-variant">{song.concept}</p>
                </div>
                <div className="rounded-2xl bg-surface-container p-5">
                  <h3 className="mb-3 text-label-sm uppercase text-secondary">
                    Lectura poética del mockup
                  </h3>
                  <p className="whitespace-pre-line font-quote-editorial text-xl leading-relaxed">
                    {song.verses}
                  </p>
                </div>
                <p className="text-xs text-on-surface-variant">
                  Texto editorial de la maqueta; no es una transcripción verificada de la letra
                  original.
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 sm:flex-row">
              <img src={album.image} alt="" className="h-36 w-36 rounded-2xl object-cover" />
              <div>
                <span className="text-label-sm text-primary">{album.year}</span>
                <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                  {album.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {album.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </div>
            <div>
              <h3 className="text-label-sm uppercase text-secondary">
                {album.songs.length === album.count
                  ? 'Canciones del álbum'
                  : 'Canciones destacadas'}
              </h3>
              <List>
                {album.songs.map((track, index) => (
                  <ListItemButton
                    key={track.id}
                    onClick={() => showSong(track)}
                    className="gap-3 rounded-2xl px-2"
                  >
                    <span className="text-sm text-tertiary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ListItemText
                      primary={track.title}
                      secondary={track.verses ? 'Explorar la canción' : 'Letra pendiente'}
                    />
                    {track.duration && (
                      <span className="shrink-0 text-sm text-tertiary">{track.duration}</span>
                    )}
                    <AutoStories color="primary" />
                  </ListItemButton>
                ))}
              </List>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
