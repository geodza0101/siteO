'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';
import { portfolioCases, architectureStages } from '../data/portfolio';

export function Portfolio() {
    return (
        <section className="w-full bg-black py-24 md:py-32 px-6 md:px-12 flex flex-col items-center">
            <div className="max-w-[1400px] w-full flex flex-col gap-24 md:gap-32">

                {/* Services Section */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-12">
                        <h2 className="text-4xl md:text-6xl text-white font-semibold leading-[1.2]">
                            <Typewriter text="ЧТО ТЫ ОСВОИШЬ" speed={0.05} />
                        </h2>
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.3em] mb-2">
                            Твои новые способности
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolioCases.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-6 p-8 border border-zinc-900 bg-zinc-950/30 rounded-sm hover:border-zinc-700 transition-colors group"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-xs text-zinc-600 font-mono uppercase tracking-widest">{item.category}</span>
                                    <span className="text-zinc-800 font-mono text-xl group-hover:text-white transition-colors">↗</span>
                                </div>
                                <h3 className="text-2xl text-white font-medium group-hover:text-zinc-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Architecture Section */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6 border-b border-zinc-900 pb-12">
                        <h2 className="text-3xl md:text-5xl text-white font-semibold leading-[1.2]">
                            ПУТЬ ОТ ИДЕИ К ИМПЕРИИ
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light leading-relaxed">
                            6 этапов AI-Бизнес Архитектуры — это полный цикл, который ты освоишь.
                            Каждый этап — конкретный навык, который превращает идею в работающий бизнес с AI-командой.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {architectureStages.map((stage, i) => (
                            <motion.div
                                key={stage.step}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col gap-3 p-6 border-l border-zinc-900 hover:border-white/20 hover:bg-zinc-900/20 transition-all"
                            >
                                <span className="text-zinc-700 font-mono text-xs uppercase tracking-widest mb-2">Step {stage.step}</span>
                                <h4 className="text-lg text-white font-medium">{stage.title}</h4>
                                <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed">
                                    {stage.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
