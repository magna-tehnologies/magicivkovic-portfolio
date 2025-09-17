import ClientCard from "../components/place-section-components/client-card";
const clients = [
  { place: "Beograd", title: "Kafeterija „Gnezdo“" },
  { place: "Subotica", title: "Restoran „Stari Grad“" },
  { place: "Novi Sad", title: "Fitnes centar „ProGym“" },
  { place: "Beograd", title: "IT firma „CodeWorks“" },
  { place: "Niš", title: "Marketinška agencija „Digital Hive“" },
  { place: "Kragujevac", title: "Modni butik „Linea“" },
  { place: "Novi Sad", title: "Pekara „Sunce“" },
  { place: "Novi Sad", title: "Barbershop „Gentleman“" },
  { place: "Subotica", title: "Turistička agencija „Putnik Travel“" },
  { place: "Sremski Karlovci", title: "Kozmetički salon „Bella“" },
  { place: "Kragujevac", title: "Muzički studio „SoundWave“" },
  { place: "Novi Sad", title: "Auto škola „Start“" },
  { place: "Beograd", title: "Restoran „Mala Trpeza“" },
  { place: "Beograd", title: "Kafić „Urban“" },
];

export default function PlacesSection() {
  return (
    <section className={"bg-black"}>
      <p className={"mx-auto max-w-[1360px] text-[64px] text-white"}>
        Za mene montaža nije samo da video izgleda lepo. Radim sa klijentima
        koji žele vrhunski kvalitet – bilo da su mali startapovi ili poznate
        kompanije.
      </p>

      <div className="grid grid-cols-2 gap-x-12 px-[40px] ">
        <ClientCard projects={clients}></ClientCard>
      </div>
    </section>
  );
}
