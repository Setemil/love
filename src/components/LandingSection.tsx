import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const LandingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation using CSS transitions instead of GSAP
    const elements = [heartRef.current, titleRef.current, subtitleRef.current];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100 relative overflow-hidden"
    >
      {/* Background decoration with proper pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bfdbfe' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="text-center z-10 px-4 max-w-4xl">
        <div
          ref={heartRef}
          className="mb-8 inline-block opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
        >
          <Heart
            className="w-16 h-16 text-sky-400 animate-pulse"
            fill="currentColor"
          />
        </div>

        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl font-bold text-sky-600 mb-6 leading-tight opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Happy 5 Months,
          <br />
          <span className="text-blue-400">My Love Jesuloba</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-sky-500 font-medium opacity-0 transform translate-y-12 transition-all duration-1000 ease-out"
        >
          A journey through our beautiful beginning 💕
        </p>
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Heart className="w-6 h-6 text-sky-300" fill="currentColor" />
      </div>
      <div
        className="absolute top-20 right-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-4 h-4 text-blue-300" fill="currentColor" />
      </div>
      <div
        className="absolute bottom-20 left-20 animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        <Heart className="w-5 h-5 text-sky-400" fill="currentColor" />
      </div>
    </section>
  );
};

export default LandingSection;
