import Link from 'next/link';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const reviews = [
    {
        name: 'Eva Mónica Araújo Ribeiro',
        text: 'Sou paciente há muitos anos... destaco o profissionalismo, a qualidade, a honestidade... Um local agradável com muito conforto.',
    },
    {
        name: 'Margaret Parente',
        text: 'Excelente consulta médica, atendimento muito atencioso e explicações claras sobre o tratamento.',
    },
    {
        name: 'Lara Vladi',
        text: 'Dentista altamente qualificado. Recomendo vivamente a todos que procuram um serviço de excelência.',
    },
];

export default function Reviews() {
    return (
        <section id="reviews" className="relative py-20 overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/reviews-bg.png"
                    alt="Pacientes Felizes"
                    fill
                    className="object-cover blur-[3px]"
                />
            </div>
            {/* Overlay to ensure text readability (White overlay) */}
            <div className="absolute inset-0 -z-10 bg-white/85" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        O que dizem os nossos pacientes
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        A satisfação dos nossos pacientes é o nosso maior orgulho. Veja as
                        opiniões reais de quem confia no nosso trabalho.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-slate-100 bg-white/60 backdrop-blur-sm p-8 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <Quote className="absolute right-6 top-6 h-8 w-8 text-blue-100" />
                            <div className="mb-4 flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="mb-6 text-slate-600 leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-900">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">{review.name}</h4>
                                    <span className="text-sm text-slate-500">Paciente Verificado</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
