
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const poems = [
  {
    id: 1,
    title: "Six Months",
    lines: [
      "Six months ago, you walked into my life,",
      "Like sunshine breaking through the cloudy sky.",
      "With every laugh, you chased away my strife,",
      "And taught my heart to learn to truly fly."
    ]
  },
  {
    id: 2,
    title: "Your Smile",
    lines: [
      "Your smile lights up the darkest of my days,",
      "A beacon in my world of endless gray.",
      "In all the small and tender, loving ways,",
      "You make me fall more deeply every day."
    ]
  },
  {
    id: 3,
    title: "Forever Beginning",
    lines: [
      "Six months feels like a lifetime, yet a day,",
      "Each moment stretched like honey in the sun.",
      "I pray this feeling never fades away—",
      "Our story's only barely just begun."
    ]
  }
];

const PoetrySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const poemRefs = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    // Animate poem containers
    poemRefs.current.forEach((poem, index) => {
      gsap.fromTo(poem,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: poem,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered line animations
    lineRefs.current.forEach((line, index) => {
      gsap.fromTo(line,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: (index % 4) * 0.3
        }
      );
    });

  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-rose-300">💕</div>
        <div className="absolute top-32 right-20 text-4xl text-pink-300">🌹</div>
        <div className="absolute bottom-20 left-1/4 text-5xl text-rose-300">💖</div>
        <div className="absolute bottom-32 right-10 text-3xl text-pink-300">✨</div>
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-rose-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
            Verses for You
          </h2>
          <p className="text-lg text-rose-400 max-w-2xl mx-auto">
            Words from my heart, written just for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {poems.map((poem, poemIndex) => (
            <div
              key={poem.id}
              ref={(el) => {
                if (el) poemRefs.current[poemIndex] = el;
              }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200"
            >
              <h3 className="text-3xl md:text-4xl font-script text-rose-600 text-center mb-8">
                {poem.title}
              </h3>
              
              <div className="space-y-4">
                {poem.lines.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    ref={(el) => {
                      if (el) lineRefs.current[poemIndex * 4 + lineIndex] = el;
                    }}
                    className="text-lg md:text-xl text-gray-700 text-center leading-relaxed font-medium"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoetrySection;
