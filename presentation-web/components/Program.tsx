
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';
import { useState } from 'react';

const blocks = [
    {
        id: 0,
        title: "Блок 0 — Ознакомительный",
        dates: "2-3 февраля",
        topics: [
            "Знакомство и ожидания",
            "Что такое вайб-кодинг: «армия агентов»",
            "Настройка окружения и первый пакет материалов",
        ],
        details: "Созвон: Пн 19:00 | Координация: Вт 11:00"
    },
    {
        id: 1,
        title: "Блок 1 — ТЗ и первая автоматизация",
        dates: "4-6 февраля",
        topics: [
            "Как формировать ТЗ под ИИ-разработку",
            "Упаковка контекста для нейросетей",
            "Первая простая автоматизация"
        ],
        details: "Созвон: Ср 19:00 | ДЗ: Пт 10:00 | Координация: Пт 11:00"
    },
    {
        id: 2,
        title: "Блок 2 — Лендинг + агент",
        dates: "7-9 февраля",
        topics: [
            "Философия вайб-кодинга на практике",
            "Сборка простого лендинга",
            "Подключение агента на сайт (чат/голос)"
        ],
        details: "Созвон: Сб 11:00 | ДЗ: Пн 10:00 | Координация: Пн 11:00"
    },
    {
        id: 3,
        title: "Блок 3 — Документация и API",
        dates: "11-13 февраля",
        topics: [
            "Что такое API и зачем оно нужно",
            "Как «скормить» документацию агенту",
            "Практика: агент действует по инструкции"
        ],
        details: "Созвон: Ср 19:00 | ДЗ: Пт 10:00 | Координация: Пт 11:00"
    },
    {
        id: 4,
        title: "Блок 4 — Практика на реальных кейсах",
        dates: "15-17 февраля",
        topics: [
            "Выбор реального кейса для решения",
            "Критерии успеха продукта",
            "Обучающий разбор: «получилось / не получилось»"
        ],
        details: "Созвон: Вс 11:00 | ДЗ: Вт 10:00 | Координация: Вт 11:00"
    },
    {
        id: 5,
        title: "Блок 5 — Выход в бизнес",
        dates: "19-21 февраля",
        topics: [
            "Упаковка решения для бизнеса",
            "Презентация ценности без тех. перегруза",
            "Сбор первых кейсов и офферов"
        ],
        details: "Созвон: Чт 19:00 | ДЗ: Сб 10:00 | Координация: Сб 11:00"
    },
    {
        id: 6,
        title: "Блок 6 — Работа с данными",
        dates: "24-26 февраля",
        topics: [
            "Решения на фактах, а не на ощущениях",
            "Анализ, сегментация, автоматические выводы",
            "Структуры данных для ИИ"
        ],
        details: "Созвон: Вт 19:00 | ДЗ: Чт 10:00 | Координация: Чт 11:00"
    },
    {
        id: 7,
        title: "Блок 7 — Интерфейсы",
        dates: "28 февраля - 2 марта",
        topics: [
            "UX-логика: пользовать → действие → результат",
            "Создаем удобную оболочку для решения",
            "Разбор интерфейсов, упрощение"
        ],
        details: "Созвон: Сб 11:00 | ДЗ: Пн 10:00 | Координация: Пн 11:00"
    },
    {
        id: 8,
        title: "Блок 8 — Глубокие интеграции",
        dates: "3-5 марта",
        topics: [
            "Цепочки сервисов и сценарии",
            "Сборка системы: Интерфейс + Данные + Сервисы",
            "Финальный разбор и план развития"
        ],
        details: "Созвон: Вт 19:00 | ДЗ: Чт 10:00 | Координация: Чт 11:00"
    }
];



export function Program() {
    const [expandedBlock, setExpandedBlock] = useState<number | null>(null);

    return (
        <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1000px] w-full flex flex-col gap-20">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-900 pb-8">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">8 Недель Практики</span>
                        <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight">
                            <Typewriter text="ПРОГРАММА ОБУЧЕНИЯ" speed={0.05} />
                        </h2>
                    </div>
                </div>

                {/* Schedule List */}
                <div className="flex flex-col gap-4">
                    {blocks.map((block) => (
                        <motion.div
                            key={block.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col border border-zinc-900 bg-black p-6 md:p-8 rounded-lg cursor-pointer transition-colors duration-300 ${expandedBlock === block.id ? 'border-zinc-700' : 'hover:border-zinc-800'}`}
                            onClick={() => setExpandedBlock(expandedBlock === block.id ? null : block.id)}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-zinc-500 text-xs uppercase tracking-wider">{block.dates}</span>
                                    <h3 className="text-lg md:text-xl text-white font-medium">{block.title}</h3>
                                </div>
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-transform duration-300 ${expandedBlock === block.id ? 'rotate-180 bg-zinc-900' : ''}`}>
                                    ↓
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <motion.div
                                initial={false}
                                animate={{ height: expandedBlock === block.id ? "auto" : 0, opacity: expandedBlock === block.id ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 flex flex-col gap-6">
                                    <ul className="flex flex-col gap-2">
                                        {block.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base">
                                                <span className="w-1.5 h-1.5 mt-2 bg-zinc-700 rounded-full shrink-0" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="pt-4 border-t border-zinc-900/50">
                                        <p className="text-xs md:text-sm text-zinc-500 font-mono">
                                            {block.details}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}

                    {/* Individual Sessions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 p-6 border border-dashed border-zinc-800 rounded-lg flex flex-col gap-2 text-center items-center bg-zinc-900/20"
                    >
                        <h3 className="text-white font-medium">Индивидуальные занятия (1–2 часа)</h3>
                        <p className="text-zinc-500 text-sm">Личный разбор проекта, корректировка логики, помощь с внедрением</p>
                    </motion.div>
                </div>

                {/* Mentors */}
                <div className="flex flex-col gap-8 pt-12 border-t border-zinc-900">
                    <h3 className="text-2xl text-white font-medium">Наставник</h3>
                    <div className="flex flex-col gap-2 p-6 border border-zinc-900 bg-zinc-950 rounded md:max-w-md">
                        <span className="text-white text-xl font-medium">Георгий Джачвадзе</span>
                        <span className="text-zinc-500 text-sm uppercase tracking-wider">AI-Architect / Founder</span>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                            Единственный ментор на потоке. Я лично веду разборы, потому что инженерное мышление передается только от мастера к ученику.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
