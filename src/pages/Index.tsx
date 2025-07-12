
import LandingSection from '@/components/LandingSection';
import MemoryTimeline from '@/components/MemoryTimeline';
import PoetrySection from '@/components/PoetrySection';
import HeartbeatSection from '@/components/HeartbeatSection';
import ClosingSection from '@/components/ClosingSection';

const Index = () => {
  return (
    <div className="font-sans">
      <LandingSection />
      <MemoryTimeline />
      <PoetrySection />
      <HeartbeatSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
