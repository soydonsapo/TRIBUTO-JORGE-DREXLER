import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import Close from '@mui/icons-material/Close'

export default function AlbumDialog({ album, onClose }) {
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm" aria-labelledby="album-dialog-title">
      <DialogTitle id="album-dialog-title" className="pr-16 font-headline-md text-2xl">
        {album.title}
      </DialogTitle>
      <IconButton aria-label="Cerrar álbum" onClick={onClose} className="absolute top-3 right-3">
        <Close />
      </IconButton>
      <DialogContent className="pb-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 sm:flex-row">
            <img src={album.image} alt="" className="h-36 w-36 rounded-2xl object-cover" />
            <div>
              <span className="text-label-sm text-primary">{album.year}</span>
              <p className="mt-2 text-sm leading-7 text-on-surface-variant">{album.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {album.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </div>
          <div>
            <h3 className="text-label-sm uppercase text-secondary">
              {album.songs.length === album.count ? 'Canciones del álbum' : 'Canciones destacadas'}
            </h3>
            <List>
              {album.songs.map((track, index) => (
                <ListItem key={track.id} className="gap-3 rounded-2xl px-2">
                  <span className="text-sm text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <ListItemText primary={track.title} />
                  {track.duration && (
                    <span className="shrink-0 text-sm text-tertiary">{track.duration}</span>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
