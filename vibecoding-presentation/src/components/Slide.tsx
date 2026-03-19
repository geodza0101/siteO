'use client';
import { motion } from 'framer-motion';
import { SlideData } from '../data/slides';
import {
    Zap, User, Calendar, Cpu,
    Brain, CreditCard,
    ArrowRight, Rocket, Microscope,
    Target, CheckCircle2
} from 'lucide-react';
import clsx from 'clsx';

const iconMap: any = {
    'hero': Zap,
    'about': User,
    'timeline': Calendar,
    'vibecoding': Cpu,
    'case': Target,
    'devcycle': Rocket,
    'mindset': Brain,
    'pricing': CreditCard,
    'cta': ArrowRight
};

interface SlideProps {
    data: SlideData;
    isActive: boolean;
}

export function Slide({ data, isActive }: SlideProps) {
    const Icon = iconMap[data.type] || Microscope;

    if (!isActive) return null;

    const hasMetrics = data.metrics && data.metrics.length > 0;
    const hasContent = data.content && data.content.length > 0;

    return (
        <div className="w-full h-full overflow-y-auto scrollbar-hide">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="min-h-full flex flex-col items-center justify-center p-6 md:p-12 text-center"
            >
                {/* Icon Badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -20, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className={clsx(
                        "mb-8 p-4 rounded-2xl bg-gradient-to-br shadow-2xl border border-white/10 backdrop-blur-3xl shrink-0",
                        data.accent || "from-gray-800 to-black"
                    )}
                >
                    <Icon className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 mb-4 tracking-tighter leading-tight max-w-5xl"
                >
                    {data.title}
                </motion.h1>

                {/* Subtitle */}
                {data.subtitle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12"
                    >
                        <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm md:text-lg text-gray-400 font-medium tracking-wide uppercase">
                            {data.subtitle}
                        </span>
                    </motion.div>
                )}

                {/* Content Layout */}
                <div className={clsx(
                    "w-full max-w-7xl grid gap-8 items-start",
                    hasMetrics && hasContent ? "grid-cols-1 lg:grid-cols-2 text-left" : "grid-cols-1"
                )}>

                    {/* List Content */}
                    {hasContent && (
                        <div className={clsx(
                            "grid gap-4",
                            !hasMetrics && "max-w-3xl mx-auto w-full",
                            !hasMetrics && data.content!.length <= 4 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                        )}>
                            {data.content!.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg flex items-start gap-4 hover:bg-white/10 transition-colors text-left"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-white/40 mt-1 shrink-0" />
                                    <span className="text-lg text-gray-200 font-light leading-relaxed">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Metrics Content */}
                    {hasMetrics && (
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {data.metrics!.map((m, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group text-left"
                                >
                                    <div className={clsx("absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br opacity-20 blur-2xl rounded-full transition-all group-hover:opacity-40", data.accent || "from-white to-transparent")} />
                                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-2">{m.label}</p>
                                    <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{m.value}</div>
                                    {m.sub && <div className="text-lg text-gray-400 font-light">{m.sub}</div>}
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
