
'use client';

import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

export function Founder() {
    return (
        <section className="w-full bg-zinc-950 py-24 md:py-32 px-6 md:px-12 flex flex-col items-center border-t border-zinc-900">
            <div className="max-w-[1000px] w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">

                {/* Image Placeholder or Avatar */}
                <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
                    {/* Assuming we might have an image or just a placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono uppercase">
                        Founder
                    </div>
                    <img
                        src="/george.jpg"
                        alt="Georgiy Dzhachvadze"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale"
                    />
                </div>

                <div className="flex flex-col gap-8 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Об авторе</span>
                        <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight">
                            Георгий Джачвадзе
                        </h2>
                    </div>



                    <div className="relative p-6 border-l-2 border-zinc-800 bg-zinc-900/30 flex flex-col gap-4">
                        <p className="text-zinc-300 italic font-light leading-relaxed">
                            «У меня два красных диплома — и это абсурд. Я не учился, я взламывал систему. Социальная инженерия, пока другие зубрили.»
                        </p>
                        <p className="text-zinc-400 text-sm font-light leading-relaxed">
                            Быть инженером — это не корочка.  Это рентгеновское зрение: ты смотришь на хаос и мгновенно видишь Систему.
                            Я обучил <strong className="text-white">300+ человек</strong>. Вместе они заработали <strong className="text-white">25 млн рублей</strong>. Теперь твоя очередь.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
