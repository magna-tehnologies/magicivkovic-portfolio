interface Client {
  place: string;
  title: string;
}

interface HighlightCardProps {
  client: Client;
}

export default function ClientCard({ client }: HighlightCardProps) {
  return (
    <div key={client.title} className="flex flex-col ">
      <div className="flex items-center gap-x-[25px]  py-[50px] ">
        <span className="text-[32px] font-medium text-stone-600  font-poppins ">
          {client.title}
        </span>
        <span className="text-[24px] font-light text-stone-500  font-poppins ml-auto">
          {client.place}
        </span>
      </div>
      <div className="h-[1px] w-full bg-stone-800" />
    </div>
  );
}
