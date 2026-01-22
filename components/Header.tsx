import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold tracking-tight text-blue-900">
                        Dr. Alves de Sousa
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link href="#inicio" className="hover:text-blue-900 transition-colors">
                        Início
                    </Link>
                    <Link href="#clinica" className="hover:text-blue-900 transition-colors">
                        Clínica
                    </Link>
                    <Link href="#contactos" className="hover:text-blue-900 transition-colors">
                        Contactos
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="tel:258829266"
                        className="hidden sm:flex items-center gap-2 rounded-full bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                    >
                        <Phone className="h-4 w-4" />
                        Ligar Agora
                    </a>
                </div>
            </div>
        </header>
    );
}
