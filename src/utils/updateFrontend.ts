export async function revalidatePage(slug: string) {
  const secret = process.env.PAYLOAD_PUBLIC_FRONTEND_SECRET
  const baseUrl = process.env.PAYLOAD_PUBLIC_FRONTEND_URL

  if (!secret || !baseUrl) return

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5000)

  try {
    const url = new URL('/api/revalidate', baseUrl)
    url.searchParams.set('secret', secret)
    url.searchParams.set('slug', slug)

    console.log(url.toString())

    const res = await fetch(url.toString(), {
      method: 'GET',
      signal: controller.signal,
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error(
        `Revalidate failed: ${res.status} ${res.statusText} ${text}`
      )
    }
    console.log('Revalidation triggered')
  } catch (e) {
    console.log(e)
  } finally {
    clearTimeout(timeout)
  }
}
