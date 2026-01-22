'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, MapPin, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type Message = {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'link' | 'action';
    actionUrl?: string;
    actionLabel?: string;
};

type ChatStep = 'intro' | 'marcar' | 'onde' | 'acordos' | 'emergencia';

const conversationFlow = {
    intro: {
        message: "Olá! Sou a Ana, do Dr. Alves de Sousa. 😊 Como posso ajudar o seu sorriso hoje?",
        options: [
            { label: "📅 Quero Marcar Consulta", nextStep: "marcar" },
            { label: "📍 Onde fica a clínica?", nextStep: "onde" },
            { label: "💰 Têm acordos/preços?", nextStep: "acordos" },
            { label: "🚨 Tenho uma Emergência", nextStep: "emergencia" },
        ],
    },
    marcar: {
        message: "Excelente! A forma mais rápida é preencher o formulário abaixo ou ligar-nos diretamente.",
        action: { type: "scroll", target: "marcacao" },
        options: [
            { label: "📞 Ligar Agora", nextStep: "emergencia" }, // Reuse emergency logic for call button
            { label: "Voltar ao início", nextStep: "intro" }
        ],
    },
    onde: {
        message: "Estamos na R. da Bandeira 102, 4900-494 Viana do Castelo. É uma zona central, perto do jardim!",
        options: [
            { label: "Ver no Mapa (Google)", nextStep: "mapa_externo" },
            { label: "Voltar ao início", nextStep: "intro" },
            { label: "Marcar Consulta", nextStep: "marcar" },
        ],
    },
    acordos: {
        message: "Cada sorriso é único! O Dr. Alves acredita numa avaliação honesta antes de dar orçamentos. A primeira avaliação é fundamental para um plano correto.",
        options: [
            { label: "Falar com a Receção", nextStep: "whatsapp" },
            { label: "Voltar ao início", nextStep: "intro" },
        ],
    },
    emergencia: {
        message: "Lamento que tenha dores. Para emergências, por favor ligue imediatamente para sermos rápidos.",
        action: { type: "link", url: "tel:258829266", label: "Ligar 258 829 266" },
        options: [{ label: "Voltar ao início", nextStep: "intro" }],
    },
};

export default function AnaChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentStep, setCurrentStep] = useState<ChatStep>('intro');
    const [isTyping, setIsTyping] = useState(false);
    const [showBadge, setShowBadge] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial tooltip delay
    useEffect(() => {
        const timer = setTimeout(() => setShowBadge(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, isOpen]);

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            addBotMessage(conversationFlow['intro'].message);
        }
    }, [isOpen]);

    const addBotMessage = (text: string, action?: any) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const newMessage: Message = {
                id: Date.now().toString(),
                text,
                sender: 'bot',
                type: action ? 'action' : 'text',
                actionLabel: action?.label,
                actionUrl: action?.url,
            };
            setMessages((prev) => [...prev, newMessage]);

            // Handle automatic actions like scrolling
            if (action?.type === 'scroll') {
                setTimeout(() => {
                    const element = document.getElementById(action.target);
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        }, 1000); // 1s typing delay
    };

    const handleOptionClick = (option: any) => {
        // Add user message
        const userMsg: Message = {
            id: Date.now().toString(),
            text: option.label,
            sender: 'user',
        };
        setMessages((prev) => [...prev, userMsg]);

        // Process next step
        if (option.nextStep === 'mapa_externo') {
            window.open('https://maps.google.com/?q=R.+da+Bandeira+102,+4900-316+Viana+do+Castelo', '_blank');
            addBotMessage("Abri o mapa numa nova janela. Precisa de mais alguma coisa?");
            setCurrentStep('intro'); // Reset options
            return;
        }

        if (option.nextStep === 'whatsapp') {
            // Example Whatsapp link
            window.open('https://wa.me/351258829266', '_blank'); // Replace with real number if available
            addBotMessage("A redirecionar para o WhatsApp...");
            setCurrentStep('intro');
            return;
        }

        const nextStepData = conversationFlow[option.nextStep as ChatStep];
        if (nextStepData) {
            setCurrentStep(option.nextStep as ChatStep);
            addBotMessage(nextStepData.message, (nextStepData as any).action);
        }
    };

    const currentOptions = conversationFlow[currentStep]?.options || [];

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
            <AnimatePresence>
                {!isOpen && showBadge && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white px-4 py-2 rounded-full shadow-lg border border-blue-100 text-sm font-medium text-blue-900 mb-2 mr-2"
                    >
                        Posso ajudar? 👋
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[350px] max-w-[calc(100vw-32px)] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-900 p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white border-2 border-white/20">
                                        <MessageSquare className="h-5 w-5" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-blue-900"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Ana</h3>
                                    <p className="text-xs text-blue-200">Assistente Virtual • Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors p-1"
                            >
                                <ChevronDown className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={cn(
                                        "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                                        msg.sender === 'user'
                                            ? "bg-blue-900 text-white ml-auto rounded-br-sm"
                                            : "bg-white text-slate-700 border border-slate-100 mr-auto rounded-tl-sm shadow-sm"
                                    )}
                                >
                                    {msg.text}
                                    {msg.type === 'action' && msg.actionUrl && (
                                        <a
                                            href={msg.actionUrl}
                                            className="mt-3 block text-center rounded-xl bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700 transition-colors"
                                        >
                                            {msg.actionLabel}
                                        </a>
                                    )}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="bg-white w-fit rounded-2xl px-4 py-3 border border-slate-100 shadow-sm mr-auto rounded-tl-sm">
                                    <div className="flex gap-1">
                                        <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options Footer */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            {!isTyping && (
                                <div className="flex flex-wrap gap-2 justify-end">
                                    {currentOptions.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(option)}
                                            className="px-4 py-2 bg-slate-100 hover:bg-blue-50 text-blue-900 text-sm font-medium rounded-xl transition-colors border border-slate-200 hover:border-blue-200"
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {isTyping && (
                                <p className="text-center text-xs text-slate-400 italic">
                                    Ana está a escrever...
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        setIsOpen(true);
                        setShowBadge(false);
                    }}
                    className="h-14 w-14 rounded-full bg-blue-900 text-white shadow-xl flex items-center justify-center hover:bg-blue-800 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-900/30"
                >
                    <MessageCircle className="h-7 w-7" />
                </motion.button>
            )}
        </div>
    );
}
