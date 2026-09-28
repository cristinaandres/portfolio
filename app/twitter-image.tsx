import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site.config';

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 600 };
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
        padding: '72px',
        background: 'linear-gradient(135deg, #1D252D 0%, #002260 55%, #91A399 100%)',
        color: 'white',
      }}
    >
      <span
        style={{
          fontSize: 18,
          letterSpacing: 12,
          textTransform: 'uppercase',
          fontWeight: 700,
          fontFamily: 'sans-serif',
        }}
      >
        Portfolio
      </span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h1
          style={{
            fontSize: 104,
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
            fontSize: 34,
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.25,
            fontFamily: 'sans-serif',
            opacity: 0.92,
          }}
        >
          {siteConfig.jobTitle}
        </p>
      </div>

      <span
        style={{
          fontSize: 18,
          opacity: 0.7,
          fontFamily: 'sans-serif',
        }}
      >
        {siteConfig.url.replace(/^https?:\/\//, '')}
      </span>
    </div>,
    { ...size }
  );
}
