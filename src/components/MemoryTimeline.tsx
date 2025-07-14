
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, MapPin, Coffee, Music, Clapperboard } from 'lucide-react';
import { FaRegFaceKissBeam } from "react-icons/fa6";

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
    title: "Our First Kiss",
    date: "February 13th",
    description:
      "That magical evening before everything began. after coutless hours of conversation, I just knew you were special.",
    icon: FaRegFaceKissBeam,
    color: "rose",
  },
  {
    id: 2,
    title: "Movie Night",
    date: "March 13th",
    description:
      "Witnessing Uncle bens wedding with you was one memory i will cherish for a very long time, not because of the movie but how fun it was for you to be by my side during it",
    icon: Clapperboard,
    color: "rose",
  },
  {
    id: 3,
    title: "Our Nightly Walks",
    date: "Every Nighttttttt!!!!!!!",
    description:
      "Every single time i get to spend even one second with you it always warms my heart because i love spending time wtih you sweetheart",
    icon: MapPin,
    color: "pink",
  },
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
            Every moment with you has been a treasure. Here are some of my favorite memories from our first months together.
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
        <h4 className='text-center mt-10 text-gray-400'>Heres to creating more memories with you my love 💕</h4>
      </div>
    </section>
  );
};

export default MemoryTimeline;
