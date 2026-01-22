'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function BookingSection() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            reason: formData.get('reason'),
            message: formData.get('message'),
        };

        // Integration TODO: Send 'data' to Formspree, EmailJS, or your API endpoint here.
        console.log('Form Data Submitted:', data);

        // Simulate network request
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            // Reset form or success state after some time if needed
        }, 1000);
    }

    return (
        <section id="marcacao" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                                Marque a sua Consulta
                            </h2>
                            <p className="text-lg text-slate-600">
                                Estamos prontos para cuidar do seu sorriso. Preencha o formulário
                                ou entre em contacto direto connosco.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Morada</h4>
                                    <p className="text-slate-600">
                                        R. da Bandeira 102, <br />
                                        4900-494 Viana do Castelo
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Telefone</h4>
                                    <a
                                        href="tel:258829266"
                                        className="text-slate-600 hover:text-blue-900 transition-colors"
                                    >
                                        258 829 266
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900">Horário</h4>
                                    <p className="text-slate-600 text-sm">
                                        Segunda a Sexta: 09:00 - 19:00 <br />
                                        Sábado: 09:00 - 13:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="h-[250px] overflow-hidden rounded-2xl bg-slate-200 border border-slate-300 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.632281858456!2d-8.828691923466147!3d41.69651597126233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b62b1a13b655%3A0x628383f36a88e99e!2sR.%20da%20Bandeira%20102%2C%204900-316%20Viana%20do%20Castelo!5e0!3m2!1sen!2spt!4v1706136000000!5m2!1sen!2spt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
                        {isSuccess ? (
                            <div className="flex h-full flex-col items-center justify-center text-center py-12">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <CheckCircle className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                                    Pedido Recebido!
                                </h3>
                                <p className="text-slate-600">
                                    Obrigado pelo seu contacto. A nossa equipa irá ligar-lhe em
                                    breve para confirmar a sua marcação.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="mt-8 text-sm font-medium text-blue-900 hover:text-blue-700 underline"
                                >
                                    Enviar novo pedido
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Nome Completo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="block w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="Ex: João Silva"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Telemóvel <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="block w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        placeholder="Ex: 912 345 678"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="reason"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Motivo da Consulta
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="reason"
                                            name="reason"
                                            defaultValue="Check-up"
                                            className="block w-full appearance-none rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        >
                                            <option value="Check-up">Check-up / Avaliação</option>
                                            <option value="Dor de Dentes">Dor de Dentes</option>
                                            <option value="Limpeza">Limpeza / Higiene</option>
                                            <option value="Implantes">Implantes</option>
                                            <option value="Ortodontia">Aparelho / Ortodontia</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Mensagem (Opcional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                        placeholder="Alguma informação adicional..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            A enviar...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Pedir Contacto
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-xs text-slate-500">
                                    Os seus dados estão seguros e serão usados apenas para contacto.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
