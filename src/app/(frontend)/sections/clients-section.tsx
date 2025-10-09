import { Content } from '@/payload-types'
import ClientCard from '../components/clients-section-components/client-card'
export interface Client {
  place: string
  client: string
}
interface ClientsSectionProps {
  header: Content['clientCardHeading']
  clients: Content['clientCards']
}
export default function ClientsSection({
  header,
  clients,
}: ClientsSectionProps) {
  const objectClients = clients?.filter((c) => typeof c !== 'number')

  return (
    <section className='bg-black'>
      <div className='custom-container flex flex-col gap-[50px] pt-[100px]'>
        <p className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-[-5%] font-medium'>
          {header}
        </p>
        <div className='grid md:grid-cols-2 gap-x-12'>
          {objectClients?.map((client) => (
            <ClientCard key={client.Place + client.Client} client={client} />
          ))}
        </div>
      </div>
    </section>
  )
}
