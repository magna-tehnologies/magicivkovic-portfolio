interface HeaderSectionProps {
  brandName: string;
}

export default function HeaderSection({ brandName }: HeaderSectionProps) {
  return (
    <section className="h-100 w-full flex flex-col items-center ">
      <div className="w-full flex justify-center items-center rounded">
        <h1 className="font-mono text-[2vw]">{brandName}</h1>
      </div>
    </section>
  );
}
