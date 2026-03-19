
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

const values = [
    {
        title: "Правда > Лайки",
        desc: "Мы не ищем одобрения, мы ищем суть. Инженерное мышление — это способность задать неудобный вопрос, чтобы найти работающее решение.",
        icon: "01"
    },
    {
        title: "Рентгеновское Зрение",
        desc: "Мы смотрим сквозь хаос и видим Систему. Там, где другие видят проблемы, инженер видит алгоритм решения.",
        icon: "02"
    },
    {
        title: "Упрощай",
        desc: "Сложность — враг масштаба. Мы прячем технологии под капот, оставляя пользователю простую кнопку «Сделать хорошо».",
        icon: "03"
    },
    {
        title: "Вместе мы сила",
        desc: "Один в поле не воин? В эпоху ИИ — воин. Но армия инженеров, объединенных общей целью, способна менять рынки.",
        icon: "04"
    },
    {
        title: "Результат — это Закон",
        desc: "Мы не ценим усилия, мы ценим метрики. Если код написан красиво, но не приносит денег или пользы — это мусор.",
        icon: "05"
    }
];

export function Values() {
    return (
        <section className="w-full bg-black py-24 md:py-40 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col gap-6 border-b border-zinc-900 pb-12">
                    <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
                        <Typewriter text="ЦЕННОСТИ И ПРИНЦИПЫ" speed={0.05} />
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                        Фундамент, на котором мы строим продукты и принимаем решения каждый день.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((v, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative bg-zinc-950/50 border border-zinc-900 p-8 md:p-10 flex flex-col gap-6 hover:border-zinc-700 transition-all duration-500 rounded-sm"
                        >
                            <div className="text-5xl md:text-7xl font-mono text-zinc-900 group-hover:text-white/10 transition-colors duration-700">
                                {v.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl text-white font-medium leading-tight group-hover:text-white transition-colors">
                                {v.title}
                            </h3>
                            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed">
                                {v.desc}
                            </p>

                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}

                    {/* Final CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 flex flex-col justify-between rounded-sm"
                    >
                        <h3 className="text-2xl md:text-3xl text-black font-semibold leading-tight">
                            Готовы построить продукт будущего?
                        </h3>
                        <a
                            href="https://t.me/Geodza0"
                            target="_blank"
                            className="mt-8 group flex items-center gap-4 text-black font-mono text-sm uppercase tracking-widest"
                        >
                            Связаться в Telegram
                            <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                →
                            </span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
