
'use client';

import { motion } from 'framer-motion';

export function CTA() {
    return (
        <section className="w-full bg-white py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1000px] w-full flex flex-col items-center text-center gap-8">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl text-black font-semibold leading-[1.1]"
                >
                    Готов стать AI-Инженером?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-600 text-lg md:text-xl font-light max-w-xl"
                >
                    Запишись на бесплатную консультацию. Разберём твою ситуацию и покажу, как AI может работать на тебя.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                >
                    <a
                        href="https://t.me/Geodza0"
                        target="_blank"
                        className="px-8 py-4 bg-black text-white font-medium text-sm uppercase tracking-widest hover:bg-zinc-900 transition-colors rounded-sm"
                    >
                        Написать в Telegram
                    </a>
                </motion.div>

                <p className="text-zinc-400 text-xs mt-8 font-mono uppercase tracking-widest">
                    Ответ в течение 24 часов
                </p>

            </div>
        </section>
    );
}
