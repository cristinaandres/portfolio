import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site.config';

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background: 'linear-gradient(135deg, #1D252D 0%, #002260 55%, #91A399 100%)',
        color: 'white',
        fontFamily: 'serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: 18,
            letterSpacing: 12,
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          Portfolio
        </span>
        <span
          style={{
            fontSize: 16,
            letterSpacing: 4,
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          cristinadesigns
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h1
          style={{
            fontSize: 110,
            margin: 0,
            lineHeight: 1,
            letterSpacing: -1,
            fontWeight: 700,
            fontFamily: 'serif',
          }}
        >
          {siteConfig.name}
        </h1>
        <p
          style={{
            fontSize: 36,
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.25,
            fontFamily: 'sans-serif',
            opacity: 0.92,
          }}
        >
          {siteConfig.jobTitle}
        </p>
        <p
          style={{
            fontSize: 22,
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.4,
            fontFamily: 'sans-serif',
            opacity: 0.75,
          }}
        >
          {siteConfig.tagline}
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          fontFamily: 'sans-serif',
          fontSize: 18,
          opacity: 0.7,
        }}
      >
        <span>Selected work · 2020 — 2025</span>
        <span>{siteConfig.url.replace(/^https?:\/\//, '')}</span>
      </div>
    </div>,
    { ...size }
  );
}
