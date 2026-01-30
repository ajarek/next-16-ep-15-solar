import Image from "next/image"
import Link from "next/link"
import { SheetNav } from "./SheetNav";

const Navbar = () => {
    return (
        <nav className="w-full max-w-[1520px] mx-auto fixed h-16 top-0 left-0 right-0 z-50 flex justify-between items-center px-4 bg-white/50 backdrop-blur-sm">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full"/>
                <h1 className="text-2xl font-bold">SolarSystem</h1>
            </Link>
            <div className="flex items-center gap-4 text-xl font-semibold max-lg:hidden">
                <Link href="/products">Produkty</Link>
                <Link href="/services">Usługi</Link>
                <Link href="/solutions">Rozwiązania</Link>
                <Link href="/resources">Zasoby</Link>
                <Link href="/about">O nas</Link>
                <Link href="/contact">Kontakt</Link>
            </div>
            <SheetNav />
        </nav>
    );
};

export default Navbar;
