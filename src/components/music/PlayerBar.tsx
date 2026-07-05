import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { Track } from '@/constants/tracks';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlayerBarProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVolumeChange: (val: number) => void;
  onSeek: (val: number) => void;
}

export function PlayerBar({
  currentTrack,
  isPlaying,
  volume,
  progress,
  onTogglePlay,
  onNext,
  onPrev,
  onVolumeChange,
  onSeek,
}: PlayerBarProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass border-t h-24 md:h-20 px-4 md:px-8">
      <div className="container mx-auto h-full grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden flex-shrink-0 shadow-lg bg-muted flex items-center justify-center">
            {currentTrack ? (
              <img src={currentTrack.cover} alt={currentTrack.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-secondary" />
            )}
          </div>
          <div className="overflow-hidden">
            <h4 className="font-semibold text-sm md:text-base truncate">{currentTrack?.title || 'Select a track'}</h4>
            <p className="text-muted-foreground text-xs md:text-sm truncate">{currentTrack?.artist || '-'}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-1 md:gap-2 absolute md:relative left-1/2 -translate-x-1/2 md:translate-x-0">
          <div className="flex items-center gap-4 md:gap-6">
            <Button variant="ghost" size="icon" onClick={onPrev} className="hover:text-primary transition-colors">
              <SkipBack className="w-5 h-5 fill-current" />
            </Button>
            <Button 
              size="icon" 
              onClick={onTogglePlay} 
              disabled={!currentTrack}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 fill-current translate-x-0.5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={onNext} className="hover:text-primary transition-colors">
              <SkipForward className="w-5 h-5 fill-current" />
            </Button>
          </div>
          
          <div className="hidden md:flex items-center gap-3 w-full max-w-md">
            <span className="text-[10px] text-muted-foreground w-8 text-right">0:00</span>
            <Slider 
              value={[progress]} 
              max={100} 
              step={0.1} 
              onValueChange={([val]) => onSeek(val)}
              className={cn("flex-1", !currentTrack && "pointer-events-none opacity-50")}
            />
            <span className="text-[10px] text-muted-foreground w-8">3:45</span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center justify-end gap-3">
          <Button variant="ghost" size="icon" onClick={() => onVolumeChange(volume === 0 ? 0.8 : 0)} className="text-muted-foreground hover:text-primary">
            {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <div className="w-24">
            <Slider 
              value={[volume * 100]} 
              max={100} 
              onValueChange={([val]) => onVolumeChange(val / 100)} 
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
