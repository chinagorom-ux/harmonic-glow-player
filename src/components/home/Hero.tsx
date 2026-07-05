import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full" />
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4dbd9a5b-8c30-4ca3-bdcc-872c7bfe2f37/harmonic-hero-bg-68ceff90-1783274240456.webp" 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" 
          alt="" 
        />
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Music for Every <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moment</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Discover thousands of tracks, handpicked playlists, and underground artists today. Your sonic journey starts here.
        </p>
        <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Button size="lg" className="rounded-full px-8 h-14 text-lg gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            <Play className="fill-current" />
            Listen Now
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg transition-all hover:bg-white/5 active:scale-95">
            Explore Charts
          </Button>
        </div>
      </div>
    </section>
  );
}
