interface WhatWeDoSectionProps {
  text: string;
}

export default function WhatWeDoSection({ text }: WhatWeDoSectionProps) {
  return (
    <section className="px-10">
      <div className="bg-teal-200 rounded-2xl h-[70vh] text-6xl pt-[120px] px-[60px] font-medium leading-tight">
        {text}
      </div>
    </section>
  );
}
