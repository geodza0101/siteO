export interface Metric {
    label: string;
    value: string;
    sub?: string;
}

export interface SlideData {
    id: string;
    title: string;
    subtitle?: string;
    type: 'hero' | 'about' | 'timeline' | 'vibecoding' | 'case' | 'devcycle' | 'mindset' | 'pricing' | 'cta';
    content?: string[];
    metrics?: Metric[];
    accent?: string;
    icon?: string;
    image?: string;
}

export const slides: SlideData[] = [
    {
        id: '1',
        title: "Вайбкодинг: Последний тренд ИИ",
        subtitle: "Будущее разработки уже здесь",
        type: 'hero',
        accent: "from-blue-600 to-purple-600"
    },
    {
        id: '2',
        title: "Георгий Джачвадзе",
        subtitle: "AI-Инженер & Вайбкодер",
        type: 'about',
        content: [
            "300+ обученных специалистов",
            "7 лет в product-маркетинге",
            "3+ года в AI-разработке",
            "Спикер БРИКС+, Skillbox"
        ]
    },
    {
        id: '3',
        title: "Хронология ИИ-заработка",
        subtitle: "Как менялся рынок",
        type: 'timeline',
        content: [
            "2022: ИИ как подручное средство (копирайтинг, маркетинг)",
            "2023: Фиктивные автоматизации (GPTs боты)",
            "2024: ИИ-Агентства и работа в связке",
            "2025: Вайбкодинг — доступ к разработке для всех"
        ]
    },
    {
        id: '4',
        title: "Проблема 'Гейткиперов'",
        subtitle: "Почему раньше было сложно",
        type: 'timeline',
        content: [
            "Разработчики диктовали свои правила",
            "Бизнес зависел от интеллекта наемных сотрудников",
            "Высокий порог входа в создание IT-продуктов",
            "Огромные бюджеты на проверку простых гипотез"
        ]
    },
    {
        id: '5',
        title: "Что такое Вайбкодинг?",
        subtitle: "Новая парадигма созидания",
        type: 'vibecoding',
        content: [
            "Способность кодить без знаний синтаксиса",
            "Фокус на смыслах, а не на коде",
            "Создание ботов, приложений и сайтов через диалог с ИИ",
            "Цикл создания продукта сокращен в 10 раз"
        ]
    },
    // CASES (11 slides)
    {
        id: 'case-1',
        title: "ИИ-Калькулятор Сделок",
        subtitle: "Кейс: Финтех-автоматизация",
        type: 'case',
        metrics: [
            { label: "Скорость расчета", value: "-92%", sub: "27 мин → 2 мин" },
            { label: "Точность", value: "99.9%", sub: "Минимизация ошибок" },
            { label: "Экономия ФОТ", value: "240к ₽", sub: "в месяц" }
        ],
        accent: "from-green-500 to-teal-600"
    },
    {
        id: 'case-2',
        title: "ИИ Звонарь",
        subtitle: "Кейс: Автоматизация продаж",
        type: 'case',
        metrics: [
            { label: "Обработка заявок", value: "x3", sub: "Без расширения штата" },
            { label: "Доступность", value: "24/7", sub: "Мгновенная реакция" },
            { label: "Конверсия", value: "+15%", sub: "За счет скорости" }
        ],
        accent: "from-blue-500 to-indigo-600"
    },
    {
        id: 'case-3',
        title: "iCore AI: Нутрициолог",
        subtitle: "Кейс: HealthTech стартап",
        type: 'case',
        metrics: [
            { label: "Vision AI", value: "3 сек", sub: "на ввод еды" },
            { label: "Точность", value: "96%", sub: "распознавания" },
            { label: "LTV", value: "x2.5", sub: "удержание через эмпатию" }
        ],
        accent: "from-orange-500 to-red-600"
    },
    {
        id: 'case-4',
        title: "AI Dubbing & Конвейер",
        subtitle: "Кейс: Глобальный маркетинг",
        type: 'case',
        metrics: [
            { label: "Выход на мир", value: "30 сек", sub: "Дубляж HeyGen" },
            { label: "Контент", value: "1000+", sub: "роликов автопостингом" },
            { label: "Трафик", value: "Миллионы", sub: "органических просмотров" }
        ],
        accent: "from-pink-500 to-rose-600"
    },
    {
        id: 'case-5',
        title: "VOID VPN: Telegram SaaS",
        subtitle: "Кейс: Прибыльный микро-сервис",
        type: 'case',
        metrics: [
            { label: "Конверсия в оплату", value: "8.19%", sub: "из холодного трафика" },
            { label: "Чистая прибыль", value: "100к+", sub: "в месяц на автомате" },
            { label: "Окупаемость", value: "Instant", sub: "Низкие косты на сервер" }
        ],
        accent: "from-cyan-500 to-blue-600"
    },
    {
        id: 'case-6',
        title: "SEO Робот Plata",
        subtitle: "Кейс: Авто-контент для ювелирки",
        type: 'case',
        metrics: [
            { label: "Затраты на копирайтинг", value: "-70%", sub: "Полная автоматизация" },
            { label: "Объем", value: "30+", sub: "SEO статей в месяц" },
            { label: "Индексация", value: "Мгновенно", sub: "в Яндекс и Google" }
        ],
        accent: "from-yellow-500 to-orange-600"
    },
    {
        id: 'case-7',
        title: "ИИ-HR: Рекрутинг 3.0",
        subtitle: "Кейс: Масштабирование команды",
        type: 'case',
        metrics: [
            { label: "Скорость найма", value: "3x", sub: "Вместо месяцев — дни" },
            { label: "Время HR", value: "-80%", sub: "Только целевые анкеты" },
            { label: "Match Score", value: "95%", sub: "соответствие вакансии" }
        ],
        accent: "from-purple-500 to-violet-600"
    },
    {
        id: 'case-8',
        title: "Робот СКЛАД МЕБЕЛЬ",
        subtitle: "Кейс: Продажи на Avito",
        type: 'case',
        metrics: [
            { label: "Работа", value: "24/7", sub: "Без праздников и сна" },
            { label: "Результат", value: "Продажа", sub: "через 3 дня после запуска" },
            { label: "Человеко-часы", value: "0", sub: "на обработку лидов" }
        ],
        accent: "from-amber-600 to-orange-700"
    },
    {
        id: 'case-9',
        title: "Саммари-бот чатов",
        subtitle: "Кейс: Эффективность СЕО",
        type: 'case',
        metrics: [
            { label: "Экономия времени", value: "3 часа", sub: "ежедневно на чтение" },
            { label: "Охват", value: "20+", sub: "рабочих чатов в отчете" },
            { label: "Точность", value: "100%", sub: "акценты и договоренности" }
        ],
        accent: "from-emerald-500 to-green-600"
    },
    {
        id: 'case-10',
        title: "Застройщик на Кипре",
        subtitle: "Кейс: Лидогенерация High-Ticket",
        type: 'case',
        metrics: [
            { label: "Чистая прибыль", value: "5000€", sub: "за 3 недели" },
            { label: "Кол-во лидов", value: "+40%", sub: "без роста бюджета" },
            { label: "ROI", value: "Extreme", sub: "на теплых сигналах" }
        ],
        accent: "from-sky-500 to-blue-700"
    },
    {
        id: 'case-11',
        title: "ИИ-База Agent Finance",
        subtitle: "Кейс: Поддержка партнеров",
        type: 'case',
        metrics: [
            { label: "Автоматизация", value: "95%", sub: "вопросов решает ИИ" },
            { label: "Скорость ответа", value: "Instant", sub: "вместо часов ожидания" },
            { label: "Довольство", value: "4.9/5", sub: "отзывы партнеров" }
        ],
        accent: "from-slate-600 to-slate-900"
    },
    {
        id: 'dev-cycle',
        title: "Стратегия Разработки",
        subtitle: "Цикл создания продукта",
        type: 'devcycle',
        content: [
            "⚡ Исследования (Ядро любой задачи)",
            "1. Идея",
            "2. Wireframing",
            "3. PRD",
            "4. Архитектура",
            "5. Дизайн",
            "6. Правила для ИИ-разраба",
            "7. Задачник и отчеты",
            "8. Виртуальное тестирование",
            "9. Деплой"
        ]
    },
    {
        id: 'mindset',
        title: "Мышление в ИИ-разработке",
        subtitle: "Блок про психологию созидания",
        type: 'mindset',
        content: [
            "Видеть систему, а не хаос",
            "Работать над смыслами, а не символами",
            "FAIL FAST — тестировать гипотезы дешево",
            "Дирижировать армией ИИ-агентов"
        ]
    },
    {
        id: 'pricing',
        title: "Программа: AI-ИНЖЕНЕР",
        subtitle: "Стань профи за 8 недель",
        type: 'pricing',
        content: [
            "8 блоков практики: от инфраструктуры до продаж",
            "Соберешь своего AI-бота и лендинг",
            "Научишься работать с API и данными",
            "Индивидуальные разборы проектов",
            "СТАРТ: ЗАВТРА"
        ],
        metrics: [
            { label: "Инвестиция", value: "49 000 ₽", sub: "+5к на расходники" },
            { label: "Места", value: "ПОСЛЕДНИЕ", sub: "@Geodza0" }
        ]
    },
    {
        id: 'cta',
        title: "Твой шаг в будущее",
        subtitle: "Старт завтра. Занимай место.",
        type: 'cta',
        content: [
            "Пиши: @Geodza0",
            "Канал: @neiro_void",
            "Сайт: business-n8n.ru"
        ]
    }
];
