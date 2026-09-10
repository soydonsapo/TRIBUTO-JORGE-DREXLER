// Contenido editorial proporcionado en el mockup.
export const albums = [
  {
    id: 'tinta-y-tiempo',
    title: 'Tinta y Tiempo',
    year: '2022',
    description:
      'Compuesto durante los meses de confinamiento, explora la incertidumbre de la página en blanco y la dicha del reencuentro corporal. Contó con los suntuosos arreglos orquestales de Fernando Velázquez.',
    tags: ['Sony Music', 'Orquestal', '7 Latin Grammys'],
    songs: [
      { id: 'el-plan-maestro', title: 'El plan maestro (con Rub?n Blades)', duration: '3:50' },
      { id: 'corazon-impar', title: 'Coraz?n impar', duration: '3:10' },
      { id: 'cinturon-blanco', title: 'Cintur?n blanco', duration: '3:40' },
      { id: 'tocarte', title: 'Tocarte (con C. Tangana)', duration: '2:34' },
      { id: 'tinta-y-tiempo-track', title: 'Tinta y tiempo', duration: '4:09' },
      { id: 'oh-algoritmo', title: '?Oh, Algoritmo! (con Noga Erez)', duration: '3:04' },
      { id: 'amor-al-arte', title: 'Amor al arte', duration: '4:30' },
      {
        id: 'el-dia-que-estrenaste-al-mundo',
        title: 'El d?a que estrenaste al mundo',
        duration: '3:09',
      },
      {
        id: 'bendito-desconcierto',
        title: 'Bendito desconcierto (con Mart?n Buscaglia)',
        duration: '3:31',
      },
      { id: 'duermevela', title: 'Duermevela', duration: '3:14' },
    ],
    image: `${import.meta.env.BASE_URL}images/tinta-y-tiempo.jpg`,
    imageAlt: 'Portada de Tinta y Tiempo de Jorge Drexler',
    count: 10,
    note: '7 Latin Grammys',
  },
  {
    id: 'salvavidas-de-hielo',
    title: 'Salvavidas de Hielo',
    year: '2017',
    description:
      'Grabado íntegramente en Ciudad de México y Madrid bajo una consigna restrictiva de taller: no utilizar ningún otro instrumento que la voz y guitarras españolas acústicas.',
    tags: ['Warner Music', 'Acoustic Only', 'Latin Grammy Winner'],
    songs: [
      {
        id: 'telefonia',
        title: 'Telefonía',
        concept:
          'Un agradecimiento emocionado a cada cable submarino, satélite y red celular que permite decirle a la persona amada que se piensa en ella a la distancia.',
        verses:
          'Bendita cada fibra óptica,\ncada satélite espacial,\nque lleva mi voz atómica\ndirecta a tu portal.\n\nTe quiero, te querré, te quise:\nno hay tecnología que precise\nun mensaje más cabal.',
      },
      {
        id: 'asilo',
        title: 'Asilo (ft. Mon Laferte)',
        concept:
          'La ternura del refugio mutuo ante un mundo exterior ruidoso y hostil. Una súplica íntima de asilo político en el abrazo del otro.',
        verses:
          'Dame asilo en tu regazo,\ndame tregua en tu costado.\nQue este mundo a cada paso\nnos quiere desamparados.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/salvavidas-de-hielo.jpg`,
    imageAlt: 'Portada de Salvavidas de Hielo de Jorge Drexler',
    count: 11,
    note: 'Solo guitarra y voz',
  },
  {
    id: 'bailar-en-la-cueva',
    title: 'Bailar en la Cueva',
    year: '2014',
    description:
      'Grabado en Bogotá, Colombia. Drexler baja por primera vez de la cabeza a los pies, explorando la cumbia, el tambor y la danza como rito ancestral de supervivencia humana.',
    tags: ['Warner Music', 'Ritmo Latino', 'Grabado en Bogotá'],
    songs: [
      {
        id: 'bailar-en-la-cueva-track',
        title: 'Bailar en la Cueva',
        concept:
          'El baile como la primera manifestación espiritual de nuestra especie antes incluso de que existiera el lenguaje articulado.',
        verses:
          'Antes de que hubiera templos,\nantes de que hubiera reyes,\nantes de que el hombre impusiera\nsus primeras leyes:\n\nBailamos en la cueva,\nbailamos ante el fuego,\ny seguimos bailando\nen este nuevo ruego.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/bailar-en-la-cueva.jpg`,
    imageAlt: 'Portada de Bailar en la Cueva de Jorge Drexler',
    count: 11,
    note: 'Grabado en Colombia',
  },
  {
    id: 'amar-la-trama',
    title: 'Amar la Trama',
    year: '2010',
    description:
      'Grabado en vivo en los míticos estudios Cata de Madrid frente a un pequeño grupo de espectadores cómplices, con una poderosa sección de metales y calidez analógica.',
    tags: ['Warner Music', 'En Vivo en Estudio', 'Vientos y Madera'],
    songs: [
      {
        id: 'la-trama-y-el-desenlace',
        title: 'La Trama y el Desenlace',
        concept:
          'El célebre aforismo drexleriano: disfrutar el viaje, el proceso y la incertidumbre en vez de obsesionarse con el desenlace o la meta.',
        verses:
          'Que no nos apuren,\nque el tiempo es ahora.\nAmar la trama más que el desenlace.\n\nDejar que la música trace\nlas curvas del camino,\nsin preguntarle al destino\nqué es lo que con nosotros hace.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/amar-la-trama.jpg`,
    imageAlt: 'Portada de Amar la Trama de Jorge Drexler',
    count: 12,
    note: 'En vivo en estudio',
  },
  {
    id: '12-segundos',
    title: '12 Segundos de Oscuridad',
    year: '2006',
    description:
      'Un álbum nocturno y catártico concebido tras una profunda ruptura sentimental en el faro solitario de Cabo Polonio (Rocha, Uruguay), cuyo destello ilumina cada 12 segundos.',
    tags: ['DRO Atlantic', 'Nocturno', 'Cabo Polonio'],
    songs: [
      {
        id: '12-segundos-track',
        title: '12 Segundos de Oscuridad',
        concept:
          'La metáfora de soportar la noche interior con la certeza matemática de que la luz del faro siempre volverá a girar.',
        verses:
          'Un haz de luz que se aleja,\ny doce segundos de oscuridad.\nNo hay brújula que te proteja,\nsolo tu propia soledad.\n\nGuarda la calma en la sombra:\nla luz que no ves, te nombra.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/12-segundos-de-oscuridad.jpg`,
    imageAlt: 'Portada de 12 Segundos de Oscuridad de Jorge Drexler',
    count: 12,
    note: 'Inspirado en Cabo Polonio',
  },
  {
    id: 'eco',
    title: 'Eco',
    year: '2004',
    description:
      "El álbum fundamental que contiene 'Todo se transforma' y marcó el lenguaje definitivo de Drexler: melodías pop cristalinas bañadas en física cuántica y décimas populares.",
    tags: ['DRO EastWest', 'Clásico Universal', 'Pop & Poesía'],
    songs: [
      {
        id: 'todo-se-transforma',
        title: 'Todo se transforma',
        concept:
          'Basada en el principio físico de conservación de la energía de Lavoisier: ninguna caricia, moneda o verso arrojado al universo desaparece jamás.',
        verses:
          'Cada uno da lo que recibe,\nluego recibe lo que da.\nNada es más simple,\nno hay otra norma:\nnada se pierde,\ntodo se transforma.\n\nEl vino guardó el racimo,\nel beso guardó la boca,\ny la memoria revive\nlo que el olvido no toca.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/eco.jpg`,
    imageAlt: 'Portada de Eco de Jorge Drexler',
    count: 12,
    note: 'Incluye «Todo se transforma»',
  },
  {
    id: 'frontera',
    title: 'Frontera',
    year: '1999',
    description:
      'Producido en Madrid junto a Juan Campodónico. El disco bisagra que combinó milongas criollas con samplers y ordenadores portátiles primitivos.',
    tags: ['Virgin', 'Milonga Electrónica', 'Piedra Angular'],
    songs: [
      {
        id: 'la-edad-del-cielo',
        title: 'La Edad del Cielo',
        concept:
          'Una reflexión sobre nuestra pequeñez cósmica y la necesidad de no malgastar el breve instante de lucidez que nos concede la existencia.',
        verses:
          'No somos más que una gota\nen este mar infinito.\nUn verso que se desborda,\nun tímido y dulce grito.\n\nCalma, calma:\nque no hay apuro\nen la edad del cielo.',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/frontera.jpg`,
    imageAlt: 'Portada de Frontera de Jorge Drexler',
    count: 11,
    note: 'Giro electrónico-acústico',
  },
]
