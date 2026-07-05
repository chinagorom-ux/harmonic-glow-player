import { Play, Pause } from 'lucide-react';
import { Track } from '@/constants/tracks';
import { cn } from '@/lib/utils';

interface TrackCardProps {
  track: Track;
  isPlaying: boolean;
  isCurrent: boolean;
  onPlay: (track: Track) => void;
}

export function TrackCard({ track, isPlaying, isCurrent, onPlay }: TrackCardProps) {
  const isActive = isCurrent && isPlaying;

  return (
    <div 
      className="group relative flex flex-col gap-3 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer"
      onClick={() => onPlay(track)}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
        <img 
          src={track.cover} 
          alt={track.title} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
            isActive && "scale-110"
          )}
        />
        
        {/* Overlay */}
        <div className={cn(
          "absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          isActive && "opacity-100"
        )}>
          <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {isActive ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            )}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className={cn(
          "font-semibold text-lg truncate transition-colors",
          isCurrent ? "text-primary" : "group-hover:text-primary"
        )}>
          {track.title}
        </h3>
        <p className="text-muted-foreground text-sm truncate">{track.artist}</p>
      </div>
    </div>
  );
}
