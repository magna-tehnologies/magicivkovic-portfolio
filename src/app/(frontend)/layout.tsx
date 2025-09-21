export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

type RootLayoutProps = {
  children: React.ReactNode
}

import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
})

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
