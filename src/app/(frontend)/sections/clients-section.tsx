import ClientCard from '../components/clients-section-components/client-card'
const clients = [
  { place: 'Beograd', title: 'Kafeterija „Gnezdo“' },
  { place: 'Subotica', title: 'Restoran „Stari Grad“' },
  { place: 'Novi Sad', title: 'Fitnes centar „ProGym“' },
  { place: 'Beograd', title: 'IT firma „CodeWorks“' },
  { place: 'Niš', title: 'Marketinška agencija „Digital Hive“' },
  { place: 'Kragujevac', title: 'Modni butik „Linea“' },
  { place: 'Novi Sad', title: 'Pekara „Sunce“' },
  { place: 'Novi Sad', title: 'Barbershop „Gentleman“' },
  { place: 'Subotica', title: 'Turistička agencija „Putnik Travel“' },
  { place: 'Sremski Karlovci', title: 'Kozmetički salon „Bella“' },
  { place: 'Kragujevac', title: 'Muzički studio „SoundWave“' },
  { place: 'Novi Sad', title: 'Auto škola „Start“' },
  { place: 'Beograd', title: 'Restoran „Mala Trpeza“' },
  { place: 'Beograd', title: 'Kafić „Urban“' },
]

export default function ClientsSection() {
  return (
    <section className='bg-black'>
      <div className='custom-container flex flex-col gap-[50px] pt-[100px]'>
        <p className='text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-[-5%] font-medium'>
          Za mene montaža nije samo da video izgleda lepo. Radim sa klijentima
          koji žele vrhunski kvalitet – bilo da su mali startapovi ili poznate
          kompanije.
        </p>
        <div className='grid md:grid-cols-2 gap-x-12'>
          {clients.map((client) => (
            <ClientCard key={client.title} client={client}></ClientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
