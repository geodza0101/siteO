
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

export function Pricing() {
    return (
        <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 md:px-12 flex flex-col items-center border-t border-zinc-900">
            <div className="max-w-[1400px] w-full flex flex-col gap-16 md:gap-24">

                {/* Header */}
                <div className="flex flex-col gap-6 border-b border-zinc-900 pb-12">
                    <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
                        <Typewriter text="ФОРМАТЫ ОБУЧЕНИЯ" speed={0.05} />
                    </h2>
                    <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                        Два формата под разные задачи. AI-Инженер — быстрый старт. AI-Архитектор — полная трансформация.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* AI-Engineer Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8 p-8 md:p-12 border-2 border-white bg-white text-black rounded-sm relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm">
                            Набор открыт
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Основной формат</span>
                            <h3 className="text-3xl md:text-4xl font-semibold">AI-Инженер</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl md:text-5xl font-bold">49 000 ₽</span>
                            </div>
                            <p className="text-zinc-600 text-sm">+ 5 000 ₽ иметь при себе на расходники во время обучения</p>
                        </div>

                        <div className="flex flex-col gap-3 text-sm">
                            <p>→ Освоишь вайбкодинг с нуля</p>
                            <p>→ Научишься создавать AI-продукты</p>
                            <p>→ Получишь инженерное мышление</p>
                            <p>→ Групповой формат с поддержкой</p>
                        </div>

                        <a
                            href="https://t.me/Geodza0"
                            target="_blank"
                            className="mt-auto w-full py-4 bg-black text-white text-center font-medium text-sm uppercase tracking-widest hover:bg-zinc-900 transition-colors rounded-sm"
                        >
                            Записаться в Telegram
                        </a>
                    </motion.div>

                    {/* AI-Architect Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col gap-8 p-8 md:p-12 border border-zinc-800 bg-zinc-900/30 text-white rounded-sm"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">Индивидуально</span>
                            <h3 className="text-3xl md:text-4xl font-semibold">AI-Архитектор</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl md:text-3xl font-medium text-zinc-400">Индивидуальный расчёт</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Формат на 1 год. Глубокая работа 1-на-1.</p>
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-zinc-400">
                            <p>→ Полное освоение маркетинга</p>
                            <p>→ Продажи и воронки</p>
                            <p>→ Разработка цифровых продуктов</p>
                            <p>→ Управление командами</p>
                            <p>→ Продакт-менеджмент</p>
                            <p>→ Совместный заработок на проектах</p>
                        </div>

                        <a
                            href="https://t.me/Geodza0"
                            target="_blank"
                            className="mt-auto w-full py-4 border border-zinc-700 text-white text-center font-medium text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors rounded-sm"
                        >
                            Обсудить в Telegram
                        </a>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
