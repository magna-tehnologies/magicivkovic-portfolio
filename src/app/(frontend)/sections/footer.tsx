interface FooterProps {
  footerText: string;
  rights: string;
}

export default function Footer({ footerText, rights }: FooterProps) {
  return (
    <footer className="bg-black flex justify-between px-[40px] pb-[20px]">
      <p className="text-[14px] text-stone-600 font-medium">{footerText}</p>
      <p className="text-[14px] text-stone-600 font-medium">{rights}</p>
    </footer>
  );
}
