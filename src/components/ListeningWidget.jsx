import { IconButton } from '@mui/material'
import PlayArrow from '@mui/icons-material/PlayArrow'
import GraphicEq from '@mui/icons-material/GraphicEq'

export default function ListeningWidget() {
  return (
    <aside
      aria-label="Escuchar en YouTube"
      className="fixed right-4 bottom-4 left-4 z-20 flex items-center gap-3 rounded-full border border-outline-variant/20 bg-white/95 px-4 py-3 shadow-[0_12px_32px_-4px_rgba(224,135,106,.22)] backdrop-blur-md sm:left-auto"
    >
      <IconButton
        component="a"
        href="https://www.youtube.com/watch?v=cg1wDc9JVB4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escuchar Al otro lado del río en YouTube (nueva pestaña)"
        className="h-10 w-10 bg-primary text-white hover:bg-primary/90"
      >
        <PlayArrow />
      </IconButton>
      <div className="flex-1">
        <p className="text-xs font-semibold">Al otro lado del río</p>
        <p className="mt-1 text-[10px] text-tertiary">Escuchar en YouTube · Óscar 2005</p>
      </div>
      <GraphicEq className="text-primary-container" />
    </aside>
  )
}
