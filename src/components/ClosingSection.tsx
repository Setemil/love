import { useState, useRef } from "react";
import { gsap } from "gsap";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  const [showSecret, setShowSecret] = useState(false);
  const secretRef = useRef<HTMLDivElement>(null);
  const heartRainRef = useRef<HTMLDivElement>(null);

  const handleRevealSecret = () => {
    setShowSecret(true);

    // Animate secret message
    gsap.fromTo(
      secretRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );

    // Start heart rain
    startHeartRain();
  };

  const startHeartRain = () => {
    const container = heartRainRef.current;
    if (!container) return;

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerHTML = ["💖", "💕", "💗", "💓", "💝"][
        Math.floor(Math.random() * 5)
      ];
      heart.className =
        "absolute text-2xl animate-falling-hearts pointer-events-none";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = 2 + Math.random() * 3 + "s";
      heart.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(heart);

      setTimeout(() => {
        if (container.contains(heart)) {
          container.removeChild(heart);
        }
      }, 5000);
    };

    // Create initial burst
    for (let i = 0; i < 15; i++) {
      setTimeout(createHeart, i * 100);
    }

    // Continue creating hearts
    const interval = setInterval(createHeart, 300);

    // Stop after 10 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-rose-100 to-pink-200 relative overflow-hidden">
      {/* Heart rain container */}
      <div
        ref={heartRainRef}
        className="absolute inset-0 pointer-events-none z-10"
      ></div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />

          <h2 className="text-4xl md:text-6xl font-script text-rose-600 mb-8 leading-tight">
            A Letter from My Heart
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-rose-200 mb-12">
            <div className="font-script text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p>My Dearest Loba,</p>

              <p>
                These past few months have been nothing short of magical. You've
                brought color to my world in ways I never thought possible.
                Every morning I wake up grateful for another day to love you,
                and every night I fall asleep counting the reasons why you're
                perfect for me.
              </p>

              <p>
                You are my sunshine on cloudy days, my anchor in stormy weather,
                and my greatest adventure all wrapped into one beautiful soul. I
                love the way you laugh at my terrible jokes, how you make
                everything better just by being there, and the way you see the
                world with such wonder and kindness.
              </p>

              <p>
                Ever since the 28th of November 2024 that we started talking,
                You have done nothing but bring sunshine to my gloomy days,
                support me when im in need, encourage me whenever you notice i
                need a push and most importantly you celebrate my wins and
                achievements like its yours, i honestly cannot imagine how a
                better girfriend should be if not how you are to me.
              </p>

              <p>
                I love you so very much Esther and I pray God gives you
                everything you desire in this life and i pray you win and
                achieve every single one of your ambitions, I love you and i
                cherush you, although it may not seem that way at times, believe
                me when i say "IM IN LOVE WITH YOU SMALLIE"
              </p>

              <p className="text-rose-600 font-bold">
                All my love, always and forever ✨
              </p>
            </div>
          </div>

          {!showSecret ? (
            <Button
              onClick={handleRevealSecret}
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Let's Make More Memories 💖
            </Button>
          ) : (
            <div
              ref={secretRef}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-3xl md:text-4xl font-script mb-6">
                Our Secret Promise 🌟
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                Six months + forever to go = ∞
              </p>
              <p className="text-lg opacity-90">
                Here's to all the adventures yet to come, all the laughs we'll
                share, all the dreams we'll chase together, and all the love
                that will only grow stronger with time. You and me, always and
                forever. 💕
              </p>

              <div className="mt-8 text-4xl font-script">
                I Love You Beyond Words 💖✨🌹
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 animate-float">
          <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
        </div>
        <div
          className="absolute top-20 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Heart className="w-6 h-6 text-pink-400" fill="currentColor" />
        </div>
        <div
          className="absolute bottom-20 left-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Heart className="w-10 h-10 text-rose-400" fill="currentColor" />
        </div>
        <div
          className="absolute bottom-32 right-1/4 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Heart className="w-7 h-7 text-pink-400" fill="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
