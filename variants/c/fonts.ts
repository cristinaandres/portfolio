import { Libre_Bodoni } from 'next/font/google';

// Display face for Muestrario, with the italic the board uses for accents. Poppins (body) is
// already loaded by the root layout as --font-poppins.
export const bodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--c-display',
});
