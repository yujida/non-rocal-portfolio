import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = '〈非RO컬〉 — 박상욱';
const description = '서울 곳곳에서 발견한, 어느 동네인지 가늠되지 않는 풍경들. 사진·글 박상욱.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: '〈非RO컬〉',
  authors: [{ name: '박상욱' }],
  creator: '박상욱',
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: '〈非RO컬〉 사진·글 박상욱'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.jpg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#070707'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
