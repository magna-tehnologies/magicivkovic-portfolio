interface Client {
  Client: string;
  Place: string;
}

interface HighlightCardProps {
  client: Client;
}

export default function ClientCard({ client }: HighlightCardProps) {
  return (
    <div key={client.Place} className="flex flex-col ">
      <div className="flex items-center gap-x-[25px] py-[50px]">
        <span className="text-[32px] font-medium text-stone-600">
          {client.Client}
        </span>
        <span className="text-[24px] font-extralight text-stone-600">
          {client.Place}
        </span>
      </div>
      <div className="h-px w-full bg-stone-800" />
    </div>
  );
}
