interface Client {
  place: string
  title: string
}

interface HighlightCardProps {
  client: Client
}

export default function ClientCard({ client }: HighlightCardProps) {
  return (
    <div key={client.title}>
      <div className='flex justify-between items-center py-[50px] gap-6'>
        <span className='text-xl lg:text-2xl font-medium text-stone-600  font-poppins '>
          {client.title}
        </span>
        <span className='text-lg md:text-2xl font-extralight text-stone-600 text-nowrap'>
          {client.place}
        </span>
      </div>
      <div className='h-px w-full bg-stone-800' />
    </div>
  )
}
