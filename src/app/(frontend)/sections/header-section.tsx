export default function HeaderSection() {
  return (
    <header className='h-[100px] flex items-center justify-between p'>
      <p className='text-2xl font-bold col-span-1 md:col-span-3'>
        MAGICIVKOVIC
      </p>
      <div className='font-medium col-span-1 text-end md:hidden'>Menu</div>
      <div className='gap-5 col-span-7 justify-end items-center hidden md:flex'>
        <a className='font-medium'>INSTAGRAM</a>
        <a className='font-medium'>PORTFOLIO</a>
        <a className='font-bold bg-teal-200 px-6 py-2 rounded-full'>KURS</a>
      </div>
    </header>
  )
  // return
  //   <header className='h-[100px] grid grid-cols-2 md:grid-cols-12 items-center p'>
  //     <p className='text-2xl font-bold col-span-1 md:col-span-3'>
  //       MAGICIVKOVIC
  //     </p>
  //     <p className='text-xl font-medium text-nowrap col-span-2 hidden md:block'>
  //       Novi Sad, Srbija 10:22
  //     </p>
  //     <div className='text-xl font-medium col-span-1 text-end md:hidden'>
  //       Menu
  //     </div>
  //     <div className='gap-5 col-span-7 justify-end items-center hidden md:flex'>
  //       <a className='font-medium'>INSTAGRAM</a>
  //       <a className='font-medium'>PORTFOLIO</a>
  //       <a className='font-medium bg-teal-200 px-6 py-2 rounded-full'>KURS</a>
  //     </div>
  //   </header>
  // )
}
