import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/data/services"
import Link from "next/link"

const Services = () => {
  return (
    <div className='flex flex-col gap-10 pb-20'>
      {/* Hero Section */}
      <div className='relative h-[400px] w-full overflow-hidden  shadow-2xl'>
        <Image
          src='/images/solar-homes.webp'
          alt='Services Hero'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/80 to-transparent'></div>
        <div className='absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-white max-w-4xl'>
          <h1 className='text-5xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInUp'>
            Nasze Usługi
          </h1>
          <p className='text-xl md:text-2xl text-gray-200 animate__animated animate__fadeInUp animate__delay-1s'>
            Kompleksowe, innowacyjne i ekologiczne rozwiązania energetyczne dla
            Twojego domu i biznesu.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className='px-4 md:px-8 text-center max-w-3xl mx-auto py-8'>
        <h2 className='text-3xl font-bold mb-4'>W czym możemy Ci pomóc?</h2>
        <p className='text-muted-foreground text-lg'>
          Jesteśmy ekspertami w dziedzinie odnawialnych źródeł energii.
          Oferujemy pełen wachlarz usług, od projektu aż po serwis, zapewniając
          Ci spokój i oszczędności na lata.
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12'>
        {services.map((service, index) => (
          <Card
            key={index}
            className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card'
          >
            <div className='relative h-48 overflow-hidden'>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300' />
              <div className='absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg backdrop-blur-sm'>
                {service.icon}
              </div>
            </div>
            <CardHeader>
              <CardTitle className='text-2xl font-bold group-hover:text-primary transition-colors'>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className='text-base mb-4'>
                {service.description}
              </CardDescription>
              <ul className='space-y-2'>
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-2 text-sm text-foreground/80'
                  >
                    <CheckCircle2 className='w-4 h-4 text-green-500' />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant='outline'
                className='w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all cursor-pointer'
              >
                <Link href='/contact'>
                  Dowiedz się więcej
                  <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className='mt-12 mx-4 md:mx-8 rounded-3xl overflow-hidden relative bg-primary text-primary-foreground py-16 px-8 text-center shadow-xl'>
        <div className='relative z-10 flex flex-col items-center gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Gotowy na obniżenie rachunków?
          </h2>
          <p className='text-lg md:text-xl max-w-2xl text-primary-foreground/90'>
            Skontaktuj się z nami już dziś i otrzymaj darmową wycenę swojej
            instalacji. Zainwestuj w przyszłość swoją i planety.
          </p>
          <Button
            asChild
            size='lg'
            variant='secondary'
            className='px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105'
          >
            <Link href='/contact'>
              Zamów darmową wycenę
            </Link>
          </Button>
        </div>
        {/* Decorative background element */}
        <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />
        <div className='absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2' />
      </div>
    </div>
  )
}

export default Services
