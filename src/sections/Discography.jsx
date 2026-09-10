import { useState } from 'react'
import Section from '../components/Section.jsx'
import AlbumCard from '../components/AlbumCard.jsx'
import AlbumDialog from '../components/AlbumDialog.jsx'
import { albums } from '../data/discography.js'

export default function Discography() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Section
        id="musica"
        eyebrow="Música"
        title="Discografía Interactiva"
        description="Haz clic en cualquier álbum para sumergirte en el listado de canciones."
        tinted
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} onSelect={setSelected} />
          ))}
        </div>
      </Section>
      {selected && (
        <AlbumDialog key={selected.id} album={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
