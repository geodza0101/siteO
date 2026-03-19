
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

export function Overview() {
    return (
        <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-16 md:gap-24">

                {/* Main Thought */}
                <div className="max-w-4xl text-left flex flex-col gap-8">
                    <h2 className="text-3xl md:text-5xl text-white font-semibold leading-[1.1]">
                        <Typewriter text="Через 8 недель ты —" speed={0.05} />
                    </h2>
                    <div className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-zinc-400 font-light leading-relaxed flex flex-col gap-6">
                        <p>
                            Смотришь на любой бизнес — и видишь, <span className="text-white font-medium">где теряются деньги</span>.
                            Там, где другие видят хаос, ты видишь систему.
                        </p>
                        <p>
                            Говоришь с ИИ — и он <span className="text-white font-medium">выполняет работу целых отделов</span>.
                            Маркетинг, продажи, HR, финансы — ты управляешь AI-командой.
                        </p>
                        <p>
                            Не зависишь от разработчиков, маркетологов и аналитиков.
                            <span className="text-white font-medium">Ты — AI-Бизнес Архитектор</span>.
                        </p>
                    </div>
                    <p className="text-zinc-500 text-sm md:text-base mt-4">
                        Это не курс по AI-инструментам. Это трансформация мышления в <strong className="text-white">AI-Инженерию</strong> —
                        способность видеть путь от идеи до масштабирования и реализовывать его силами ИИ.
                    </p>
                </div>

                {/* Bottom Line */}
                <div className="w-full h-px bg-zinc-900" />
            </div>
        </section>
    );
}
