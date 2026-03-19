
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Typewriter } from './Typewriter';

import Image from 'next/image';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax logic for that 2M vibe
    const personY = useTransform(scrollY, [0, 500], [0, 100]);
    const textY = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden px-6 md:px-12">

            {/* Background Image Layer (Refined for Mobile) */}
            <motion.div
                style={{ y: personY }}
                className="absolute right-0 top-0 h-full w-full md:w-[60%] pointer-events-none select-none z-0"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/george.jpg"
                        alt="George Dzhachvadze"
                        fill
                        priority
                        className="object-contain object-right grayscale opacity-75 md:opacity-85 mix-blend-screen brightness-150"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 95%)',
                            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 95%)'
                        }}
                    />
                    {/* Overlay to ensure edge blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 max-w-[1400px] w-full flex flex-col gap-8 md:gap-12 text-left">
                {/* Meta Size (Small) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium"
                >
                    Vibecoding · AI Engineering
                </motion.div>

                {/* Heading Size (Large) */}
                <motion.div style={{ y: textY }} className="flex flex-col items-start translate-x-[-0.03em]">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[clamp(2rem,6vw,5rem)] text-white font-semibold flex flex-col gap-2 leading-[1.1] max-w-6xl"
                    >
                        <span>Русский язык —</span>
                        <span className="text-zinc-500">твой новый язык программирования</span>
                    </motion.h1>
                </motion.div>

                {/* Subheading with AI Typewriter Cursor Animation */}
                <div className="max-w-3xl mt-2 flex flex-col gap-8">
                    <p className="text-[clamp(1rem,2vw,1.25rem)] text-zinc-400 font-light leading-relaxed">
                        <Typewriter
                            text="Ты говоришь — ИИ делает. За обучение станешь AI-Инженером."
                            delay={1}
                            speed={0.03}
                        />
                    </p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className="flex flex-col md:flex-row gap-6 md:gap-12 pt-4 border-t border-zinc-900/50"
                    >
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl text-white font-bold">300+</span>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest">Инженеров</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl md:text-4xl text-white font-bold">25 млн ₽</span>
                            <span className="text-zinc-500 text-xs uppercase tracking-widest">Заработали студенты</span>
                        </div>
                        <a
                            href="https://t.me/Geodza0"
                            target="_blank"
                            className="ml-auto px-6 py-3 border border-zinc-700 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm hidden md:block"
                        >
                            Написать →
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Grain Overlay */}
            <div className="noise-bg" />
        </section>
    );
}
