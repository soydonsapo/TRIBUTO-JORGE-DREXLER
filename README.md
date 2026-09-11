# Tributo a Jorge Drexler

Sitio editorial en React y JavaScript basado en el diseño Acoustic Poetics de la carpeta local `.mockups`.

## Iniciar

Requiere Node.js 24 LTS y npm. Abre una terminal nueva si acabas de instalar Node.js.

```powershell
npm.cmd install
npm.cmd run dev
```

Abre la dirección que indique Vite, normalmente http://localhost:5173. El servidor debe permanecer en ejecución.
En PowerShell se usa `npm.cmd` para evitar las restricciones de ejecución de `npm.ps1`.

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` compila y publica el sitio automáticamente en
cada push a `main`. En el repositorio, configura estos secretos en Settings > Secrets and variables
> Actions:

- `VITE_SUPABASE_URL`: `https://ysfbmyeldtlgwndtyqcj.supabase.co`
- `VITE_SUPABASE_ANON_KEY`: la clave pública `publishable` del proyecto Supabase

En Settings > Pages selecciona `GitHub Actions` como fuente de publicación. La clave `publishable`
es segura para incluir en el bundle del navegador; nunca configures `service_role` como secreto de
build ni en el código cliente.

## Supabase

La suscripción guarda nombre y correo en `public.newsletter_subscribers`. La migración activa RLS,
permite insertar desde el navegador y no permite leer los registros desde la clave pública.

Para desarrollo local, instala Docker Desktop y ejecuta:

```powershell
npx.cmd supabase start
npx.cmd supabase status
```

Usa la URL API y la `anon key` que muestra `supabase status` en `.env.local`:

```env
VITE_SUPABASE_URL=http://127.0.0.1:54321
VITE_SUPABASE_ANON_KEY=tu-anon-key-local
```

Para un proyecto alojado, autentica la CLI con `npx.cmd supabase login`, enlázalo con
`npx.cmd supabase link --project-ref <project-ref>` y aplica la migración con
`npx.cmd supabase db push`. Consulta las credenciales públicas con `npx.cmd supabase status` o
desde Project Settings > API. La `service_role` nunca debe ir en `.env.local` del navegador.

## Tecnología y estructura

- React 19 con componentes funcionales, estado local y listas basadas en datos.
- MUI para botones, tarjetas, diálogos, menú móvil, campos y avisos. Tema en `src/theme.js`.
- Tailwind CSS 4 para grids, flex, espaciado, colores y adaptación a pantallas. Integración con Vite y capas CSS para que sus utilidades puedan personalizar MUI.
- Fuentes Playfair Display y Plus Jakarta Sans servidas localmente mediante Fontsource.
- `src/sections/`: inicio, biografía, trayectoria, discografía, videos y comunidad.
- `src/components/`: encabezado, tarjetas, diálogos, secciones y otros elementos reutilizables.
- `src/data/`: álbumes, canciones, hitos y enlaces de videos.
- `public/images/`: imágenes editoriales del mockup, copiadas para que la aplicación no dependa de `.mockups` ni de enlaces temporales.

## Funcionalidades y alcance

Navegación por secciones y menú móvil; siete álbumes con detalle de canciones; carrusel de cinco videos; formulario con validación y registro en Supabase; acceso a la escucha en YouTube. Los diálogos permiten cerrar con Escape y devuelven el foco al elemento de origen. Se respeta la preferencia de movimiento reducido.

El mockup no incluye archivos de audio. El control flotante abre el video oficial en YouTube en lugar de simular una reproducción. Las imágenes y textos editoriales proceden del mockup; las lecturas poéticas no se presentan como transcripciones verificadas de letras. Este proyecto es un tributo independiente.

## Verificación

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run test:e2e
npm.cmd run format:check
```

Las pruebas Playwright usan Google Chrome instalado y cubren escritorio y móvil: imágenes, ausencia de desbordamiento, navegación, diálogos, canciones, carrusel y validación del formulario. Para utilizar otro navegador cambia `channel` en `playwright.config.js`. Los resultados y capturas quedan en `.test-results/`, que permanece local.

```powershell
npm.cmd run format
npm.cmd run preview
```

`dist/` contiene la compilación de producción; `preview` sirve esa compilación localmente.

La regla de `.gitignore` conserva localmente todos los archivos y carpetas cuyo nombre empieza por punto, salvo `.gitignore`. La aplicación no requiere esos archivos para compilar.

## Referencias

- [Integración oficial de MUI con Tailwind CSS 4](https://mui.com/material-ui/integrations/tailwindcss/tailwindcss-v4/).
- [Instalación de Tailwind con Vite](https://tailwindcss.com/docs/installation/using-vite).
- Los enlaces oficiales de los videos están en `src/data/videos.js`.
