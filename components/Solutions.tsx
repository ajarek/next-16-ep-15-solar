import Image from "next/image"

const Solutions = () => {
  return (
    <div className='w-full  flex flex-col justify-center gap-4 px-4 md:px-8'>
      <div className='flex flex-col gap-4 px-4 md:px-8'>
        <p>Panele Słoneczne</p>
        <h1 className='text-4xl font-bold'>
          Inteligentna pomoc w zakupie, instalacji i obsłudze paneli
          słonecznych.
        </h1>
      </div>
      <div className='flex flex-col gap-4 px-4 md:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-4'>
          <div className='relative'>
            <Image
              src='/images/smart-help-4.webp'
              alt='Smart Help'
              width={600}
              height={600}
            className='rounded-lg'
          />
          <div className='absolute bottom-10 left-10 text-2xl text-white font-bold'>Serwis</div>
          </div>
          <div className='relative'>  
          <Image
            src='/images/smart-help-5.webp'
            alt='Smart Help'
            width={900}
            height={600}
            className='rounded-lg'
          />
          <div className='absolute bottom-10 left-10 text-2xl text-white font-bold'>Planowanie</div>
          </div>
        </div>
        <div className='flex flex-col   lg:flex-row items-center gap-4'>
          <div className='relative'>
          <Image
            src='/images/smart-help-2.webp'
            alt='Smart Help'
            width={900}
            height={600}
            className='rounded-lg'
          />
          <div className='absolute bottom-10 left-10 text-2xl text-white font-bold'>Montaż</div>
          </div>
          <div className="relative">
          <Image
            src='/images/smart-help-6.webp'
            alt='Smart Help'
            width={600}
            height={600}
            className='rounded-lg'
          />
          <div className='absolute bottom-10 left-10 text-2xl text-white font-bold'>Finansowanie</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Solutions
