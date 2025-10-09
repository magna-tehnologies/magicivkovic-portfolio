import { Content } from '@/payload-types'

interface FooterProps {
  footerText: Content['footerText']
  rights: Content['rightsText']
}

export default function Footer({ footerText, rights }: FooterProps) {
  return (
    <footer className='bg-black flex justify-between px-[40px] pb-[20px]'>
      <p className='text-[14px] text-stone-600 font-medium'>{footerText}</p>
      <p className='text-[14px] text-stone-600 font-medium'>{rights}</p>
    </footer>
  )
}
