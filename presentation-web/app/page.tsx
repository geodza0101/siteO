import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Portfolio } from '@/components/ContentSections';
import { Cases } from '@/components/Cases';
import { VideoReviews } from '@/components/VideoReviews';
import { Schedule } from '@/components/Schedule';
import { Pricing } from '@/components/Pricing';
import { Lifestyle } from '@/components/Lifestyle';
import { Values } from '@/components/Values';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main className="w-full bg-black">
      {/* 1. HOOK - Attention-grabbing promise */}
      <Hero />

      {/* 2. PROBLEM - Why current approaches don't work */}
      <Problem />

      {/* 3. METHOD - What you'll learn (6 stages + skills) */}
      <Portfolio />

      {/* 4. PROOF - Cases, results */}
      <Cases />

      {/* 4.5 VIDEO REVIEWS - Student testimonials */}
      <VideoReviews />

      {/* 5. SCHEDULE - Course program */}
      <Schedule />

      {/* 6. PRICING - Training formats and costs */}
      <Pricing />

      {/* 7. LIFESTYLE - Personal side, hobbies */}
      <Lifestyle />

      {/* 8. PHILOSOPHY - Values and principles */}
      <Values />

      {/* 9. OBJECTIONS - FAQ */}
      <FAQ />

      {/* 10. CTA - Clear call to action */}
      <CTA />
    </main>
  );
}
