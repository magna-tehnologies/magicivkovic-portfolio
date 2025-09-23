interface TrustBuilderProps {
  header: string
  text: string
}

export default function TrustBuilderSection({
  header,
  text,
}: TrustBuilderProps) {
  return (
    <section className='bg-black'>
      <div className='custom-container flex flex-col gap-10 h-screen justify-center'>
        <h2 className='text-5xl md:text-7xl lg:text-8xl text-white font-medium'>
          {header}
        </h2>
        <h3 className='text-3xl md:text-5xl lg:text-6xl text-stone-500 font-medium'>
          {text}
        </h3>
      </div>
    </section>
  )
}
