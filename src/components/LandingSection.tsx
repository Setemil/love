
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Heart } from 'lucide-react';

const LandingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([titleRef.current, subtitleRef.current, heartRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate in sequence
    tl.to(heartRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.5")
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23fecdd3\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="text-center z-10 px-4">
        <div ref={heartRef} className="mb-8 inline-block">
          <Heart className="w-16 h-16 text-rose-400 animate-pulse" fill="currentColor" />
        </div>
        
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-script text-rose-600 mb-6 leading-tight"
        >
          Happy 6 Months,
          <br />
          <span className="text-pink-500">My Love</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-rose-400 font-medium"
        >
          A journey through our beautiful beginning 💕
        </p>
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Heart className="w-6 h-6 text-pink-300" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <Heart className="w-4 h-4 text-rose-300" fill="currentColor" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <Heart className="w-5 h-5 text-pink-400" fill="currentColor" />
      </div>
    </section>
  );
};

export default LandingSection;
