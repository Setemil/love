
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, MapPin, Coffee, Music } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const memories: Memory[] = [
  {
    id: 1,
    title: "Our First Date",
    date: "January 15th",
    description: "That magical evening when everything began. Coffee turned into hours of conversation, and I knew you were special.",
    icon: Coffee,
    color: "rose"
  },
  {
    id: 2,
    title: "First Adventure",
    date: "February 3rd",
    description: "Our weekend getaway that sealed the deal. Laughing until our stomachs hurt and creating memories that still make me smile.",
    icon: MapPin,
    color: "pink"
  },
  {
    id: 3,
    title: "Concert Night",
    date: "March 12th",
    description: "Dancing under the stars, your hand in mine. The music was beautiful, but you were the real melody of my heart.",
    icon: Music,
    color: "rose"
  },
  {
    id: 4,
    title: "Captured Moments",
    date: "April 8th",
    description: "All those silly photos we took together. Each one tells a story of our growing love and endless laughter.",
    icon: Camera,
    color: "pink"
  }
];

const MemoryTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });

  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-pink-100 to-rose-50 relative">
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-4">
            Our Beautiful Journey
          </h2>
          <p className="text-lg text-rose-400 max-w-2xl mx-auto">
            Every moment with you has been a treasure. Here are some of my favorite memories from our first six months together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => {
            const IconComponent = memory.icon;
            return (
              <div
                key={memory.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-${memory.color}-200 hover:scale-105`}
              >
                <div className={`w-12 h-12 bg-${memory.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className={`w-6 h-6 text-${memory.color}-500`} />
                </div>
                
                <div className="mb-4">
                  <h3 className={`text-2xl font-bold text-${memory.color}-600 mb-2`}>
                    {memory.title}
                  </h3>
                  <p className={`text-${memory.color}-400 font-medium`}>
                    {memory.date}
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {memory.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
