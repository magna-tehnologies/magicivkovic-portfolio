import { Content } from '@/payload-types'

interface FinalWordSectionProps {
  text1: Content['finalWordsText']
  text2: Content['secondFinalWordsText']
  text3: Content['thirdFinalWordsText']
}

export default function FinalWordsSection({
  text1,
  text2,
  text3,
}: FinalWordSectionProps) {
  return (
    <section className='bg-black h-[100vh]'>
      <div className='custom-container h-full flex flex-col justify-center items-center gap-[100px]'>
        <p className='text-xl md:text-2xl text-white'>{text1}</p>
        <h2 className='text-[max(10vw,_64px)] text-white font-medium'>
          {text2}
        </h2>
        <p className='text-xl md:text-2xl text-white text-center'>{text3}</p>
      </div>
    </section>
  )
}
