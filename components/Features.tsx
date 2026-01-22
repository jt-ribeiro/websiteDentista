import { Heart, MapPin, Users } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: 'Atendimento Personalizado',
        description:
            'Cada paciente é único. Desenvolvemos planos de tratamento adaptados às suas necessidades específicas.',
    },
    {
        icon: MapPin,
        title: 'Localização Central',
        description:
            'Convenientemente localizados na Rua da Bandeira, no coração de Viana do Castelo, com fácil acesso.',
    },
    {
        icon: Heart,
        title: 'Ambiente Familiar',
        description:
            'Uma clínica acolhedora onde se sentirá em casa. O seu conforto e bem-estar são a nossa prioridade.',
    },
];

export default function Features() {
    return (
        <section id="clinica" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Porquê escolher a nossa clínica?
                    </h2>
                    <p className="text-lg text-slate-600">
                        Combinamos experiência, tecnologia e humanismo para lhe oferecer o
                        melhor cuidado dentário.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition-transform hover:scale-110">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
