
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from './Typewriter';

const questions = [
    {
        q: "Я гуманитарий?",
        a: "Да. Vibe-coding — это про бизнес-логику, не про код. Мы учим управлять ИИ, который пишет код за вас."
    },
    {
        q: "Нет времени?",
        a: "10-15 часов в неделю достаточно. Программу можно совмещать с работой или бизнесом."
    },
    {
        q: "Окупится?",
        a: "Средний чек на AI-услуги 50-150К. Окупаемость часто происходит уже с первого заказа."
    },
    {
        q: "Где клиенты?",
        a: "Мы даем систему лидогенерации + передаем заказы внутри нашего сообщества выпускников."
    },
    {
        q: "Не справлюсь?",
        a: "Наставник на связи 24/7. У вас будут готовые шаблоны, разборы ошибок и поддержка группы."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[800px] w-full flex flex-col gap-16">

                <div className="flex flex-col gap-6 text-center">
                    <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight">
                        <Typewriter text="FAQ" speed={0.05} />
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base">
                        Ответы на частые вопросы
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {questions.map((item, i) => (
                        <div key={i} className="border-b border-zinc-900 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center text-left py-4 hover:text-zinc-300 transition-colors"
                            >
                                <span className="text-lg md:text-xl text-white font-medium">{item.q}</span>
                                <span className={`text-2xl text-zinc-500 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                    +
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed pb-4 pr-8">
                                            {item.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
