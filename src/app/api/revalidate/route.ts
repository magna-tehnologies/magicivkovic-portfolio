import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  // const secret = searchParams.get('secret')

  // if (secret !== process.env.FRONTEND_SECRET) {
  //   return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  // }

  if (!slug) {
    console.log('Missing slug')
    return NextResponse.json({ message: 'Missing slug' }, { status: 400 })
  }

  try {
    console.log('Revalidated path')
    revalidatePath('/')

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
