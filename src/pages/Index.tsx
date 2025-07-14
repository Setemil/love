import { useEffect, useRef, useState } from "react";
import LandingSection from "@/components/LandingSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import PoetrySection from "@/components/PoetrySection";
import HeartbeatSection from "@/components/HeartbeatSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Handle play/pause state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Cleanup
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      // Try to play music after user interaction
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
    }
  };

  return (
    <div className="font-sans" onClick={handleUserInteraction}>
      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto" >
        <source src="/blue.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Control Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all duration-200"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Your existing components */}
      <LandingSection />
      <MemoryTimeline />
      <PoetrySection />
      <HeartbeatSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
