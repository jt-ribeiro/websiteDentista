'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Star } from 'lucide-react';

export default function Hero() {
    const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('marcacao');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="relative overflow-hidden py-20 lg:py-32">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/hero-bg.jpg"
                    alt="Consultório Dentário"
                    fill
                    className="object-cover blur-[3px]"
                    priority
                />
            </div>
            {/* Overlay to ensure text readability (White overlay) */}
            <div className="absolute inset-0 -z-10 bg-white/75" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-900">
                        <span className="flex items-center gap-1 rounded-full bg-blue-100/80 backdrop-blur-sm px-3 py-1">
                            <Star className="h-4 w-4 fill-current" /> 5.0 no Google
                        </span>
                        <span className="text-slate-600 font-medium">24+ Avaliações</span>
                    </div>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        O Seu Sorriso em Boas Mãos <br className="hidden sm:block" />
                        <span className="text-blue-900">em Viana do Castelo</span>
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-700 font-medium">
                        Honestidade, profissionalismo e conforto. A clínica dentária com
                        classificação máxima pelos pacientes. Cuidamos do seu sorriso com a
                        dedicação que ele merece.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#marcacao"
                            onClick={scrollToBooking}
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 cursor-pointer"
                        >
                            <Calendar className="h-5 w-5" />
                            Marcar Consulta
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative gradient blob - reduced opacity for visual hierarchy */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[500px] w-[500px] rounded-full bg-slate-100/30 blur-[100px] -z-10" />
        </section>
    );
}
