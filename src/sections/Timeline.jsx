import Section from '../components/Section.jsx'
import TimelineItem from '../components/TimelineItem.jsx'
import { milestones } from '../data/milestones.js'

export default function Timeline() {
  return (
    <Section
      id="trayectoria"
      eyebrow="Trayectoria"
      title="Una Carrera de Asombro Constante"
      description="Tres décadas tejiendo puentes entre la tradición poética de los dos hemisferios y los sonidos más vanguardistas."
    >
      <ol className="relative flex flex-col gap-8 before:absolute before:top-4 before:bottom-4 before:left-3 before:w-0.5 before:bg-outline-variant md:before:left-1/2 md:before:-translate-x-1/2">
        {milestones.map((milestone, index) => (
          <TimelineItem key={milestone.id} milestone={milestone} reverse={index % 2 === 1} />
        ))}
      </ol>
    </Section>
  )
}
