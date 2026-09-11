import { test, expect } from '@playwright/test'

test('carga el diseño, imágenes y secciones sin desbordamiento', async ({ page }, testInfo) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('#musica article')).toHaveCount(7)
  for (const id of ['inicio', 'biografia', 'trayectoria', 'musica', 'conoce-mas', 'comunidad']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded()
    await expect(page.locator(`#${id}`)).toBeVisible()
  }
  await page.locator('img').evaluateAll((images) =>
    images.forEach((image) => {
      image.loading = 'eager'
    }),
  )
  await expect
    .poll(() =>
      page
        .locator('img')
        .evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0)),
    )
    .toBe(true)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  )
  expect(errors).toEqual([])
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await page.screenshot({ path: `.test-results/${testInfo.project.name}.png`, fullPage: true })
})

test('muestra canciones sin botones y permite cerrar cada álbum', async ({ page }) => {
  await page.goto('/')
  const card = page.getByRole('button', { name: 'Explorar Tinta y Tiempo', exact: true })
  await card.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByText('Canciones del álbum')).toBeVisible()
  await expect(dialog.getByRole('listitem')).toHaveCount(10)
  await expect(dialog.getByText('Duermevela', { exact: true })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(card).toBeFocused()
  const cards = page.locator('#musica article').getByRole('button')
  for (let index = 0; index < (await cards.count()); index++) {
    await cards.nth(index).click()
    await expect(dialog.getByRole('button')).toHaveCount(1)
    const rows = dialog.getByRole('listitem')
    for (const row of await rows.all()) {
      await expect(row).toContainText(/\d+:\d{2}/)
      await expect(row.locator('svg, button, a, [role="button"]')).toHaveCount(0)
    }
    await rows.first().click()
    await expect(dialog.getByRole('list')).toBeVisible()
    await expect(
      dialog.getByText(/Letra pendiente|Explorar la canción|Lectura poética/),
    ).toHaveCount(0)
    await dialog.getByRole('button', { name: 'Cerrar álbum' }).click()
  }
})

test('valida el formulario y registra una suscripción', async ({ page }) => {
  await page.route('**/rest/v1/newsletter_subscribers*', async (route) => {
    await route.fulfill({ status: 201, body: '' })
  })
  await page.goto('/')
  await page.getByRole('button', { name: 'Unirme al círculo' }).click()
  await expect(page.getByText('Escribe tu nombre (al menos 2 caracteres).')).toBeVisible()
  await page.getByLabel('Nombre y apellido').fill('Sergio')
  await page.getByLabel('Correo electrónico').fill('invalido')
  await page.getByRole('button', { name: 'Unirme al círculo' }).click()
  await expect(page.getByText('Escribe un correo electrónico válido.')).toBeVisible()
  await page.getByLabel('Correo electrónico').fill('sergio@example.com')
  await page.getByRole('button', { name: 'Unirme al círculo' }).click()
  await expect(page.getByRole('status')).toContainText('Ya estás en el círculo')
})

test('el carrusel desplaza videos y el menú navega a música', async ({ page }, testInfo) => {
  await page.goto('/')
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Abrir menú' }).click()
    await page
      .getByRole('navigation', { name: 'Navegación móvil' })
      .getByText('Música', { exact: true })
      .click()
    await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).not.toBeVisible()
  } else {
    await page
      .getByRole('navigation', { name: 'Navegación principal' })
      .getByText('Música', { exact: true })
      .click()
  }
  await expect(page).toHaveURL(/#musica$/)
  const carousel = page.getByRole('region', { name: 'Videos de Jorge Drexler' })
  await page.getByRole('button', { name: 'Siguiente video' }).click()
  await expect.poll(() => carousel.evaluate((element) => element.scrollLeft)).toBeGreaterThan(100)
  await expect(page.getByRole('button', { name: 'Video anterior' })).toBeEnabled()
})
