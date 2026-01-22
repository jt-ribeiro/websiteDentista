import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Alves De Sousa - Clínica Dentária em Viana do Castelo',
  description: 'Clínica dentária de prestígio em Viana do Castelo. Honestidade, profissionalismo e conforto. Marque a sua consulta hoje.',
  keywords: ['Dentista', 'Viana do Castelo', 'Dr. Alves de Sousa', 'Clínica Dentária', 'Ortodontia', 'Implantes'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased min-h-screen bg-white text-slate-900")}>
        {children}
      </body>
    </html>
  );
}
