import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className='relative h-[600px] w-full overflow-hidden'>
      <Image src='/images/hero.webp' alt='Logo' fill className='object-cover' />
      <div className='absolute inset-0 bg-black opacity-25'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
        <h1 className='text-5xl text-center font-bold text-white'>
          Sprzedaż i Montaż paneli słonecznych
        </h1>
        <p className='text-center text-white text-xl'>
          Uzyskaj bezpłatną wycenę
        </p>
        <Button className='mt-4 rounded px-6 py-2 cursor-pointer'>
          Zacznij teraz
        </Button>
      </div>
    </div>
  )
}

export default Header
