import Image from "next/image"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import LengthCart from "./LengthCart"
import { ShoppingCart } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <nav className='w-full max-w-[1520px] mx-auto fixed h-16 top-0 left-0 right-0 z-50 flex justify-between items-center lg:px-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'>
      <Link href='/' className='flex items-center gap-4'>
        <Image
          src='/images/logo.jpg'
          alt='Logo'
          width={50}
          height={50}
          className='rounded-full'
        />
        <h1 className='text-2xl font-bold'>SolarSystem</h1>
      </Link>
      <div className='flex items-center gap-4 text-xl font-semibold max-lg:hidden'>
        <Link href='/products'>Produkty</Link>
        <Link href='/services'>Usługi</Link>
        <Link href='/about'>O nas</Link>
        <Link href='/contact'>Kontakt</Link>
        <Link href='/cart' className='relative flex items-center gap-2'>
          <ShoppingCart className=' w-6 h-6' />{" "}
          <span className='absolute bottom-3 left-4 w-6 h-6 border-2 border-primary rounded-full  flex items-center justify-center '>
            <LengthCart />
          </span>
        </Link>
        <ModeToggle />
      </div>
      <SheetNav />
    </nav>
  )
}

export default Navbar
