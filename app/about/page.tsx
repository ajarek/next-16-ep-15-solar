import Image from "next/image"
import { Button } from "@/components/ui/moving-border"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Zap } from "lucide-react"
import { values, stats } from "@/data/about"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-16 pt-16 '>
      <div className='relative h-60 w-full  '>
        <Image
          src='/images/hero.webp'
          alt='Solar Panels on Roof'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 animate__animated animate__fadeIn'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
            Energia Przyszłości <span className='text-primary'>Dziś</span>
          </h1>
          <p className='text-lg md:text-2xl max-w-2xl text-gray-200 leading-relaxed'>
            Jesteśmy liderem w dziedzinie nowoczesnych rozwiązań
            fotowoltaicznych. Poznaj naszą historię i dołącz do zielonej
            rewolucji.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'>
              <Sun className='h-4 w-4' />
              Nasza Misja
            </div>
            <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
              Zmieniamy świat na lepsze, <br /> jeden dach na raz.
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed '>
              Wierzymy, że energia słoneczna powinna być dostępna dla każdego.
              Naszym celem jest edukacja i dostarczanie systemów, które nie
              tylko obniżają rachunki, ale przede wszystkim dają naszym klientom
              niezależność energetyczną.
            </p>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              Każdego dnia nasz zespół inżynierów i specjalistów pracuje nad
              doskonaleniem procesów, aby instalacja fotowoltaiki była prosta,
              szybka i przyjemna.
            </p>
            <div className='pt-4'>
              <Link href='/products'>
                <Button className='cursor-pointer'>
                  Poznaj nasze produkty
                </Button>
              </Link>
            </div>
          </div>
          <div className='relative h-100 md:h-125 rounded-3xl overflow-hidden shadow-xl group'>
            <Image
              src='/images/energy-management.webp'
              alt='Energy Management'
              fill
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/50 to-transparent' />
          </div>
        </div>
      </div>

      <div className='bg-primary text-primary-foreground py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='space-y-2 p-4 rounded-xl hover:bg-primary-foreground/10 transition-colors'
              >
                <p className='text-4xl md:text-5xl font-extrabold'>
                  {stat.value}
                </p>
                <p className='text-primary-foreground/80 font-medium tracking-wide'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 space-y-12'>
        <div className='text-center max-w-3xl mx-auto space-y-4'>
          <h2 className='text-3xl font-bold'>Dlaczego My?</h2>
          <p className='text-muted-foreground text-lg'>
            Wybierając nas, wybierasz partnera, któremu możesz zaufać. Oto
            wartości, którymi kierujemy się w naszej codziennej pracy.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16'>
          {values.map((value, index) => (
            <Card
              key={index}
              className='border-none shadow-lg bg-card/50 backdrop-blur-sm hover:-translate-y-1.25 transition-all duration-300'
            >
              <CardHeader className='space-y-4'>
                <div className='w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center'>
                  {value.icon}
                </div>
                <CardTitle className='text-xl'>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground leading-relaxed'>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-16'>
        <div className='relative rounded-3xl overflow-hidden bg-zinc-900 text-white p-8 md:p-16 text-center'>
          <div className='absolute inset-0 opacity-20'>
            <Image
              src='/images/smart-help-2.webp'
              alt='Background'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative z-10 max-w-3xl mx-auto space-y-8'>
            <div className='inline-block p-3 rounded-full bg-white/10 mb-4 backdrop-blur-md border border-white/20'>
              <Zap className='h-8 w-8 text-yellow-400 fill-yellow-400' />
            </div>
            <h2 className='text-3xl md:text-5xl font-bold'>
              Zacznij oszczędzać już teraz
            </h2>
            <p className='text-xl text-gray-300'>
              Skontaktuj się z nami, a przygotujemy dla Ciebie indywidualną
              wycenę oraz projekt instalacji zupełnie za darmo.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <Link href='/contact'>
                <Button className='cursor-pointer'>Skontaktuj się</Button>
              </Link>
              <Link href='/products'>
                <Button className='cursor-pointer'>Zobacz ofertę</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
