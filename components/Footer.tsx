import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contactos" className="bg-slate-900 text-slate-300">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Info Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Dr. Alves de Sousa</h3>
                            <p className="max-w-md text-slate-400">
                                A sua clínica de confiança em Viana do Castelo. Cuidamos do seu
                                sorriso com excelência e dedicação desde o primeiro dia.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-6 w-6 shrink-0 text-blue-400" />
                                <span>
                                    R. da Bandeira 102, <br />
                                    4900-494 Viana do Castelo
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                                <a href="tel:258829266" className="hover:text-white transition-colors">
                                    258 829 266
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 shrink-0 text-blue-400" />
                                <div className="text-sm">
                                    <p>Segunda a Sexta: 09:00 - 19:00</p>
                                    <p>Sábado: 09:00 - 13:00</p>
                                    <p>Domingo: Fechado</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-[300px] overflow-hidden rounded-2xl bg-slate-800 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.632281858456!2d-8.828691923466147!3d41.69651597126233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b62b1a13b655%3A0x628383f36a88e99e!2sR.%20da%20Bandeira%20102%2C%204900-316%20Viana%20do%20Castelo!5e0!3m2!1sen!2spt!4v1706136000000!5m2!1sen!2spt"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Dr. Alves de Sousa - Clínica Dentária. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
