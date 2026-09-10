export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tinted = false,
  align = 'center',
  actions,
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`px-5 py-16 md:px-12 ${tinted ? 'bg-surface-container-low' : ''}`}
    >
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div
          className={`flex gap-6 ${align === 'center' ? 'flex-col items-center text-center' : 'flex-col md:flex-row md:items-end md:justify-between'}`}
        >
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              {eyebrow}
            </span>
            <h2
              id={`${id}-title`}
              className="mt-2 font-headline-lg text-headline-lg-mobile md:text-headline-lg"
            >
              {title}
            </h2>
            <div
              className={`my-3 h-1 w-16 rounded-full bg-primary-container ${align === 'center' ? 'mx-auto' : ''}`}
            />
            <p className="text-body-md text-on-surface-variant">{description}</p>
          </div>
          {actions}
        </div>
        {children}
      </div>
    </section>
  )
}
