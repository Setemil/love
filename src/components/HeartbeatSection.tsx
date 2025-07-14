
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Heart } from 'lucide-react';

const HeartbeatSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [clicked, setClicked] = useState(false);
  const heartRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Continuous heartbeat animation
    const heartbeat = gsap.timeline({ repeat: -1 });
    heartbeat.to(heartRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.inOut"
    }).to(heartRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.inOut"
    });

    return () => {
      heartbeat.kill();
    };
  }, []);

  const handleHeartClick = () => {
    if (!clicked) {
      setClicked(true);
      setShowMessage(true);
      
      // Heart explosion effect
      gsap.to(heartRef.current, {
        scale: 1.3,
        duration: 0.2,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(heartRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });

      // Message animation
      gsap.fromTo(messageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5
      });

      // Create floating hearts
      createFloatingHearts();
    }
  };

  const createFloatingHearts = () => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 12; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '💖';
      heart.className = 'absolute text-2xl pointer-events-none';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.transform = 'translate(-50%, -50%)';
      container.appendChild(heart);

      const angle = (i * 30) * (Math.PI / 180);
      const distance = 150 + Math.random() * 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.to(heart, {
        x: x,
        y: y,
        opacity: 0,
        scale: 0,
        duration: 2,
        ease: "power2.out",
        delay: i * 0.1,
        onComplete: () => {
          container.removeChild(heart);
        }
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-rose-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-script text-rose-600 mb-8">
            My Heart Beats for You
          </h2>
          
          <div 
            ref={containerRef}
            className="relative inline-block mb-8"
          >
            <div
              ref={heartRef}
              onClick={handleHeartClick}
              className="cursor-pointer transition-all duration-300 hover:drop-shadow-lg"
            >
              <Heart 
                className="w-32 h-32 text-rose-400 drop-shadow-md" 
                fill="currentColor"
              />
            </div>
          </div>

          <p className="text-lg text-rose-400 mb-8 max-w-2xl mx-auto">
            Click on my heart to feel how much it beats for you
          </p>

          {showMessage && (
            <div
              ref={messageRef}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-rose-200 max-w-2xl mx-auto"
            >
              <h3 className="text-3xl font-script text-rose-600 mb-4">
                Every Beat is for You 💕
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                In every heartbeat, in every breath, in every moment of every day, 
                you are the rhythm that keeps me alive. You are my heart's favorite melody, 
                and these five months have been the most beautiful song I've ever known.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Background heartbeat visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Heart className="w-6 h-6 text-rose-400" fill="currentColor" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: '1s' }}>
          <Heart className="w-10 h-10 text-pink-400" fill="currentColor" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Heart className="w-7 h-7 text-rose-400" fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default HeartbeatSection;
