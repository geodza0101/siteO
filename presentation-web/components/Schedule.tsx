'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Typewriter } from './Typewriter';
import { scheduleBlocks, COURSE_START_DATE } from '../data/schedule';

/* ── Цвета блоков ── */
const blockThemes = [
    { accent: '#6366f1', glow: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.25)', text: '#a5b4fc' },
    { accent: '#f59e0b', glow: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.25)', text: '#fcd34d' },
    { accent: '#10b981', glow: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.25)', text: '#6ee7b7' },
    { accent: '#f43f5e', glow: 'rgba(244,63,94,0.15)', border: 'rgba(244,63,94,0.25)', text: '#fda4af' },
];

/* ── Обратный отсчёт ── */
function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const target = new Date(COURSE_START_DATE).getTime();

        const tick = () => {
            const now = Date.now();
            const diff = Math.max(0, target - now);
            setTimeLeft({
                days: Math.floor(diff / 86_400_000),
                hours: Math.floor((diff % 86_400_000) / 3_600_000),
                minutes: Math.floor((diff % 3_600_000) / 60_000),
                seconds: Math.floor((diff % 60_000) / 1000),
            });
        };

        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    if (!mounted) return null;

    const units = [
        { value: timeLeft.days, label: 'дней' },
        { value: timeLeft.hours, label: 'часов' },
        { value: timeLeft.minutes, label: 'минут' },
        { value: timeLeft.seconds, label: 'секунд' },
    ];

    const total = timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds;
    if (total === 0) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-6"
            >
                <span className="text-2xl md:text-3xl font-semibold text-white">🚀 Обучение началось!</span>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
        >
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
                {units.map((u) => (
                    <div key={u.label} className="flex flex-col items-center gap-2">
                        <div
                            className="relative w-[78px] h-[78px] md:w-[100px] md:h-[100px] flex items-center justify-center rounded-xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(145deg, rgba(99,102,241,0.08), rgba(0,0,0,0.9))',
                                border: '1px solid rgba(99,102,241,0.2)',
                                boxShadow: '0 0 30px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                            <span className="relative text-3xl md:text-5xl font-mono font-bold text-white tabular-nums">
                                {String(u.value).padStart(2, '0')}
                            </span>
                        </div>
                        <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-mono">
                            {u.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Пульсирующая кнопка CTA */}
            <motion.a
                href="https://t.me/Geodza0"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold uppercase tracking-widest transition-all duration-300"
                style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.3), 0 4px 15px rgba(99,102,241,0.2)',
                }}
            >
                Забронировать место →
            </motion.a>
        </motion.div>
    );
}

