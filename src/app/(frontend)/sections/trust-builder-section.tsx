interface TrustBuilderProps {
  header: string;
  text: string;
}

export default function TrustBuilderSection({
  header,
  text,
}: TrustBuilderProps) {
  return (
    <section className=" pt-[200px] bg-black">
      <h2 className="custom-container text-[100px] text-white">{header}</h2>
      <h3 className="custom-container text-[64px] text-stone-500">{text}</h3>
    </section>
  );
}
