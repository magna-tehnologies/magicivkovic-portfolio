const HeaderSection = () => {
  return (
    <section className="h-4/5 w-full flex flex-col items-center ">
      <div className="w-full flex justify-center items-center rounded">
        <h1 className="font-mono text-[2vw]">magicIvkovic</h1>
      </div>

      <div className="mt-2 w-full flex h-4/5 justify-center items-center">
        <h1 className="text-[10vw]">CONTENT CREATOR</h1>
      </div>

      <div className="px-5 flex w-full justify-self-end justify-between">
        <p className="text-red-600">KURS</p>
        <p>NEWSLETTER</p>
        <p>EDITOVANJE</p>
      </div>
    </section>
  );
};

export default HeaderSection;
