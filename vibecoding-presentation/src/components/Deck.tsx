'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { slides } from '../data/slides';
import { Slide } from './Slide';

export default function Deck() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            } else if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <main className="presentation-container relative flex items-center justify-center overflow-hidden bg-black text-white">
            <AnimatePresence mode="wait">
                <Slide
                    key={slides[currentSlide].id}
                    data={slides[currentSlide]}
                    isActive={true}
                />
            </AnimatePresence>

            {/* Controls */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 z-[200]">
                <button
                    onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
                    className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/40 hover:text-white"
                >
                    ←
                </button>
                <div className="text-white/20 font-mono text-sm tracking-widest">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </div>
                <button
                    onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
                    className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all text-white/40 hover:text-white"
                >
                    →
                </button>
            </div>

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[200] bg-white/5">
                <div
                    className="h-full bg-white/40 transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
            </div>
        </main>
    );
}
