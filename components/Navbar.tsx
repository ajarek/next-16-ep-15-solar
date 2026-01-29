import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="fixed h-16 top-0 left-0 right-0 z-50 flex justify-between items-center px-4 bg-white/40">
            <div className="flex items-center gap-4">
                <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} className="rounded-full"/>
                <h1 className="text-2xl font-bold">SolarSystem</h1>
            </div>
            <div className="flex items-center gap-4 text-xl font-semibold">
                <Link href="/about">O nas</Link>
                <Link href="/contact">Kontakt</Link>
            </div>
        </nav>
    );
};

export default Navbar;
