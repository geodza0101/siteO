'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const reviews = [
    {
        id: 'c377df0587cd26986bed70b7eaaf2bf7',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-19/1c/86/1c86ae8c5ff8ad276fbf7a415f973234.jpg?size=l',
        name: 'Александр Калинин',
        role: 'Предприниматель, производство',
        location: 'Урал → Калининград',
        description: 'Прошёл путь от сварщика до владельца производства. Освоил ИИ-инструменты и строит удалённую команду из 4 человек. Цель — работать из любой точки мира, не привязываясь к месту.',
        tag: 'Бизнес + ИИ',
        tagColor: '#6366f1',
        tagGlow: 'rgba(99,102,241,0.15)',
        tagBorder: 'rgba(99,102,241,0.25)',
    },
    {
        id: 'd0405be74dfc970e806a05763bac6360',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-19/c4/a8/c4a85a8fd3048fed893b6412b9795b5f.jpg?size=l',
        name: 'Марина Вилюкова',
        role: 'Серийный предприниматель',
        location: '16 лет в бизнесе',
        description: 'Строит бизнесы без выгорания и хаоса. Внедрила ИИ-сотрудников: они отвечают клиентам, квалифицируют лиды и назначают встречи 24/7. Результат — рост оборота с 10 до 250 млн и сотни тысяч сэкономленных рублей в год.',
        tag: 'x25 к обороту',
        tagColor: '#10b981',
        tagGlow: 'rgba(16,185,129,0.15)',
        tagBorder: 'rgba(16,185,129,0.25)',
    },
    {
        id: 'f12061e825e1e61701c18f33052d0e7f',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-19/b2/6a/b26af1b349eccaca8f7e2e264d938462.jpg?size=l',
        name: 'Радомир',
        role: 'Разработчик',
        location: 'Вайб-кодинг',
        description: 'После курса умеет создавать сайты, мобильные приложения, Telegram-ботов и кастомные скиллы для ИИ-агентов. Полный стек — с нуля до деплоя.',
        tag: 'Full-stack',
        tagColor: '#f59e0b',
        tagGlow: 'rgba(245,158,11,0.15)',
        tagBorder: 'rgba(245,158,11,0.25)',
    },
];

function VideoCard({ review, index }: { review: typeof reviews[0]; index: number }) {
    const [playing, setPlaying] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full rounded-2xl overflow-hidden"
            style={{
                background: 'rgba(9,9,11,0.8)',
                border: '1px solid rgba(39,39,42,0.6)',
            }}
        >
            {/* Video — вертикальный формат 9:16 */}
            <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                {!playing ? (
                    <button
                        onClick={() => setPlaying(true)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center group overflow-hidden rounded-t-2xl"
                    >
                        {/* Обложка */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={review.thumbnail}
                            alt={review.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Градиент снизу для читаемости */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Лёгкий оверлей */}
                        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

                        {/* Кнопка Play */}
                        <motion.div
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-18 h-18 flex items-center justify-center rounded-full"
                            style={{
                                width: 64,
                                height: 64,
                                background: `linear-gradient(135deg, ${review.tagColor}, ${review.tagColor}bb)`,
                                boxShadow: `0 0 50px ${review.tagColor}88, 0 8px 24px rgba(0,0,0,0.5)`,
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 3 }}>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    </button>
                ) : (
                    /* iframe без параметров плашки Rutube */
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://rutube.ru/play/embed/${review.id}/?autoplay=1&skinColor=000000&hide_controls=1`}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        style={{ border: 0 }}
                    />
                )}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                        <h3 className="text-white font-semibold text-base leading-tight">{review.name}</h3>
                        <span className="text-zinc-500 text-xs">{review.role}</span>
                    </div>
                    <span
                        className="shrink-0 text-[9px] uppercase tracking-[0.15em] font-mono font-semibold px-2 py-1 rounded-full whitespace-nowrap"
                        style={{
                            color: review.tagColor,
                            background: review.tagGlow,
                            border: `1px solid ${review.tagBorder}`,
                        }}
                    >
                        {review.tag}
                    </span>
                </div>

                <div className="h-px w-full" style={{ background: 'rgba(39,39,42,0.6)' }} />

                <p className="text-zinc-400 text-sm leading-relaxed font-light">{review.description}</p>

                <span
                    className="text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-1.5"
                    style={{ color: review.tagColor }}
                >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: review.tagColor }} />
                    {review.location}
                </span>
            </div>
        </motion.div>
    );
}

export function VideoReviews() {
    return (
        <section className="w-full bg-black py-24 md:py-40 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-16">

                {/* Заголовок */}
                <div className="flex flex-col gap-6 border-b border-zinc-900 pb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em]">
                                Реальные истории • Реальные результаты
                            </span>
                            <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
                                ОТЗЫВЫ
                            </h2>
                        </div>
                        <span
                            className="text-sm font-semibold px-4 py-2 rounded-full mb-2 self-start md:self-auto"
                            style={{
                                color: '#a5b4fc',
                                background: 'rgba(99,102,241,0.1)',
                                border: '1px solid rgba(99,102,241,0.2)',
                            }}
                        >
                            🎥 Видео-отзывы учеников
                        </span>
                    </div>
                </div>

                {/* Карточки — 3 колонки, вертикальные */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full items-stretch">
                    {reviews.map((review, i) => (
                        <VideoCard key={review.id} review={review} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
