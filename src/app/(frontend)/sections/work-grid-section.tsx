import HighlightCard from "../components/work-grid-components/highlight-card";

export default function WorkGridSection() {
  const projects = [
    { id: "01", title: "TikTok reklama za fitnes trenera" },
    { id: "02", title: "Instagram Reels za modni brend" },
    { id: "03", title: "YouTube vlog montaža" },
    { id: "04", title: "Promo video za firmu" },
    { id: "05", title: "Promo video za firmu" },
    { id: "06", title: "Video reklama za e-commerce proizvode" },
    { id: "07", title: "Podcast isečci za društvene mreže" },
    { id: "08", title: "Reklama za restoran" },
  ];

  return (
    <section className="px-10 h-screen flex flex-col gap-12">
      <p className="text-[64px] font-medium leading-[80px] text-black">
        Sa više od 3 godine iskustva u montaži, stotine preduzetnika i brendova
        angažovalo me da kreiram videe za društvene mreže i marketing kampanje.
      </p>

      <div className="grid grid-cols-2 gap-12 flex-1">
        <HighlightCard projects={projects}></HighlightCard>
      </div>
    </section>
  );
}
