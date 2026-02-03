import Image from "next/image"
import { Button } from "@/components/ui/moving-border"
import Link from "next/link"

const SolarPanel = () => {
  return (
    <div className='grid flex-col-reverse grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8'>
      <div className='w-full max-w-xl flex flex-col justify-center gap-4 px-4 md:px-8'>
        <p>Panele Słoneczne</p>
        <h1 className="text-4xl font-bold">Wysokiej jakości panele słoneczne do domu.</h1>
        <p>
          Zapewniamy kompleksową obsługę od projektu po instalację.
          <br />
          Nasze panele słoneczne są wykonane z najwyższej jakości materiałów i
          są objęte długoletnią gwarancją.
          <br />
          Zapewniamy konkurencyjne ceny i szybką realizację zamówienia.
          <br />
          Skontaktuj się z nami już dziś, aby uzyskać bezpłatną wycenę.
          <br />
          Zadzwoń pod numer: 123-456-789
          <br />
          Napisz na adres: <Link href="mailto:solar_system@poczta.onet.pl" className="text-purple-500">solar_system@poczta.onet.pl</Link>
        </p>
        <Link href='/services'>
        <Button
          borderRadius='1.75rem'
          className=' bg-transparent border text-xl text-primary cursor-pointer hover:bg-primary/50'
        >
          Dowiedz się więcej
        </Button>
        </Link>
      </div>
      <div className='relative px-8'>
        <Image
          src='/images/solar-homes.webp'
          alt='Solar Panel'
          width={720}
          height={480}
          className='rounded-lg'
        />
      </div>
    </div>
  )
}

export default SolarPanel
