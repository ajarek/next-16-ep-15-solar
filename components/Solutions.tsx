import Image from "next/image"

const Solutions = () => {
    return (
       <div className='w-full  flex flex-col justify-center gap-4 px-8'>
        <div className="flex flex-col gap-4 px-8">
        <p>Panele Słoneczne</p>
        <h1 className="text-4xl font-bold">Inteligentna pomoc w zakupie, instalacji i obsłudze paneli słonecznych.</h1>
        </div>
        <div className="flex flex-col gap-4 px-8">
            <div className="flex items-center gap-4">
                <Image src="/images/smart-help-4.webp" alt="Smart Help" width={600} height={600} className="rounded-lg" />
                <Image src="/images/smart-help-5.webp" alt="Smart Help" width={900} height={600} className="rounded-lg" />
            </div>
            <div className="flex items-center gap-4">
                <Image src="/images/smart-help-2.webp" alt="Smart Help" width={900} height={600} className="rounded-lg" />
                <Image src="/images/smart-help-6.webp" alt="Smart Help" width={600} height={600} className="rounded-lg" />
            </div>
        </div>
        </div>
    )
}
export default Solutions
