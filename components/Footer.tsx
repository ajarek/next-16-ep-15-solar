import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  return (
    <footer className='w-full bg-background pt-16 pb-8 border-t border-border/40'>
      <div className='w-full max-w-[1520px] mx-auto px-8 lg:px-16'>
        <div className='flex flex-col lg:flex-row justify-between items-start mb-16 gap-8'>
          <Link href='/' className='flex items-center gap-4'>
            <Image
              src='/images/logo.jpg'
              alt='SolarSystem Logo'
              width={40}
              height={40}
              className='rounded-full'
            />
            <span className='text-xl font-bold tracking-tight'>
              SolarSystem
            </span>
          </Link>
          <p className='text-muted-foreground text-sm font-medium italic'>
            Zbudowane na efektywności
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24'>
          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-wider'>
              Produkt
            </h3>
            <Link
              href='/products'
              className='text-sm hover:text-primary transition-colors'
            >
              Panele fotowoltaiczne
            </Link>
            <Link
              href='/products'
              className='text-sm hover:text-primary transition-colors'
            >
              Magazyny energii
            </Link>
            <Link
              href='/products'
              className='text-sm hover:text-primary transition-colors'
            >
              Pompy ciepła
            </Link>
            <Link
              href='/products'
              className='text-sm hover:text-primary transition-colors'
            >
              Ładowarki EV
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-wider'>
              Rozwiązania
            </h3>
            <Link
              href='/solutions'
              className='text-sm hover:text-primary transition-colors'
            >
              Dla domu
            </Link>
            <Link
              href='/solutions'
              className='text-sm hover:text-primary transition-colors'
            >
              Dla firm
            </Link>
            <Link
              href='/solutions'
              className='text-sm hover:text-primary transition-colors'
            >
              Dla rolnictwa
            </Link>
            <Link
              href='/solutions'
              className='text-sm hover:text-primary transition-colors'
            >
              Farmy PV
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-wider'>
              Firma
            </h3>
            <Link
              href='/about'
              className='text-sm hover:text-primary transition-colors'
            >
              O nas
            </Link>
            <Link
              href='/projects'
              className='text-sm hover:text-primary transition-colors'
            >
              Realizacje
            </Link>
            <Link
              href='/blog'
              className='text-sm hover:text-primary transition-colors'
            >
              Blog
            </Link>
            <Link
              href='/careers'
              className='text-sm hover:text-primary transition-colors'
            >
              Kariera
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-wider'>
              Wsparcie
            </h3>
            <Link
              href='/contact'
              className='text-sm hover:text-primary transition-colors'
            >
              Kontakt
            </Link>
            <Link
              href='/faq'
              className='text-sm hover:text-primary transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='/service'
              className='text-sm hover:text-primary transition-colors'
            >
              Serwis
            </Link>
            <Link
              href='/privacy'
              className='text-sm hover:text-primary transition-colors'
            >
              Polityka prywatności
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-wider'>
              Dołącz do nas
            </h3>
            <div className='flex w-full items-center space-x-2'>
              <Input
                type='email'
                placeholder='twoj@email.com'
                className='bg-background'
              />
              <Button type='submit'>Dołącz</Button>
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-border/40 text-muted-foreground text-xs flex flex-col md:flex-row justify-between items-center gap-4'>
          <p>© 2026 SolarSystem Inc. Wszelkie prawa zastrzeżone.</p>
          <div className='flex gap-6'>
            <Link
              href='/terms'
              className='hover:text-foreground transition-colors'
            >
              Regulamin
            </Link>
            <Link
              href='/privacy'
              className='hover:text-foreground transition-colors'
            >
              Prywatność
            </Link>
            <Link
              href='/sitemap'
              className='hover:text-foreground transition-colors'
            >
              Mapa strony
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
