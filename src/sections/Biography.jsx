import Icon from '../components/Icon.jsx'

export default function Biography() {
  return (
    <section
      className="w-full py-gutter-2xl px-gutter-md md:px-margin-desktop bg-surface-container-low"
      id="biografia"
    >
      <div className="max-w-[1120px] mx-auto flex flex-col gap-gutter-xl">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            BIOGRAFÍA
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mt-1">
            Biografía: De la Medicina a la Canción
          </h2>
          <div className="w-16 h-1 bg-primary-container rounded-full my-3"></div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            La travesía de un médico residente que examinaba cuerdas vocales ajenas antes de
            convertir las suyas en un instrumento de alcance mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg">
          <article className="md:col-span-7 bg-surface-container-lowest p-gutter-lg md:p-gutter-xl rounded-3xl shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-tertiary font-label-md text-label-md">
                <Icon name="medical_services" className=" text-[18px]" />
                <span className="">Montevideo · La dualidad del bisturí y el acorde</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                El médico que escuchaba el eco del mundo
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nacido en Montevideo en 1964 en el seno de una familia judía de origen alemán, Jorge
                creció respirando música clásica, bossa nova, milongas rioplatenses y murga.
                Siguiendo la tradición familiar, estudió y se licenció en <strong>Medicina</strong>,
                especializándose en <strong>Otorrinolaringología</strong>.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Durante años dividió sus jornadas entre guardias hospitalarias e íntimas noches de
                composición con una guitarra española. El diagnóstico clínico afinó su atención
                microscópica por el detalle, mientras que la poesía le ofrecía una vía para sanar
                aquello que el estetoscopio no lograba registrar.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                En 1994, tras abrir un recital de <strong>Joaquín Sabina</strong> en el Teatro de
                Verano de Montevideo, el cantautor español quedó maravillado por su lírica y lo
                invitó a viajar a Madrid. Aquel estímulo selló su destino: Jorge colgó la bata
                blanca y emprendió con un billete de ida la aventura musical en Europa.
              </p>
            </div>

            <div className="mt-gutter-lg p-5 rounded-2xl bg-surface-container flex items-start gap-4">
              <Icon name="format_quote" className=" text-primary text-[28px] shrink-0" />
              <p className="font-quote-editorial text-body-lg italic text-on-surface-variant">
                "Para mí la ciencia y el arte nunca fueron antagónicas: ambas buscan con fervor
                desentrañar el asombro de estar vivos."
              </p>
            </div>
          </article>

          <div className="md:col-span-5 flex flex-col gap-gutter-lg">
            <div className="relative w-full h-64 rounded-3xl overflow-hidden shadow-sm bg-surface-variant">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                alt="Detalle de cuaderno de notas de compositor con letras poéticas escritas a mano con tinta estilográfica, una vieja púa de guitarra y una taza de café en una mesa de madera clara con luz solar oblicua matutina estilo cálido minimalista"
                src={import.meta.env.BASE_URL + 'images/editorial-2.jpg'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/70 via-transparent to-transparent flex items-end p-6">
                <span className="font-label-md text-label-md text-on-primary">
                  Madrid, 1995: Las primeras décimas de ultramar
                </span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-gutter-lg rounded-3xl shadow-sm flex flex-col gap-4">
              <h4 className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                Coordenadas Esenciales
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed shrink-0">
                    <Icon name="location_on" className=" text-[18px]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Origen
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      Montevideo, Uruguay (21 de septiembre de 1964)
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0">
                    <Icon name="school" className=" text-[18px]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Formación Académica
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      Doctor en Medicina (Otorrinolaringólogo)
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed shrink-0">
                    <Icon name="psychology" className=" text-[18px]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Filosofía Artística
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium">
                      Métrica estricta (Décima), ciencia, empatía y pulso orgánico
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
