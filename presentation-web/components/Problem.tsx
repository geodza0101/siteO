
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

export function Problem() {
    return (
        <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-16 md:gap-24">

                {/* The Problem */}
                <div className="max-w-4xl flex flex-col gap-8">
                    <h2 className="text-3xl md:text-5xl text-white font-semibold leading-[1.1]">
                        <Typewriter text="Инструменты у всех." speed={0.05} />
                    </h2>
                    <div className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-zinc-400 font-light leading-relaxed flex flex-col gap-6">
                        <p>
                            ChatGPT, Claude, Cursor, Midjourney — доступны каждому.
                            Но <span className="text-white font-medium">прорыва не происходит</span>.
                        </p>
                        <p>
                            Люди пробуют, делают первые шаги, получают красивые демки...
                            а потом? <span className="text-white font-medium">Ничего</span>. Никаких денег. Никакого бизнеса.
                        </p>
                        <p className="text-xl md:text-2xl text-white font-medium mt-4">
                            Почему?
                        </p>
                        <p>
                            Потому что дело <span className="text-red-400/80">не в кнопках</span>.
                            Дело в <span className="text-white font-medium">Инженерном Мышлении</span> —
                            способности видеть систему там, где другие видят хаос.
                        </p>
                    </div>
                </div>

                {/* Transition to Solution */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

                {/* The Solution */}
                <div className="max-w-4xl flex flex-col gap-8">
                    <h3 className="text-2xl md:text-4xl text-white font-semibold leading-[1.1]">
                        Я называю это — AI-Инженерия
                    </h3>
                    <div className="text-[clamp(1rem,2vw,1.25rem)] text-zinc-400 font-light leading-relaxed flex flex-col gap-4">
                        <p>
                            Это не курс по инструментам. Это <span className="text-white font-medium">трансформация мышления</span>.
                        </p>
                        <p>
                            Ты научишься смотреть на любой бизнес — и мгновенно видеть, где теряются деньги,
                            какие процессы можно передать ИИ, и как выстроить систему, которая работает без тебя.
                        </p>
                        <p>
                            <span className="text-white font-medium">Русский язык</span> становится твоим языком программирования.
                            Ты говоришь — ИИ делает.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