/* ── Карточка блока (аккордеон) ── */
function BlockCard({ block, index }: { block: typeof scheduleBlocks[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(index === 0);
    const theme = blockThemes[index % blockThemes.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group rounded-2xl overflow-hidden transition-all duration-500"
            style={{
                border: `1px solid ${isOpen ? theme.border : 'rgba(39,39,42,0.6)'}`,
                background: isOpen
                    ? `linear-gradient(145deg, ${theme.glow}, rgba(0,0,0,0.5))`
                    : 'rgba(9,9,11,0.6)',
            }}
        >
            {/* Заголовок блока */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-4 md:gap-6 p-6 md:p-8 text-left cursor-pointer group/btn"
            >
                {/* Номер блока */}
                <div
                    className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-2xl md:text-3xl transition-all duration-300"
                    style={{
                        background: isOpen ? theme.glow : 'rgba(39,39,42,0.3)',
                        border: `1px solid ${isOpen ? theme.border : 'rgba(63,63,70,0.3)'}`,
                    }}
                >
                    {block.icon}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                        <span
                            className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold px-2.5 py-1 rounded-full"
                            style={{
                                color: theme.text,
                                background: theme.glow,
                                border: `1px solid ${theme.border}`,
                            }}
                        >
                            Блок {block.id}
                        </span>
                        <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono hidden md:inline">
                            {block.lessons.length} урока
                        </span>
                    </div>
                    <h3 className="text-lg md:text-xl text-white font-semibold leading-tight mt-2">
                        {block.title}
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm mt-1">{block.subtitle}</p>
                </div>

                {/* Прогресс-бар */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <div className="flex gap-0.5">
                        {block.lessons.map((_, i) => (
                            <div
                                key={i}
                                className="w-2 h-8 rounded-full transition-all duration-300"
                                style={{
                                    background: isOpen ? theme.accent : 'rgba(63,63,70,0.4)',
                                    opacity: isOpen ? 0.3 + (i * 0.2) : 0.3,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-zinc-500 text-2xl shrink-0 leading-none font-light"
                >
                    +
                </motion.span>
            </button>

            {/* Раскрывающийся контент */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 md:px-8 pb-8 pt-2 flex flex-col gap-3">
                            {block.lessons.map((lesson, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex flex-col md:flex-row gap-4 md:gap-6 rounded-xl p-5 md:p-6 transition-all duration-300"
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        border: `1px solid rgba(39,39,42,0.4)`,
                                    }}
                                >
                                    {/* Левая колонка — номер и дата */}
                                    <div className="shrink-0 md:w-44 flex flex-row md:flex-col gap-3 md:gap-2 items-center md:items-start">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono"
                                            style={{
                                                color: theme.text,
                                                background: theme.glow,
                                                border: `1px solid ${theme.border}`,
                                            }}
                                        >
                                            {String(lesson.number).padStart(2, '0')}
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono">
                                            {lesson.date}
                                        </span>
                                    </div>

                                    {/* Правая колонка — контент */}
                                    <div className="flex-1 flex flex-col gap-3">
                                        <h4 className="text-white text-base md:text-lg font-semibold">
                                            {lesson.title}
                                        </h4>
                                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                            {lesson.description}
                                        </p>
                                        {lesson.points.length > 0 && (
                                            <ul className="flex flex-col gap-1.5 pt-1">
                                                {lesson.points.map((point, j) => (
                                                    <li key={j} className="text-zinc-500 text-sm flex items-start gap-2.5">
                                                        <span
                                                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                                                            style={{ background: theme.accent }}
                                                        />
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ── Основная секция ── */
export function Schedule() {
    return (
        <section className="w-full bg-black py-24 md:py-40 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-16">

                {/* Заголовок */}
                <div className="flex flex-col gap-6 border-b border-zinc-900 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em]">
                                16 уроков • 4 блока • 5 недель
                            </span>
                            <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
                                <Typewriter text="ПРОГРАММА" speed={0.05} />
                            </h2>
                        </div>
                        <span
                            className="text-sm font-semibold px-4 py-2 rounded-full mb-2"
                            style={{
                                color: '#a5b4fc',
                                background: 'rgba(99,102,241,0.1)',
                                border: '1px solid rgba(99,102,241,0.2)',
                            }}
                        >
                            🗓 Старт 15 апреля
                        </span>
                    </div>
                </div>

                {/* Обратный отсчёт */}
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em]">
                        До старта осталось
                    </span>
                    <CountdownTimer />
                </div>

                {/* Блоки */}
                <div className="flex flex-col gap-4">
                    {scheduleBlocks.map((block, i) => (
                        <BlockCard key={block.id} block={block} index={i} />
                    ))}
                </div>

                {/* Индивидуальные занятия */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col justify-between gap-6"
                    style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    }}
                >
                    {/* Декоративные элементы */}
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl"
                        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                    />

                    <div className="relative flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                            Бонус
                        </span>
                        <h3 className="text-2xl md:text-3xl text-black font-semibold leading-tight">
                            🎓 Индивидуальные занятия
                        </h3>
                        <p className="text-zinc-600 text-sm md:text-base font-light leading-relaxed max-w-xl">
                            Личный разбор вашего проекта, докрутка логики и план монетизации. По согласованию.
                        </p>
                    </div>
                    <a
                        href="https://t.me/Geodza0"
                        target="_blank"
                        className="relative group flex items-center gap-4 text-black font-mono text-sm uppercase tracking-widest"
                    >
                        Записаться
                        <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                            →
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
