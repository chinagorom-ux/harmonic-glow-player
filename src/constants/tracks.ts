export interface Track {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
}

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Summer Breeze',
    artist: 'Acoustic Dream',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4dbd9a5b-8c30-4ca3-bdcc-872c7bfe2f37/summer-breeze-cover-680ce160-1783274241455.webp',
  },
  {
    id: '2',
    title: 'Neon Nights',
    artist: 'Synth Wave',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4dbd9a5b-8c30-4ca3-bdcc-872c7bfe2f37/neon-nights-cover-a49d12b2-1783274241127.webp',
  },
  {
    id: '3',
    title: 'Midnight Rain',
    artist: 'Lofi Chill',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/4dbd9a5b-8c30-4ca3-bdcc-872c7bfe2f37/midnight-rain-cover-3955d9d1-1783274241203.webp',
  },
  {
    id: '4',
    title: 'Electric Pulse',
    artist: 'DJ Flash',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: 'https://picsum.photos/400?random=4',
  },
  {
    id: '5',
    title: 'Deep Ocean',
    artist: 'Ambient Echo',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    cover: 'https://picsum.photos/400?random=5',
  },
  {
    id: '6',
    title: 'Urban Jungle',
    artist: 'Street Beat',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    cover: 'https://picsum.photos/400?random=6',
  },
];
