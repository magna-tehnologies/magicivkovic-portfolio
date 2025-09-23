import ClientCard from '../components/clients-section-components/client-card'

export interface Client {
  place: string
  client: string
}
interface ClientsSectionProps {
  header: string
  clients: Client[]
}
export default function ClientsSection({
  header,
  clients,
}: ClientsSectionProps) {
  return (
    <section className='bg-black'>
      <div className='custom-container flex flex-col gap-[50px] pt-[100px]'>
        <p className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-[-5%] font-medium'>
          {header}
        </p>
        <div className='grid md:grid-cols-2 gap-x-12'>
          {clients.map((client) => (
            <ClientCard
              key={client.place + client.client}
              client={client}
            ></ClientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
