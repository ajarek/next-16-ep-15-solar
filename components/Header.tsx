import Image from "next/image"
import { Button } from "@/components/ui/moving-border"
import TextType from "./TextType"
import Link from "next/link"

const Header = () => {
  return (
    <div className='relative h-[600px] w-full overflow-hidden'>
      <Image
        src='/images/hero.webp'
        alt='Logo'
        fill
        loading='eager'
        className='object-cover'
      />
      <div className='absolute inset-0 bg-black opacity-25'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-4'>
        <TextType
          text={["Sprzedaż i Montaż Paneli Słonecznych"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter='_'
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
          className='text-5xl text-center font-bold text-white'
        />
        <p className='text-center text-white text-xl'>
          Uzyskaj bezpłatną wycenę
        </p>
        <Link href='/products'>
          <Button
            borderRadius='1.75rem'
            className=' bg-transparent border text-xl cursor-pointer hover:bg-primary/50'
          >
            Sprawdź ofertę
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Header
