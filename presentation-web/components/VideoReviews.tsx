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
    },
    {
        id: 'd0405be74dfc970e806a05763bac6360',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-19/c4/a8/c4a85a8fd3048fed893b6412b9795b5f.jpg?size=l',
        name: 'Марина Вилюкова',
        role: 'Серийный предприниматель',
        location: '16 лет в бизнесе',
        description: 'Строит бизнесы без выгорания и хаоса. Внедрила ИИ-сотрудников: они отвечают клиентам, квалифицируют лиды и назначают встречи 24/7. Результат — рост оборота с 10 до 250 млн и сотни тысяч сэкономленных рублей в год.',
        tag: 'x25 к обороту',
    },
    {
        id: 'f12061e825e1e61701c18f33052d0e7f',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-19/b2/6a/b26af1b349eccaca8f7e2e264d938462.jpg?size=l',
        name: 'Радомир',
        role: 'Разработчик',
        location: 'Вайб-кодинг',
        description: 'После курса умеет создавать сайты, мобильные приложения, Telegram-ботов и кастомные скиллы для ИИ-агентов. Полный стек — с нуля до деплоя.',
        tag: 'Full-stack',
    },
    {
        id: '3bafb3a5fb56a3c7e16e3d4648ea1365',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-20/bf/51/bf514059bfd15b0d1fa1f984f009d03c.jpg?size=l',
        name: 'Сергей Авакян',
        role: 'Предприниматель, сооснователь A-A Awesome Apparel',
        location: 'Россия, Армения, Эстония',
        description: 'Собственное производство в России и Армении, международная торговля через Эстонию. Бренд в топ-100 селлеров женской одежды на Wildberries и топ-50 на Ozon. Вертикально интегрированный бизнес: от пошива до маркетплейсов.',
        tag: 'Топ-100 WB',
    },
    {
        id: '1dd9133b4afd12cdd6dd7159a68a46af',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-20/0b/14/0b147cbf75f821b2fba4c51cd7bce051.jpg?size=l',
        name: 'Марат',
        role: 'Маркетолог',
        location: 'Осетия',
        description: 'Пришёл в маркетинг в 33 года после службы в МВД и с нуля освоил ИИ-инструменты. Контент-план за 20 минут, визуал за минуты, анализ рынка за час вместо недели. Строит практику без манипуляций — из личного опыта.',
        tag: 'ИИ-маркетинг',
    },
    {
        id: '55774b5b80740cebb9c81e750cf8361c',
        thumbnail: 'https://pic.rtbcdn.ru/video/2026-03-20/a7/ef/a7ef82f4deed659ea8fc23dd6ac60106.jpg?size=l',
        name: 'Лариса Степаненкова',
        role: 'Инженер → продуктовый разработчик',
        location: 'Авиастроение → Вайб-кодинг',
        description: 'Инженер из авиастроения, за несколько недель собрала CRM-связку для автоматизации лидов и AI-бота для астрологических консультаций. Инженерное мышление — трижды поймала ошибки, которые пропустил сам ИИ.',
        tag: 'Из инженера в IT',
    },
    {
        id: '4ee08a26da6b1353da963ff1189f298b',
        privateKey: 'bsY0MRwbkhP6ZNrd20zDeQ',
        thumbnail: '/reviews/andrei_real.png',
        name: 'Андрей',
        role: 'Водитель → вайб-кодер',
        location: 'Санкт-Петербург',
        description: '42 года, работает на двух работах (график 3/1), женат, двое дочерей. Изучает нейросети и вайб-кодинг в ночное время — между сменами. Цель — создать AI-агента для автоматической торговли на бирже, чтобы деньги работали пока он за рулём.',
        tag: 'AI-трейдинг',
    },
    {
        id: '56f5ef654d581c0429036555ec491172',
        thumbnail: '/reviews/igor_real.jpg',
        name: 'Игорь',
        role: 'Врач-кардиохирург, кардиолог, психолог',
        location: 'Медицина → ИИ',
        description: 'Кардиохирург и психолог с инженерным образованием и прошлым испытателя лодок. Разрабатывает медицинские AI-диагностические программы, ботов для клиник с прицелом на госсектор. Понимает, что медицина изменится через ИИ — и действует на опережение.',
        tag: 'AI в медицине',
    },
    {
        id: 'c90ef1605461bd6cd9b27f3f7f1febf4',
        thumbnail: '/reviews/irina.jpg',
        name: 'Ирина',
        role: 'Начинающий специалист в белом ввозе из Китая (ВЭД)',
        location: 'ВЭД → ИИ',
        description: 'Ведёт Telegram-канал, где совмещает тему таможни и практику с ИИ. Не теоретик — тестирует нейросети в реальных задачах ВЭД и делится результатами. Цель — сделать сложную тему доступной и автоматизировать её через AI.',
        tag: 'ВЭД + ИИ',
    },
    {
        id: 'ae93303f0ee8ff15959a2fb1ddfc71fd',
        privateKey: 'jzKyWTkwXneTPIkoCN2Sxg',
        thumbnail: '/reviews/aleksandr.png',
        name: 'Александр',
        role: 'Владелец мебельного производства',
        location: 'Мебель → ИИ-двойник',
        description: 'Владелец мебельного производства (10-12 человек в штате), тащит на себе весь цикл: директ, маркетинг, проектирование, закупки, заказы. Запустил бота «Алина» на Claude через Savvy прямо в процессе обучения — клиенты уверены, что общаются с живым человеком, агент уже принёс 650 000 рублей. Цель — собрать полный цифровой двойник себя, который консультирует, принимает заказы и управляет рекламой без его участия.',
        tag: '650К через бота',
    },
    {
        id: '054770d994bfd84fa0d9128dbfd2f8ea',
        thumbnail: '/reviews/natalya.jpg',
        name: 'Наталья Гинзина',
        role: 'Предпринимательница, полиграфия и недвижимость',
        location: 'Рига, Латвия',
        description: 'Руководитель проектов в офсетной печати, упаковке и недвижимости. Пришла автоматизировать расчёт смет и контроль производства — строит собственное агентство по AI-автоматизации для латвийского рынка.',
        tag: 'Агентство автоматизации',
    },
    {
        id: '8ba67ee4b97ba62ec5f264f9b5f4365b',
        thumbnail: '/reviews/yulia.jpg',
        name: 'Юлия',
        role: 'Предприниматель → AI-разработчик',
        location: 'Node.js → AI-юрист',
        description: 'Техническая предпринимательница с опытом в Node.js и TypeScript. Создаёт AI-юриста на базе российского законодательства для защиты авторских прав и бота для продаж. Назначена ответственной за кибербезопасность в группе.',
        tag: 'AI-юрист',
    },
    {
        id: 'c97db1dba068af6baf4c038e70cb5701',
        thumbnail: '/reviews/aleksey.png',
        name: 'Алексей',
        role: 'Директор металлообрабатывающего производства',
        location: 'Производство → ИИ-управление',
        description: 'Руководит производством на 50-60 человек. Год в теме ИИ: написал программу управления, несколько ботов, парсеры данных из Excel и PDF. Цель — связать все разрозненные решения в единую систему с интеграцией 1С и полным ИИ-контуром управления.',
        tag: 'ИИ на заводе',
    },
    {
        id: 'a2f1f88f2e4c324a0304523eb6255801',
        thumbnail: '/reviews/samosudov.png',
        name: 'Александр Самосудов',
        role: 'Мебельщик-одиночка',
        location: 'Новосибирск',
        description: 'Делает мебель на заказ в одиночку. Пришёл на курс с идеей калькулятора для мебельщиков — на его задаче Георгий показал весь цикл разработки в прямом эфире. От ручных расчётов к AI-инструменту для своей ниши.',
        tag: 'Калькулятор мебели',
    },
    {
        id: '0226efe310fba0fd295cc5a4d89aa7c5',
        thumbnail: '/reviews/naira.jpg',
        name: 'Наира',
        role: 'Куратор курса, 2-й поток',
        location: 'Интернет-магазин за курс',
        description: 'Прошла первый поток и осталась на второй — уже как куратор. Создала рабочий интернет-магазин обуви для своей компании и обработала 270 фотографий за 10 минут через Antigravity. Помогает новым ученикам осваивать ИИ.',
        tag: '270 фото за 10 мин',
    },
];

