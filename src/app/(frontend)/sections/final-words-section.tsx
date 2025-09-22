interface FinalWordSectionProps {
  text1: string;
  text2: string;
  text3: string;
}

export default function FinalWordsSection({
  text1,
  text2,
  text3,
}: FinalWordSectionProps) {
  return (
    <section className="bg-black h-[100vh] flex flex-col  justify-center items-center gap-[100px]">
      <p className="text-[24px] text-white   ">{text1}</p>
      <h2 className="text-[150px] text-white  ">{text2}</h2>
      <p className="text-[24px] text-white max-w-[236px] text-center">
        {text3}
      </p>
    </section>
  );
}
