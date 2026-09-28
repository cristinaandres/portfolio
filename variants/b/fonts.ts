import { Fredoka } from 'next/font/google';

// Loaded only when variant B renders (preload off, so A and C don't pay for it).
export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  preload: false,
  variable: '--font-fredoka',
});
