interface HeroSectionProps {
  hook: string;
  footer_1: string;
  footer_2: string;
  footer_3: string;
}

export default function HeroSection({
  hook,
  footer_1,
  footer_2,
  footer_3,
}: HeroSectionProps) {
  return (
    <>
      <div className="mt-2 w-full flex h-4/5 justify-center items-center">
        <h1 className="text-[10vw]">{hook.toUpperCase()}</h1>
      </div>
      <div className="px-5 flex w-full justify-self-end justify-between">
        <p className="text-red-600">{footer_1.toUpperCase()}</p>
        <p>{footer_2.toUpperCase()}</p>
        <p>{footer_3.toUpperCase()}</p>
      </div>
      ;
    </>
  );
}
