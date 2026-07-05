import { Music2 } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          <Music2 className="text-primary w-8 h-8" />
          <span>Harmonic</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors active text-primary">Home</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Discover</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Playlists</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Artists</a>
        </nav>
        <div className="md:hidden">
          {/* Hamburger menu would go here */}
        </div>
      </div>
    </header>
  );
}
