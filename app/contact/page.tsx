"use client"

import Image from "next/image"
import { Button } from "@/components/ui/moving-border"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Clock, Send, MessageSquare } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success("Wiadomość wysłana pomyślnie!")
    e.currentTarget.reset()
  }
  return (
    <div className='flex flex-col gap-16 pt-16 pb-16'>
      {/* Hero Section */}
      <div className='relative h-80 w-full overflow-hidden'>
        <Image
          src='/images/solar-homes.webp'
          alt='Contact Solar Support'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-r from-black/80 to-black/40' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 animate__animated animate__fadeIn'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium mb-4'>
            <MessageSquare className='h-4 w-4' />
            Jesteśmy tutaj dla Ciebie
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
            Skontaktuj się z <span className='text-primary'>Nami</span>
          </h1>
          <p className='text-lg md:text-xl max-w-2xl text-gray-200 leading-relaxed'>
            Masz pytania dotyczące instalacji fotowoltaicznej? Chcesz otrzymać
            darmową wycenę? Napisz do nas lub zadzwoń.
          </p>
        </div>
      </div>

      <div className='container mx-auto px-4 lg:px-16'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start'>
          {/* Left Column: Contact Info */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-3xl font-bold'>Znajdź nas</h2>
              <p className='text-muted-foreground text-lg'>
                Nasze biuro jest otwarte dla każdego, kto chce porozmawiać o
                oszczędzaniu energii. Zapraszamy na kawę i rozmowę o Twojej
                przyszłości.
              </p>
            </div>

            <div className='grid gap-6'>
              <Card className='border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow'>
                <CardHeader className='pb-2'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                      <MapPin className='h-6 w-6' />
                    </div>
                    <CardTitle>Adres Biura</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground'>
                    ul. Słoneczna 124 <br />
                    00-001 Warszawa, Polska
                  </p>
                </CardContent>
              </Card>

              <Card className='border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow'>
                <CardHeader className='pb-2'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                      <Phone className='h-6 w-6' />
                    </div>
                    <CardTitle>Telefon</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-2'>
                    Pon - Pt: 8:00 - 18:00
                  </p>
                  <a
                    href='tel:+48123456789'
                    className='text-xl font-bold hover:text-primary transition-colors'
                  >
                    +48 123 456 789
                  </a>
                </CardContent>
              </Card>

              <Card className='border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow'>
                <CardHeader className='pb-2'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                      <Mail className='h-6 w-6' />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-2'>
                    Na wiadomości odpowiadamy w ciągu 24h
                  </p>
                  <a
                    href='mailto:kontakt@solar.pl'
                    className='text-xl font-bold hover:text-primary transition-colors'
                  >
                    kontakt@solar.pl
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='bg-card rounded-3xl p-8 shadow-2xl border relative overflow-hidden'>
            {/* Decorative background blob */}
            <div className='absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl' />
            <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl' />

            <div className='relative z-10 space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-bold'>Formularz kontaktowy</h2>
                <p className='text-muted-foreground'>
                  Wypełnij formularz, a nasz doradca skontaktuje się z Tobą tak
                  szybko, jak to możliwe.
                </p>
              </div>

              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName'>Imię</Label>
                    <Input id='firstName' placeholder='Jan' required />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Nazwisko</Label>
                    <Input id='lastName' placeholder='Kowalski' required />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>Adres Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='jan.kowalski@example.com'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='phone'>Numer Telefonu (opcjonalnie)</Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+48 000 000 000'
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message'>Wiadomość</Label>
                  <Textarea
                    id='message'
                    className='flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
                    placeholder='Opisz nam, jak możemy Ci pomóc...'
                    required
                  />
                </div>

                <div className='pt-4 flex justify-end'>
                  <Button className='cursor-pointer'>
                    Wyślij wiadomość <Send className='ml-2 h-4 w-4' />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section Idea (Creative Visual) */}
      <div className='container mx-auto px-4 lg:px-16'>
        <div className='relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl group'>
          {/* Uses an image as a placeholder for a map or office view */}
          <Image
            src='/images/panel-600-zestaw.webp' // Used as a creative placeholder or "Our installations map" vibe
            alt='Office Location'
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-700'
          />
          <div className='absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors' />
          <div className='absolute inset-0 flex items-center justify-center p-6'>
            <div className='bg-background/90 backdrop-blur-md p-8 rounded-2xl text-center shadow-2xl max-w-md border border-white/10'>
              <Clock className='w-10 h-10 text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold mb-2'>Godziny Otwarcia</h3>
              <p className='text-muted-foreground mb-4'>
                Jesteśmy dostępni, kiedy nas potrzebujesz.
              </p>
              <div className='space-y-2 text-lg font-medium'>
                <p>Poniedziałek - Piątek: 08:00 - 18:00</p>
                <p>Sobota: 09:00 - 14:00</p>
                <p className='text-muted-foreground font-normal'>
                  Niedziela: Zamknięte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
