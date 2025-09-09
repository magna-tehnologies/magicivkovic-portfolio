import { getPayload } from 'payload'
import './globals.css'

import config from '@/payload.config'
import Image from 'next/image'

const SITE_URL = 'http://localhost:3000'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const media = await payload.find({
    collection: 'media',
    limit: 1,
  })

  const image = media.docs[0]

  return (
    <div className='relative h-screen w-screen flex items-center'>
      <p className='text-8xl mx-auto z-50 text-white'>Yoyo Dejan</p>
      <Image
        alt={image.alt}
        src={SITE_URL + image.url}
        fill
        className='object-cover z-0'
      />
    </div>
  )
}
