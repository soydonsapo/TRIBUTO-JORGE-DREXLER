const tones = {
  primary: { text: 'text-primary', dot: 'bg-primary', note: 'bg-surface-container-low' },
  secondary: { text: 'text-secondary', dot: 'bg-secondary', note: 'bg-secondary-container/40' },
  tertiary: { text: 'text-tertiary', dot: 'bg-tertiary', note: 'bg-surface-container-high' },
}

export default function TimelineItem({ milestone, reverse }) {
  const tone = tones[milestone.tone]
  return (
    <li className="relative grid gap-4 pl-10 md:grid-cols-2 md:items-center md:gap-24 md:pl-0">
      <div className={reverse ? 'md:col-start-2' : 'md:text-right'}>
        <span className={`text-label-sm uppercase ${tone.text}`}>{milestone.label}</span>
        <h3 className="mt-1 font-headline-md text-headline-md">{milestone.title}</h3>
        <p className="mt-2 text-body-sm text-on-surface-variant">{milestone.description}</p>
      </div>
      <span
        aria-hidden="true"
        className={`absolute top-2 left-0 h-6 w-6 rounded-full border-4 border-background ${tone.dot} md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
      />
      <p
        className={`rounded-2xl p-5 text-body-sm text-on-surface-variant ${tone.note} ${reverse ? 'md:col-start-1 md:row-start-1' : ''}`}
      >
        {milestone.note}
      </p>
    </li>
  )
}