function VideoCard({ review, index }: { review: typeof reviews[0]; index: number }) {
    const [playing, setPlaying] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportLeave={() => setPlaying(false)}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-glow flex flex-col h-full rounded-sm overflow-hidden bg-zinc-950/50 border border-zinc-900"
        >
            {/* Video — вертикальный формат 9:16 */}
            <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                {!playing ? (
                    <button
                        onClick={() => setPlaying(true)}
                        className="absolute inset-0 w-full h-full flex items-center justify-center group overflow-hidden bg-zinc-800"
                    >
                        {/* Обложка */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={review.thumbnail || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                            alt={review.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                        {/* Градиент снизу */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        {/* Лёгкий оверлей */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Кнопка Play — белая, без цвета */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative flex items-center justify-center rounded-sm bg-white"
                            style={{ width: 56, height: 56 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="black" style={{ marginLeft: 3 }}>
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    </button>
                ) : (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://rutube.ru/play/embed/${review.id}/?autoplay=1&skinColor=000000&hide_controls=1${review.privateKey ? `&p=${review.privateKey}` : ''}`}
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
                    <span className="shrink-0 text-[9px] uppercase tracking-[0.15em] font-mono text-zinc-500 px-2 py-1 border border-zinc-800 rounded-sm whitespace-nowrap">
                        {review.tag}
                    </span>
                </div>

                <div className="h-px w-full bg-zinc-900" />

                <p className="text-zinc-400 text-sm leading-relaxed font-light">{review.description}</p>

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-1.5 text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-sm bg-zinc-700 shrink-0" />
                    {review.location}
                </span>
            </div>
        </motion.div>
    );
}

export function VideoReviews() {
    return (
        <section id="reviews" className="w-full bg-black py-24 md:py-40 px-6 md:px-12 flex flex-col items-center">
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
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em] mb-2 self-start md:self-auto">
                            Видео-отзывы учеников
                        </span>
                    </div>
                </div>

                {/* Карточки */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full items-stretch">
                    {reviews.map((review, i) => (
                        <VideoCard key={review.id} review={review} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
